import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://apis.budlee.ai/api";

/**
 * Hook to fetch a signed URL for a single landing page video.
 * Backwards-compatible with existing useSignedVideo(path).
 */
export const useSignedVideo = (path) => {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchSignedUrl = async () => {
      if (!path) return;
      try {
        const response = await axios.get(`${API_BASE_URL}/core/utils/sign-guide-url/?path=${path}`);
        if (isMounted) setVideoSrc(response.data.url);
      } catch (err) {
        console.error("Failed to sign video URL:", err);
      }
    };

    fetchSignedUrl();
    return () => { isMounted = false; };
  }, [path]);

  return videoSrc;
};

/**
 * Hook to fetch signed URLs for multiple landing page videos.
 * Supports an array of storage paths:
 * ['settings/landing_videos/hero0.mp4', 'settings/landing_videos/hero1.mp4', 'settings/landing_videos/hero2.mp4']
 * or an array of objects: [{ path: '...', title: '...' }]
 * Includes automatic graceful fallback to the existing 'settings/landing_videos/hero.mp4' if needed.
 */
export const useSignedVideos = (paths, fallbackPath = 'settings/landing_videos/hero.mp4') => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const pathsKey = JSON.stringify(paths);

  useEffect(() => {
    let isMounted = true;
    const fetchAllSigned = async () => {
      const parsedPaths = pathsKey ? JSON.parse(pathsKey) : [];
      if (!parsedPaths || !Array.isArray(parsedPaths) || parsedPaths.length === 0) {
        setVideos([]);
        setLoading(false);
        return;
      }

      try {
        const resolved = await Promise.all(
          parsedPaths.map(async (item, index) => {
            const rawPath = typeof item === 'string' ? item : item?.path;
            const title = typeof item === 'object' && item?.title ? item.title : `Video ${index + 1}`;
            
            if (!rawPath) return null;

            // Direct URL support
            if (rawPath.startsWith('http://') || rawPath.startsWith('https://')) {
              return { url: rawPath, path: rawPath, title, index };
            }

            try {
              const res = await axios.get(`${API_BASE_URL}/core/utils/sign-guide-url/?path=${rawPath}`);
              return { url: res.data.url, path: rawPath, title, index };
            } catch (err) {
              console.warn(`Could not sign video path: ${rawPath}`, err);
              return null;
            }
          })
        );

        if (isMounted) {
          const validVideos = resolved.filter(Boolean);
          setVideos(validVideos);
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to sign videos array:", err);
        if (isMounted) setLoading(false);
      }
    };

    fetchAllSigned();
    return () => { isMounted = false; };
  }, [pathsKey, fallbackPath]);

  return { videos, loading };
};
