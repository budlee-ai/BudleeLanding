import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, User, Tag, ArrowLeft, Share2, BookOpen, Clock } from 'lucide-react';

const BlogArticlePage = () => {
  const { slug } = useParams();

  useEffect(() => {
    mixpanel.track('Blog Article Viewed', { articleSlug: slug });
  }, [slug]);

  const articles = {
    "how-ai-is-revolutionizing-classroom-learning": {
      title: "How AI is Revolutionizing Classroom Learning",
      author: "Saleej Kuruniyan",
      date: "2025-02-15",
      category: "AI & Learning",
      readTime: "5 min read",
      image: "images/blog/ai-classroom.jpg",
      content: `
        <h2>The Dawn of AI-Powered Education</h2>
        <p>Artificial Intelligence is no longer a futuristic concept—it's actively transforming how we teach and learn in classrooms worldwide. From personalized learning paths to intelligent tutoring systems, AI is creating unprecedented opportunities for educational excellence.</p>

        <h2>Personalized Learning Experiences</h2>
        <p>One of the most significant impacts of AI in education is its ability to create truly personalized learning experiences. Traditional one-size-fits-all approaches are being replaced by adaptive learning systems that adjust content difficulty, pacing, and teaching methods based on individual student needs.</p>

        <p>AI algorithms analyze student performance data in real-time, identifying strengths, weaknesses, and learning patterns. This enables educators to provide targeted interventions and support exactly when and where students need it most.</p>

        <h2>Intelligent Assessment and Feedback</h2>
        <p>AI-powered assessment tools are revolutionizing how we evaluate student understanding. These systems can provide instant feedback, detailed analytics, and predictive insights that help both students and teachers make informed decisions about learning progress.</p>

        <h2>The Future of Classroom Technology</h2>
        <p>As AI continues to evolve, we can expect to see even more sophisticated applications in education. From virtual reality classrooms to AI-powered curriculum design, the possibilities are endless.</p>

        <p>However, it's crucial to remember that AI should enhance, not replace, human teachers. The most effective educational environments will combine the power of AI with the irreplaceable human elements of mentorship, inspiration, and emotional support.</p>

        <h2>Conclusion</h2>
        <p>The revolution in classroom learning is just beginning. As AI technology becomes more sophisticated and accessible, it will continue to democratize education and create opportunities for learners worldwide. The key to success lies in thoughtful implementation that prioritizes student needs and maintains the human connection that makes learning meaningful.</p>
      `,
      tags: ["AI", "Education Technology", "Personalized Learning", "Classroom Innovation"]
    },
    "the-future-of-personalized-education": {
      title: "The Future of Personalized Education",
      author: "Suhail Mohammed",
      date: "2025-02-12",
      category: "Education Technology",
      readTime: "7 min read",
      image: "images/blog/personalized-learning.jpg",
      content: `
        <h2>Understanding Personalized Education</h2>
        <p>Personalized education represents a fundamental shift from traditional classroom models to learning experiences tailored to individual student needs, preferences, and learning styles. This approach recognizes that every student has unique strengths, challenges, and pathways to success.</p>

        <h2>Adaptive Learning Platforms</h2>
        <p>Modern adaptive learning platforms use sophisticated algorithms to analyze student performance and adjust content delivery in real-time. These systems can identify knowledge gaps, recommend appropriate learning materials, and modify difficulty levels to maintain optimal challenge levels.</p>

        <p>The beauty of adaptive learning lies in its ability to provide immediate feedback and personalized guidance, creating a learning environment where students can progress at their own pace without feeling left behind or held back.</p>

        <h2>Data-Driven Insights</h2>
        <p>Personalized education relies heavily on data analytics to understand student behavior and learning patterns. By collecting and analyzing data on student interactions, educators can gain valuable insights into:</p>
        <ul>
          <li>Learning preferences and styles</li>
          <li>Time management patterns</li>
          <li>Subject-specific strengths and weaknesses</li>
          <li>Motivation and engagement levels</li>
        </ul>

        <h2>Challenges and Solutions</h2>
        <p>While personalized education offers tremendous benefits, it also presents unique challenges. Privacy concerns, data security, and the need for robust technological infrastructure must be carefully addressed.</p>

        <p>Solutions include implementing strong data protection measures, providing transparent data usage policies, and ensuring equitable access to technology across all socioeconomic backgrounds.</p>

        <h2>The Role of AI in Personalization</h2>
        <p>Artificial Intelligence plays a crucial role in enabling personalized education at scale. Machine learning algorithms can process vast amounts of data to create detailed student profiles and recommend optimal learning strategies.</p>

        <h2>Looking Ahead</h2>
        <p>The future of personalized education is bright. As technology continues to advance, we can expect to see even more sophisticated personalization capabilities that will make high-quality, individualized education accessible to learners worldwide.</p>
      `,
      tags: ["Personalized Learning", "Adaptive Technology", "Education Innovation", "AI"]
    },
    "building-digital-literacy-skills-for-tomorrow": {
      title: "Building Digital Literacy Skills for Tomorrow",
      author: "Mohammed Irfan",
      date: "2025-02-10",
      category: "Teaching Tips",
      readTime: "6 min read",
      image: "images/blog/digital-literacy.jpg",
      content: `
        <h2>The Importance of Digital Literacy</h2>
        <p>In today's digital age, digital literacy is no longer optional—it's essential. Students need more than just technical skills; they need the ability to navigate, evaluate, and create digital content effectively and responsibly.</p>

        <h2>Core Digital Literacy Skills</h2>
        <p>Digital literacy encompasses a wide range of competencies that enable individuals to thrive in a digital world:</p>

        <h3>Information Evaluation</h3>
        <p>The ability to assess the credibility, accuracy, and relevance of online information is crucial in an era of information overload and misinformation.</p>

        <h3>Digital Communication</h3>
        <p>Effective online communication requires understanding appropriate platforms, tone, and etiquette for different digital contexts.</p>

        <h3>Privacy and Security</h3>
        <p>Understanding how to protect personal information, recognize security threats, and maintain digital privacy is essential for safe online participation.</p>

        <h2>Integrating Digital Literacy into Curriculum</h2>
        <p>Educators can integrate digital literacy skills across all subject areas:</p>
        <ul>
          <li>Research projects that emphasize source evaluation</li>
          <li>Collaborative online platforms for group work</li>
          <li>Digital citizenship discussions and activities</li>
          <li>Critical thinking exercises about online content</li>
        </ul>

        <h2>The Role of Technology in Teaching Digital Literacy</h2>
        <p>Educational technology can both teach and demonstrate digital literacy skills. Interactive platforms, online collaboration tools, and digital assessment systems provide practical opportunities for students to develop and apply their digital literacy competencies.</p>

        <h2>Challenges and Best Practices</h2>
        <p>Teaching digital literacy presents unique challenges, including rapidly evolving technology and varying student access levels. Best practices include:</p>
        <ul>
          <li>Regular assessment and updating of digital literacy curricula</li>
          <li>Providing equitable access to technology and training</li>
          <li>Incorporating real-world digital scenarios into learning activities</li>
          <li>Fostering ongoing dialogue about digital ethics and responsibility</li>
        </ul>

        <h2>Preparing Students for the Future</h2>
        <p>Digital literacy is not just about using technology—it's about understanding how technology shapes our world and our place in it. By developing strong digital literacy skills, we prepare students to be informed, responsible, and empowered digital citizens.</p>
      `,
      tags: ["Digital Literacy", "Technology Education", "Teaching Strategies", "Digital Citizenship"]
    },
    "gamification-making-learning-fun-and-effective": {
      title: "Gamification: Making Learning Fun and Effective",
      author: "Suhail Mohammed",
      date: "2025-02-08",
      category: "Student Success",
      readTime: "4 min read",
      image: "images/blog/gamification.jpg",
      content: `
        <h2>The Power of Gamification in Education</h2>
        <p>Gamification is transforming education by making learning engaging, interactive, and enjoyable. By incorporating game design elements into educational content, educators can increase student motivation and improve learning outcomes.</p>

        <h2>What is Gamification?</h2>
        <p>Gamification involves applying game-design elements and principles in non-game contexts to make activities more engaging. In education, this means using points, badges, leaderboards, challenges, and rewards to motivate student participation and learning.</p>

        <h2>Benefits of Gamified Learning</h2>
        <p>Research shows that gamification can significantly improve learning outcomes:</p>

        <h3>Increased Engagement</h3>
        <p>Game elements tap into students' natural desire for achievement and competition, making learning more intrinsically motivating.</p>

        <h3>Improved Retention</h3>
        <p>Interactive, game-based learning helps students retain information longer through active participation and reinforcement.</p>

        <h3>Immediate Feedback</h3>
        <p>Gamified systems provide instant feedback, allowing students to understand their progress and adjust their learning strategies.</p>

        <h2>Implementing Gamification Effectively</h2>
        <p>Successful gamification requires careful planning and implementation:</p>

        <h3>Clear Learning Objectives</h3>
        <p>Game elements should align with educational goals, not distract from them.</p>

        <h3>Appropriate Challenge Levels</h3>
        <p>Activities should be challenging enough to engage but not so difficult as to frustrate students.</p>

        <h3>Diverse Reward Systems</h3>
        <p>Different students respond to different types of rewards—some prefer recognition, others tangible rewards.</p>

        <h2>Examples of Educational Gamification</h2>
        <ul>
          <li>Points and badges for completing assignments</li>
          <li>Leaderboards for class participation</li>
          <li>Progress bars showing advancement through curriculum</li>
          <li>Virtual rewards for mastering concepts</li>
          <li>Collaborative challenges and team competitions</li>
        </ul>

        <h2>Potential Challenges</h2>
        <p>While gamification offers many benefits, it's important to be aware of potential pitfalls:</p>
        <ul>
          <li>Overemphasis on competition can discourage some students</li>
          <li>Extrinsic rewards may undermine intrinsic motivation</li>
          <li>Technical issues can disrupt learning experiences</li>
        </ul>

        <h2>Best Practices for Gamified Learning</h2>
        <p>To maximize the benefits of gamification:</p>
        <ul>
          <li>Balance competition with collaboration</li>
          <li>Ensure inclusivity for all learning styles</li>
          <li>Regularly assess and adjust game elements</li>
          <li>Combine gamification with meaningful learning activities</li>
        </ul>

        <h2>The Future of Gamified Education</h2>
        <p>As technology advances, we can expect to see more sophisticated gamification applications, including AI-driven adaptive games, virtual reality learning environments, and personalized learning quests.</p>

        <p>Gamification has the potential to revolutionize education by making learning more engaging and effective for all students.</p>
      `,
      tags: ["Gamification", "Student Engagement", "Learning Motivation", "Educational Technology"]
    },
    "the-rise-of-ai-tutors-in-education": {
      title: "The Rise of AI Tutors in Education",
      author: "Abdul Rahim",
      date: "2025-02-05",
      category: "Innovation",
      readTime: "8 min read",
      image: "images/blog/ai-tutors.jpg",
      content: `
        <h2>The Evolution of AI Tutoring</h2>
        <p>AI tutors are revolutionizing personalized education by providing 24/7 access to intelligent tutoring systems that adapt to individual student needs. These sophisticated tools are changing how students learn and how educators teach.</p>

        <h2>What are AI Tutors?</h2>
        <p>AI tutors are intelligent software systems that use artificial intelligence to provide personalized instruction, feedback, and support. Unlike traditional tutoring, AI tutors are available anytime, anywhere, and can adapt their teaching strategies based on real-time student performance.</p>

        <h2>How AI Tutors Work</h2>
        <p>Modern AI tutoring systems employ several key technologies:</p>

        <h3>Natural Language Processing</h3>
        <p>AI tutors can understand and respond to student questions in natural language, making interactions more conversational and intuitive.</p>

        <h3>Machine Learning Algorithms</h3>
        <p>These systems learn from vast amounts of educational data to identify effective teaching strategies and adapt to individual learning styles.</p>

        <h3>Adaptive Assessment</h3>
        <p>AI tutors continuously assess student understanding and adjust difficulty levels, pacing, and content to optimize learning.</p>

        <h2>Benefits of AI Tutoring</h2>
        <p>AI tutors offer numerous advantages over traditional tutoring methods:</p>

        <h3>24/7 Availability</h3>
        <p>Students can access help whenever they need it, not just during scheduled tutoring sessions.</p>

        <h3>Scalability</h3>
        <p>AI tutors can serve thousands of students simultaneously, making high-quality tutoring accessible to all.</p>

        <h3>Consistency</h3>
        <p>AI systems provide consistent, unbiased instruction and assessment.</p>

        <h3>Personalization</h3>
        <p>Each student's learning experience is tailored to their specific needs and progress.</p>

        <h2>Impact on Student Outcomes</h2>
        <p>Research shows that AI tutoring can significantly improve learning outcomes:</p>
        <ul>
          <li>Increased test scores and academic performance</li>
          <li>Improved problem-solving skills</li>
          <li>Better retention of learned material</li>
          <li>Enhanced student confidence and motivation</li>
        </ul>

        <h2>Integration with Traditional Education</h2>
        <p>AI tutors are most effective when integrated with traditional classroom instruction. They serve as valuable supplements to teacher-led learning, providing additional support and practice opportunities.</p>

        <h2>Challenges and Considerations</h2>
        <p>While AI tutoring offers tremendous potential, several challenges must be addressed:</p>

        <h3>Data Privacy</h3>
        <p>Protecting student data and ensuring privacy is paramount in AI tutoring systems.</p>

        <h3>Digital Divide</h3>
        <p>Ensuring equitable access to AI tutoring technology for all students, regardless of socioeconomic status.</p>

        <h3>Teacher Training</h3>
        <p>Educators need training to effectively integrate AI tools into their teaching practices.</p>

        <h2>The Future of AI Tutoring</h2>
        <p>The future of AI tutoring is incredibly promising. Advances in AI technology will lead to even more sophisticated tutoring systems that can:</p>
        <ul>
          <li>Understand emotional states and adjust teaching approaches accordingly</li>
          <li>Provide multi-modal learning experiences combining text, audio, and visual elements</li>
          <li>Collaborate with human teachers to create hybrid learning environments</li>
          <li>Support learning across multiple languages and cultural contexts</li>
        </ul>

        <h2>Conclusion</h2>
        <p>AI tutors represent a significant advancement in educational technology. By providing personalized, accessible, and effective tutoring, these systems have the potential to democratize high-quality education and improve learning outcomes for students worldwide.</p>
      `,
      tags: ["AI Tutors", "Personalized Learning", "Educational Technology", "Innovation"]
    },
    "creating-inclusive-learning-environments": {
      title: "Creating Inclusive Learning Environments",
      author: "Saleej Kuruniyan",
      date: "2025-02-03",
      category: "Teaching Tips",
      readTime: "6 min read",
      image: "images/blog/inclusive-learning.jpg",
      content: `
        <h2>The Importance of Inclusive Education</h2>
        <p>Inclusive learning environments celebrate diversity and ensure that all students, regardless of background, abilities, or learning styles, have equitable access to high-quality education. Creating such environments requires intentional planning and commitment from educators and institutions.</p>

        <h2>Understanding Inclusion in Education</h2>
        <p>Educational inclusion goes beyond physical accessibility—it's about creating learning spaces where every student feels valued, supported, and capable of success. This involves addressing diverse needs across cognitive, physical, social, and emotional dimensions.</p>

        <h2>Key Principles of Inclusive Education</h2>
        <p>Several core principles guide the creation of inclusive learning environments:</p>

        <h3>Equity Over Equality</h3>
        <p>While equality provides the same resources to all, equity recognizes that different students need different levels of support to achieve the same outcomes.</p>

        <h3>Universal Design for Learning</h3>
        <p>UDL principles ensure that curriculum and instruction are designed from the outset to meet the needs of diverse learners.</p>

        <h3>Cultural Responsiveness</h3>
        <p>Inclusive education honors and incorporates students' cultural backgrounds, languages, and experiences into the learning process.</p>

        <h2>Strategies for Creating Inclusive Classrooms</h2>
        <p>Educators can implement various strategies to foster inclusivity:</p>

        <h3>Differentiated Instruction</h3>
        <p>Tailoring teaching methods, content, and assessment to meet individual student needs while maintaining high expectations for all.</p>

        <h3>Collaborative Learning</h3>
        <p>Creating opportunities for students to work together in diverse groups, learning from each other's strengths and perspectives.</p>

        <h3>Flexible Assessment</h3>
        <p>Using multiple assessment methods that allow students to demonstrate understanding in ways that best suit their abilities and learning styles.</p>

        <h2>Supporting Diverse Learners</h2>
        <p>Inclusive classrooms must address the needs of various student populations:</p>

        <h3>Students with Disabilities</h3>
        <p>Providing appropriate accommodations, assistive technology, and individualized support plans.</p>

        <h3>English Language Learners</h3>
        <p>Offering language support, bilingual resources, and culturally relevant content.</p>

        <h3>Gifted and Talented Students</h3>
        <p>Providing enrichment opportunities and advanced challenges to meet their learning needs.</p>

        <h2>The Role of Technology in Inclusion</h2>
        <p>Educational technology can play a crucial role in creating inclusive environments:</p>
        <ul>
          <li>Assistive technologies for students with disabilities</li>
          <li>Translation tools for multilingual classrooms</li>
          <li>Adaptive learning platforms that adjust to individual needs</li>
          <li>Communication tools that support diverse communication styles</li>
        </ul>

        <h2>Professional Development for Educators</h2>
        <p>Creating inclusive environments requires ongoing professional development for educators. Training should focus on:</p>
        <ul>
          <li>Cultural competency and bias awareness</li>
          <li>Universal design principles</li>
          <li>Differentiated instruction techniques</li>
          <li>Effective collaboration with support staff</li>
        </ul>

        <h2>Measuring Success</h2>
        <p>Evaluating the effectiveness of inclusive practices involves multiple indicators:</p>
        <ul>
          <li>Student engagement and participation rates</li>
          <li>Academic achievement across diverse student groups</li>
          <li>Student satisfaction and sense of belonging</li>
          <li>Reduction in disciplinary incidents</li>
        </ul>

        <h2>Challenges and Solutions</h2>
        <p>Implementing inclusive education can be challenging, but solutions exist:</p>

        <h3>Resource Constraints</h3>
        <p>Schools can leverage community partnerships and seek grant funding to support inclusive initiatives.</p>

        <h3>Resistance to Change</h3>
        <p>Building awareness and providing evidence of the benefits of inclusion can help overcome resistance.</p>

        <h2>The Future of Inclusive Education</h2>
        <p>As our understanding of diversity and inclusion grows, educational practices will continue to evolve. The future of inclusive education lies in:</p>
        <ul>
          <li>Greater integration of technology for accessibility</li>
          <li>More comprehensive teacher training programs</li>
          <li>Stronger partnerships between schools and communities</li>
          <li>Policy frameworks that support and mandate inclusion</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Creating inclusive learning environments is not just an educational imperative—it's a moral one. When all students feel valued and supported, everyone benefits. Inclusive education builds stronger communities, fosters innovation, and prepares students to thrive in a diverse world.</p>
      `,
      tags: ["Inclusive Education", "Diversity", "Teaching Strategies", "Equity"]
    }
  };

  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <BookOpen className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Article Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">The article you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header />

      <main className="flex-grow">
        {/* Back Navigation */}
        <section className="w-full py-4 px-4 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="w-full py-8 md:py-12 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span key={index} className="bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="w-full pb-16 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="w-full h-[300px] md:h-[450px] rounded-2xl mb-12 overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800">
              <img
                src={`${process.env.PUBLIC_URL || ''}/${article.image}`}
                alt={article.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/1200x800/00A859/white?text=Budlee+AI';
                }}
              />
            </div>

            {/* Article Body */}
            <div
              className="max-w-none text-gray-700 dark:text-gray-300 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-800 dark:[&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:leading-tight
                         [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-800 dark:[&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:leading-tight
                         [&_p]:text-gray-700 dark:[&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-4
                         [&_ul]:text-gray-700 dark:[&_ul]:text-gray-300 [&_ul]:space-y-2 [&_ul]:ml-6 [&_ul]:list-disc
                         [&_ol]:text-gray-700 dark:[&_ol]:text-gray-300 [&_ol]:space-y-2 [&_ol]:ml-6 [&_ol]:list-decimal
                         [&_li]:text-gray-700 dark:[&_li]:text-gray-300 [&_li]:leading-relaxed
                         [&_strong]:text-gray-900 dark:[&_strong]:text-white [&_strong]:font-semibold
                         [&_a]:text-green-600 dark:[&_a]:text-green-400 [&_a]:hover:text-green-700 dark:[&_a]:hover:text-green-300 [&_a]:no-underline
                         [&_blockquote]:border-l-4 [&_blockquote]:border-green-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 dark:[&_blockquote]:text-gray-400 [&_blockquote]:my-4
                         [&_table]:text-gray-700 dark:[&_table]:text-gray-300 [&_table]:w-full [&_table]:border-collapse
                         [&_th]:bg-gray-50 dark:[&_th]:bg-gray-800 [&_th]:text-gray-800 dark:[&_th]:text-white [&_th]:font-semibold [&_th]:p-3 [&_th]:text-left [&_th]:border [&_th]:border-gray-200 dark:[&_th]:border-gray-700
                         [&_td]:p-3 [&_td]:border [&_td]:border-gray-200 dark:[&_td]:border-gray-700
                         [&_code]:bg-gray-100 dark:[&_code]:bg-gray-800 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
                         [&_pre]:bg-gray-100 dark:[&_pre]:bg-gray-800 [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:my-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
                <Link to="/blog" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors">
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticlePage;