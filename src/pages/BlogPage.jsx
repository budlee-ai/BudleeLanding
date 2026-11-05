import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, User, Tag, Search, BookOpen, TrendingUp, Users, Lightbulb, Atom, Star, Sparkles, FlaskConical } from 'lucide-react';

const BlogPage = () => {
  useEffect(() => {
    mixpanel.track('Blog Page Viewed');
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Education Technology',
    'AI & Learning',
    'Teaching Tips',
    'Student Success',
    'Innovation'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "How AI is Revolutionizing Classroom Learning",
      slug: "how-ai-is-revolutionizing-classroom-learning",
      excerpt: "Discover how artificial intelligence is transforming traditional education methods and creating personalized learning experiences for every student.",
      author: "Saleej Kuruniyan",
      date: "2025-02-15",
      category: "AI & Learning",
      readTime: "5 min read",
      image: "images/blog/ai-classroom.jpg",
      featured: true
    },
    {
      id: 2,
      title: "The Future of Personalized Education",
      slug: "the-future-of-personalized-education",
      excerpt: "Explore how adaptive learning platforms are creating customized educational journeys that cater to individual student needs and learning styles.",
      author: "Suhail Mohammed",
      date: "2025-02-12",
      category: "Education Technology",
      readTime: "7 min read",
      image: "images/blog/personalized-learning.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Building Digital Literacy Skills for Tomorrow",
      slug: "building-digital-literacy-skills-for-tomorrow",
      excerpt: "Essential digital literacy skills that every student needs to succeed in the modern world, and how educators can integrate them into their curriculum.",
      author: "Mohammed Irfan",
      date: "2025-02-10",
      category: "Teaching Tips",
      readTime: "6 min read",
      image: "images/blog/digital-literacy.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Gamification: Making Learning Fun and Effective",
      slug: "gamification-making-learning-fun-and-effective",
      excerpt: "How game-based learning techniques can increase student engagement and improve knowledge retention across all age groups.",
      author: "Suhail Mohammed",
      date: "2025-02-08",
      category: "Student Success",
      readTime: "4 min read",
      image: "images/blog/gamification.jpg",
      featured: false
    },
    {
      id: 5,
      title: "The Rise of AI Tutors in Education",
      slug: "the-rise-of-ai-tutors-in-education",
      excerpt: "Examining the impact of AI-powered tutoring systems on student outcomes and the future of one-on-one learning support.",
      author: "Abdul Rahim",
      date: "2025-02-05",
      category: "Innovation",
      readTime: "8 min read",
      image: "images/blog/ai-tutors.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Creating Inclusive Learning Environments",
      slug: "creating-inclusive-learning-environments",
      excerpt: "Strategies for educators to create welcoming classrooms that support diverse learning needs and foster equity in education.",
      author: "Saleej Kuruniyan",
      date: "2025-02-03",
      category: "Teaching Tips",
      readTime: "6 min read",
      image: "images/blog/inclusive-learning.jpg",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-16 md:py-5 px-4 md:px-12 lg:px-20 relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
          
          {/* Floating Doodles - Hidden on mobile, visible on md+ */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
            {/* Top Left - Atom */}
            <div className="absolute top-8 left-[8%] text-green-300 animate-float-slow">
              <Atom className="w-10 h-10 opacity-60" />
            </div>
            
            {/* Top Right - Flask */}
            <div className="absolute top-12 right-[12%] text-yellow-400 animate-float-medium">
              <FlaskConical className="w-8 h-8 opacity-50" />
            </div>
            
            {/* Middle Left - Lightbulb */}
            <div className="absolute top-1/3 left-[4%] text-orange-300 animate-float-fast">
              <Lightbulb className="w-7 h-7 opacity-50" />
            </div>
            
            {/* Bottom Right - Stars */}
            <div className="absolute bottom-28 right-[6%] text-green-400 animate-float-slow">
              <Star className="w-8 h-8 opacity-40 fill-current" />
            </div>
            
            {/* Top Center - Sparkles */}
            <div className="absolute top-6 left-[35%] text-yellow-400 animate-float-medium">
              <Sparkles className="w-6 h-6 opacity-50" />
            </div>
            
            {/* Bottom Left - Star */}
            <div className="absolute bottom-24 left-[10%] text-orange-400 animate-float-fast">
              <Star className="w-5 h-5 opacity-40 fill-current" />
            </div>

            {/* Decorative circles */}
            <div className="absolute top-20 right-[22%] w-16 h-16 rounded-full bg-green-200 opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-40 left-[18%] w-12 h-12 rounded-full bg-yellow-200 opacity-20 animate-pulse-slow"></div>
          </div>

          {/* Mobile Floating Doodles - Smaller, fewer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden md:hidden">
            <div className="absolute top-4 right-[8%] text-green-300 animate-float-slow">
              <Atom className="w-6 h-6 opacity-40" />
            </div>
            <div className="absolute top-20 left-[5%] text-yellow-400 animate-float-medium">
              <Star className="w-5 h-5 opacity-40 fill-current" />
            </div>
            <div className="absolute bottom-32 right-[10%] text-orange-300 animate-float-fast">
              <Sparkles className="w-5 h-5 opacity-40" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl mb-0">
              Budlee AI <span className="gradient-text">Blogs</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Insights, trends, and expert perspectives on AI-powered education, teaching innovation, and the future of learning.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="w-full py-8 px-4 md:px-12 lg:px-20 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col">
                    <Link to={`/blog/${post.slug}`} className="h-64 overflow-hidden bg-gray-100 dark:bg-gray-800 relative group">
                      <img
                        src={`${process.env.PUBLIC_URL || ''}/${post.image}`}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://placehold.co/600x400/00A859/white?text=Budlee+AI';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </Link>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                        <Link to={`/blog/${post.slug}`} className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Latest Articles</h2>

            {regularPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article key={post.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col">
                    <Link to={`/blog/${post.slug}`} className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 relative group">
                      <img
                        src={`${process.env.PUBLIC_URL || ''}/${post.image}`}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://placehold.co/400x300/00A859/white?text=Budlee+AI';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </Link>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 hover:text-green-600 dark:hover:text-green-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50 dark:border-gray-800">
                        <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                        <Link to={`/blog/${post.slug}`} className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors text-sm">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">No articles found</h3>
                <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 dark:from-gray-900 dark:via-emerald-950/50 dark:to-gray-900 border-t border-b border-transparent dark:border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-green-100 dark:text-gray-300 text-xl mb-8 font-medium">
              Get the latest insights on AI-powered education delivered to your inbox
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/20 dark:bg-gray-800/80 border border-white/30 dark:border-gray-700 text-white placeholder-white/70 dark:placeholder-gray-400 focus:ring-2 focus:ring-white dark:focus:ring-emerald-400 focus:border-transparent"
                />
                <button className="bg-white dark:bg-gradient-to-r dark:from-green-500 dark:via-emerald-500 dark:to-teal-400 text-green-600 dark:text-white hover:bg-green-50 dark:hover:from-green-600 dark:hover:via-emerald-600 dark:hover:to-teal-500 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        headline=""
        subtext=""
        ctaText=""
      />
    </div>
  );
};

export default BlogPage;