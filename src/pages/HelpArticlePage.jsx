import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, HelpCircle, MessageCircle, FileText, Phone, Lightbulb, CheckCircle } from 'lucide-react';

const HelpArticlePage = () => {
  const { slug } = useParams();

  useEffect(() => {
    mixpanel.track('Help Article Viewed', { articleSlug: slug });
  }, [slug]);

  const articles = {
    "how-to-create-your-account": {
      title: "How to create your account",
      category: "Getting Started",
      categoryIcon: MessageCircle,
      categoryColor: "from-blue-400 to-indigo-500",
      content: `
        <h2>Creating Your Budlee AI Account</h2>
        <p>Welcome to Budlee AI! Creating an account is quick and easy. Follow these simple steps to get started with your personalized learning journey.</p>

        <h3>Step 1: Visit the Sign-Up Page</h3>
        <p>Navigate to <strong>budlee.ai/signup</strong> or click the "Sign Up" button on our homepage.</p>

        <h3>Step 2: Choose Your Account Type</h3>
        <p>Select whether you're a student, teacher, or parent. This helps us customize your experience.</p>

        <h3>Step 3: Enter Your Information</h3>
        <p>Provide your email address and create a strong password. Make sure to use an email you have access to.</p>

        <h3>Step 4: Verify Your Email</h3>
        <p>Check your email for a verification link and click it to activate your account.</p>

        <h3>Step 5: Complete Your Profile</h3>
        <p>Add your name, grade level (if applicable), and learning interests to personalize your experience.</p>

        <h2>Tips for Account Creation</h2>
        <ul>
          <li>Use a strong, unique password</li>
          <li>Choose an email address you'll check regularly</li>
          <li>Be honest about your grade level for better recommendations</li>
          <li>Complete your profile for the best personalized experience</li>
        </ul>

        <h2>Need Help?</h2>
        <p>If you encounter any issues during account creation, contact our support team at <strong>help@budlee.ai</strong> or visit our Help Center.</p>
      `
    },
    "setting-up-your-profile": {
      title: "Setting up your profile",
      category: "Getting Started",
      categoryIcon: MessageCircle,
      categoryColor: "from-blue-400 to-indigo-500",
      content: `
        <h2>Personalizing Your Budlee AI Profile</h2>
        <p>Your profile is the foundation of your personalized learning experience. Here's how to set it up for optimal results.</p>

        <h3>Accessing Profile Settings</h3>
        <p>After logging in, click on your profile picture or avatar in the top-right corner and select "Profile Settings".</p>

        <h3>Basic Information</h3>
        <ul>
          <li><strong>Display Name:</strong> Choose how you want to be known on the platform</li>
          <li><strong>Grade Level:</strong> Select your current grade for age-appropriate content</li>
          <li><strong>School:</strong> Add your school information (optional)</li>
          <li><strong>Location:</strong> Help us provide region-specific content</li>
        </ul>

        <h3>Learning Preferences</h3>
        <p>Tell us about your interests and learning style:</p>
        <ul>
          <li>Favorite subjects</li>
          <li>Learning goals</li>
          <li>Preferred difficulty level</li>
          <li>Study schedule preferences</li>
        </ul>

        <h3>Privacy Settings</h3>
        <p>Control who can see your activity:</p>
        <ul>
          <li>Profile visibility</li>
          <li>Activity sharing preferences</li>
          <li>Communication settings</li>
        </ul>

        <h3>Profile Picture</h3>
        <p>Upload a profile picture or choose from our avatar collection to make your profile more personal.</p>

        <h2>Why Profile Setup Matters</h2>
        <p>A complete profile enables Budlee AI to:</p>
        <ul>
          <li>Recommend relevant content</li>
          <li>Adjust difficulty levels appropriately</li>
          <li>Connect you with similar learners</li>
          <li>Track your progress accurately</li>
        </ul>
      `
    },
    "navigating-the-platform": {
      title: "Navigating the platform",
      category: "Getting Started",
      categoryIcon: MessageCircle,
      categoryColor: "from-blue-400 to-indigo-500",
      content: `
        <h2>Getting Around Budlee AI</h2>
        <p>Our platform is designed to be intuitive and user-friendly. Here's a guide to help you navigate all the features.</p>

        <h3>Main Navigation</h3>
        <ul>
          <li><strong>Dashboard:</strong> Your personalized homepage with recent activity and recommendations</li>
          <li><strong>AI Chat:</strong> Access our intelligent chatbot for learning assistance</li>
          <li><strong>Quests:</strong> Interactive learning challenges and missions</li>
          <li><strong>Curiosity Centre:</strong> Explore topics that interest you</li>
          <li><strong>Community:</strong> Connect with other learners and educators</li>
        </ul>

        <h3>Sidebar Menu</h3>
        <p>The sidebar provides quick access to:</p>
        <ul>
          <li>Learning progress</li>
          <li>Achievements and badges</li>
          <li>Study streaks</li>
          <li>Quick actions</li>
        </ul>

        <h3>Search Functionality</h3>
        <p>Use the search bar to find:</p>
        <ul>
          <li>Specific topics or subjects</li>
          <li>Help articles</li>
          <li>Community discussions</li>
          <li>Your saved content</li>
        </ul>

        <h3>Mobile Navigation</h3>
        <p>On mobile devices:</p>
        <ul>
          <li>Use the hamburger menu for navigation</li>
          <li>Swipe gestures for quick actions</li>
          <li>Bottom navigation bar for key features</li>
        </ul>

        <h2>Keyboard Shortcuts</h2>
        <ul>
          <li><strong>Ctrl/Cmd + K:</strong> Open search</li>
          <li><strong>Ctrl/Cmd + /:</strong> Open keyboard shortcuts help</li>
          <li><strong>Esc:</strong> Close modals or return to previous page</li>
        </ul>
      `
    },
    "understanding-your-dashboard": {
      title: "Understanding your dashboard",
      category: "Getting Started",
      categoryIcon: MessageCircle,
      categoryColor: "from-blue-400 to-indigo-500",
      content: `
        <h2>Your Budlee AI Dashboard</h2>
        <p>The dashboard is your command center for learning. It provides insights into your progress and personalized recommendations.</p>

        <h3>Key Dashboard Components</h3>

        <h4>Learning Progress Overview</h4>
        <p>Track your advancement across different subjects and skills with visual progress bars and completion percentages.</p>

        <h4>Recent Activity</h4>
        <p>See your latest interactions, completed quests, and AI chat sessions.</p>

        <h4>Recommended Content</h4>
        <p>AI-powered suggestions based on your learning patterns and goals.</p>

        <h4>Achievement Badges</h4>
        <p>Celebrate your milestones with earned badges and certificates.</p>

        <h3>Customizable Widgets</h3>
        <p>Personalize your dashboard by:</p>
        <ul>
          <li>Rearranging widget positions</li>
          <li>Showing/hiding specific sections</li>
          <li>Setting up custom goals</li>
          <li>Choosing favorite subjects</li>
        </ul>

        <h3>Quick Actions</h3>
        <p>Access frequently used features directly from the dashboard:</p>
        <ul>
          <li>Start a new quest</li>
          <li>Open AI chat</li>
          <li>Join community discussions</li>
          <li>View study statistics</li>
        </ul>

        <h3>Notifications Center</h3>
        <p>Stay updated with:</p>
        <ul>
          <li>New content recommendations</li>
          <li>Quest deadlines</li>
          <li>Community mentions</li>
          <li>System updates</li>
        </ul>
      `
    },
    "using-ai-chat-effectively": {
      title: "Using AI Chat effectively",
      category: "AI Chat & Features",
      categoryIcon: HelpCircle,
      categoryColor: "from-green-400 to-emerald-500",
      content: `
        <h2>Making the Most of Budlee AI Chat</h2>
        <p>Our AI chat is designed to be your intelligent learning companion. Here's how to use it effectively for the best results.</p>

        <h3>Getting Started</h3>
        <p>Access AI Chat from the main navigation or dashboard. The chat interface is clean and intuitive.</p>

        <h3>Effective Question Types</h3>
        <ul>
          <li><strong>Specific Questions:</strong> "Explain photosynthesis step by step"</li>
          <li><strong>Conceptual Questions:</strong> "What is the difference between weather and climate?"</li>
          <li><strong>Problem-Solving:</strong> "Help me solve this math equation: 2x + 3 = 7"</li>
          <li><strong>Study Help:</strong> "Create a study plan for biology exam"</li>
        </ul>

        <h3>Tips for Better Interactions</h3>
        <ul>
          <li>Be specific about your question</li>
          <li>Provide context when asking for help</li>
          <li>Ask follow-up questions to deepen understanding</li>
          <li>Use the chat for practice problems</li>
          <li>Request explanations at different difficulty levels</li>
        </ul>

        <h3>Available Features</h3>
        <ul>
          <li><strong>Multi-subject Support:</strong> Math, Science, History, Languages, and more</li>
          <li><strong>Code Examples:</strong> Programming help with code snippets</li>
          <li><strong>Visual Explanations:</strong> Requests for diagrams and illustrations</li>
          <li><strong>Practice Mode:</strong> Generate practice questions</li>
          <li><strong>Study Sessions:</strong> Structured learning conversations</li>
        </ul>

        <h3>Best Practices</h3>
        <ul>
          <li>Start with simpler questions and build complexity</li>
          <li>Use the chat regularly for consistent learning</li>
          <li>Save important conversations for later reference</li>
          <li>Combine chat with other platform features</li>
        </ul>
      `
    },
    "community-guidelines": {
      title: "Community guidelines",
      category: "AI Chat & Features",
      categoryIcon: HelpCircle,
      categoryColor: "from-green-400 to-emerald-500",
      content: `
        <h2>Budlee AI Community Guidelines</h2>
        <p>Our community is built on respect, collaboration, and a shared passion for learning. These guidelines help maintain a positive environment for everyone.</p>

        <h3>Core Principles</h3>
        <ul>
          <li><strong>Respect:</strong> Treat all community members with kindness and consideration</li>
          <li><strong>Inclusivity:</strong> Welcome learners from all backgrounds and skill levels</li>
          <li><strong>Helpfulness:</strong> Share knowledge and support others in their learning journey</li>
          <li><strong>Integrity:</strong> Be honest and authentic in your interactions</li>
        </ul>

        <h3>Community Standards</h3>

        <h4>Acceptable Behavior</h4>
        <ul>
          <li>Sharing learning resources and study tips</li>
          <li>Asking questions and seeking help</li>
          <li>Providing constructive feedback</li>
          <li>Celebrating others' achievements</li>
          <li>Collaborating on projects and challenges</li>
        </ul>

        <h4>Unacceptable Behavior</h4>
        <ul>
          <li>Harassment or bullying</li>
          <li>Sharing inappropriate content</li>
          <li>Spamming or excessive self-promotion</li>
          <li>Cheating or academic dishonesty</li>
          <li>Discrimination or hate speech</li>
        </ul>

        <h3>Discussion Guidelines</h3>
        <ul>
          <li>Stay on topic in subject-specific forums</li>
          <li>Use clear, descriptive titles for posts</li>
          <li>Provide context when asking questions</li>
          <li>Be patient when waiting for responses</li>
          <li>Give credit when sharing others' work</li>
        </ul>

        <h3>Privacy and Safety</h3>
        <ul>
          <li>Never share personal information</li>
          <li>Report suspicious behavior</li>
          <li>Use appropriate privacy settings</li>
          <li>Respect others' privacy preferences</li>
        </ul>

        <h3>Moderation</h3>
        <p>Our moderation team works to maintain a positive community. Violations may result in:</p>
        <ul>
          <li>Warnings for minor infractions</li>
          <li>Temporary suspension for repeated issues</li>
          <li>Permanent bans for serious violations</li>
        </ul>

        <h3>Getting Help</h3>
        <p>If you experience issues or witness violations:</p>
        <ul>
          <li>Use the "Report" button on problematic content</li>
          <li>Contact moderators through the help system</li>
          <li>Reach out to help@budlee.ai for assistance</li>
        </ul>
      `
    },
    "completing-quests": {
      title: "Completing quests",
      category: "AI Chat & Features",
      categoryIcon: HelpCircle,
      categoryColor: "from-green-400 to-emerald-500",
      content: `
        <h2>Mastering Budlee AI Quests</h2>
        <p>Quests are interactive learning challenges designed to make education engaging and effective. Here's how to complete them successfully.</p>

        <h3>What are Quests?</h3>
        <p>Quests are gamified learning experiences that combine education with adventure. Each quest focuses on specific learning objectives while providing an engaging narrative.</p>

        <h3>Finding Quests</h3>
        <ul>
          <li><strong>Recommended:</strong> Personalized suggestions on your dashboard</li>
          <li><strong>Browse:</strong> Explore by subject, difficulty, or popularity</li>
          <li><strong>Search:</strong> Find quests related to specific topics</li>
          <li><strong>Daily Challenges:</strong> Complete daily quests for streak bonuses</li>
        </ul>

        <h3>Quest Types</h3>
        <ul>
          <li><strong>Knowledge Quests:</strong> Test understanding of concepts</li>
          <li><strong>Skill-Building Quests:</strong> Practice and develop abilities</li>
          <li><strong>Exploration Quests:</strong> Discover new topics and ideas</li>
          <li><strong>Collaboration Quests:</strong> Work with other learners</li>
        </ul>

        <h3>Completing Quests Effectively</h3>

        <h4>Preparation</h4>
        <ul>
          <li>Read the quest description carefully</li>
          <li>Check prerequisites and recommended knowledge</li>
          <li>Gather necessary materials or resources</li>
          <li>Set aside adequate time for completion</li>
        </ul>

        <h4>During the Quest</h4>
        <ul>
          <li>Follow instructions step by step</li>
          <li>Use hints when stuck (they don't reduce points)</li>
          <li>Take notes on important concepts</li>
          <li>Collaborate with peers when allowed</li>
        </ul>

        <h4>Maximizing Rewards</h4>
        <ul>
          <li>Complete bonus objectives for extra points</li>
          <li>Achieve high accuracy for better scores</li>
          <li>Finish within time limits for speed bonuses</li>
          <li>Share your solutions in community discussions</li>
        </ul>

        <h3>Earning Rewards</h3>
        <ul>
          <li><strong>Experience Points:</strong> Level up and unlock new features</li>
          <li><strong>Badges:</strong> Showcase achievements on your profile</li>
          <li><strong>Certificates:</strong> Earn credentials for completed topics</li>
          <li><strong>Unlockables:</strong> Access premium content and features</li>
        </ul>

        <h3>Troubleshooting</h3>
        <ul>
          <li><strong>Stuck on a quest?</strong> Use hints or ask in community forums</li>
          <li><strong>Technical issues?</strong> Refresh the page or contact support</li>
          <li><strong>Time expired?</strong> Most quests can be resumed where you left off</li>
        </ul>
      `
    },
    "exploring-curiosity-centre": {
      title: "Exploring Curiosity Centre",
      category: "AI Chat & Features",
      categoryIcon: HelpCircle,
      categoryColor: "from-green-400 to-emerald-500",
      content: `
        <h2>Discovering the Curiosity Centre</h2>
        <p>The Curiosity Centre is your gateway to exploration and discovery. Dive deep into topics that fascinate you and expand your knowledge horizons.</p>

        <h3>What is the Curiosity Centre?</h3>
        <p>A dynamic learning space where you can explore topics beyond your regular curriculum, follow your interests, and discover new areas of knowledge.</p>

        <h3>Key Features</h3>

        <h4>Topic Exploration</h4>
        <ul>
          <li>Browse by category: Science, History, Arts, Technology, etc.</li>
          <li>Follow trending topics and popular discussions</li>
          <li>Discover related topics through intelligent recommendations</li>
        </ul>

        <h4>Interactive Content</h4>
        <ul>
          <li>Articles and in-depth explanations</li>
          <li>Interactive simulations and visualizations</li>
          <li>Video content and multimedia presentations</li>
          <li>Discussion forums for each topic</li>
        </ul>

        <h4>Personalized Discovery</h4>
        <ul>
          <li>AI-powered recommendations based on your interests</li>
          <li>Track your exploration history</li>
          <li>Create personal collections of favorite topics</li>
          <li>Set learning goals for new discoveries</li>
        </ul>

        <h3>Getting Started</h3>
        <ol>
          <li>Navigate to the Curiosity Centre from the main menu</li>
          <li>Browse featured topics or search for specific interests</li>
          <li>Click on any topic card to start exploring</li>
          <li>Use the sidebar to navigate between sections</li>
        </ol>

        <h3>Learning Paths</h3>
        <p>Structured learning journeys that guide you through related topics:</p>
        <ul>
          <li><strong>Beginner Paths:</strong> Introduction to new subjects</li>
          <li><strong>Deep Dive Paths:</strong> Advanced exploration of complex topics</li>
          <li><strong>Interdisciplinary Paths:</strong> Connect different fields of knowledge</li>
        </ul>

        <h3>Community Features</h3>
        <ul>
          <li>Join discussions on interesting topics</li>
          <li>Share your discoveries with other learners</li>
          <li>Follow experts and thought leaders</li>
          <li>Contribute to community-curated content</li>
        </ul>

        <h3>Progress Tracking</h3>
        <ul>
          <li>Earn curiosity points for exploration</li>
          <li>Track topics you've discovered</li>
          <li>Build your knowledge map</li>
          <li>Unlock achievements for consistent exploration</li>
        </ul>

        <h3>Tips for Effective Exploration</h3>
        <ul>
          <li>Start with topics that genuinely interest you</li>
          <li>Take notes on concepts you want to remember</li>
          <li>Connect new information to what you already know</li>
          <li>Discuss discoveries with peers for deeper understanding</li>
          <li>Return to topics periodically to reinforce learning</li>
        </ul>
      `
    },
    "managing-subscriptions": {
      title: "Managing subscriptions",
      category: "Account & Billing",
      categoryIcon: FileText,
      categoryColor: "from-purple-400 to-violet-500",
      content: `
        <h2>Managing Your Budlee AI Subscription</h2>
        <p>Learn how to view, modify, and manage your subscription plan to get the most out of Budlee AI.</p>

        <h3>Accessing Subscription Settings</h3>
        <ol>
          <li>Log in to your account</li>
          <li>Click on your profile picture</li>
          <li>Select "Settings" from the dropdown</li>
          <li>Navigate to the "Subscription" tab</li>
        </ol>

        <h3>Viewing Your Current Plan</h3>
        <p>Your subscription page shows:</p>
        <ul>
          <li>Current plan details and pricing</li>
          <li>Billing cycle and next payment date</li>
          <li>Usage statistics and limits</li>
          <li>Payment method on file</li>
        </ul>

        <h3>Upgrading Your Plan</h3>
        <ol>
          <li>Go to Settings > Subscription</li>
          <li>Click "View Plans" or "Upgrade"</li>
          <li>Select your desired plan</li>
          <li>Review changes and confirm</li>
          <li>Complete payment if required</li>
        </ol>

        <h3>Downgrading Your Plan</h3>
        <p>When downgrading:</p>
        <ul>
          <li>Changes take effect at the next billing cycle</li>
          <li>You retain access until the current period ends</li>
          <li>Some features may become unavailable immediately</li>
        </ul>

        <h3>Canceling Your Subscription</h3>
        <ol>
          <li>Go to Settings > Subscription</li>
          <li>Click "Cancel Subscription"</li>
          <li>Select a reason for canceling (optional)</li>
          <li>Confirm cancellation</li>
        </ol>

        <h4>What Happens When You Cancel?</h4>
        <ul>
          <li>You keep access until the current billing period ends</li>
          <li>No refunds for partial months</li>
          <li>You can reactivate anytime before the period ends</li>
          <li>Your data is preserved for future reactivation</li>
        </ul>

        <h3>Payment Methods</h3>
        <ul>
          <li><strong>Credit/Debit Cards:</strong> Visa, MasterCard, American Express</li>
          <li><strong>Digital Wallets:</strong> PayPal, Apple Pay, Google Pay</li>
          <li><strong>Bank Transfer:</strong> For annual plans</li>
          <li><strong>UPI:</strong> Available in India</li>
        </ul>

        <h3>Billing History</h3>
        <p>Access your billing history to:</p>
        <ul>
          <li>View past invoices</li>
          <li>Download receipts</li>
          <li>Track payment status</li>
          <li>Monitor subscription changes</li>
        </ul>
      `
    },
    "payment-methods": {
      title: "Payment methods",
      category: "Account & Billing",
      categoryIcon: FileText,
      categoryColor: "from-purple-400 to-violet-500",
      content: `
        <h2>Payment Methods for Budlee AI</h2>
        <p>We offer multiple secure payment options to make subscribing to Budlee AI convenient and hassle-free.</p>

        <h3>Available Payment Methods</h3>

        <h4>Credit and Debit Cards</h4>
        <ul>
          <li>Visa</li>
          <li>MasterCard</li>
          <li>American Express</li>
          <li>Discover</li>
        </ul>
        <p>All major credit and debit cards are accepted worldwide.</p>

        <h4>Digital Wallets</h4>
        <ul>
          <li>PayPal</li>
          <li>Apple Pay</li>
          <li>Google Pay</li>
          <li>Samsung Pay</li>
        </ul>

        <h4>Bank Transfer</h4>
        <p>Available for annual subscriptions and enterprise plans.</p>

        <h4>UPI (India)</h4>
        <ul>
          <li>Google Pay UPI</li>
          <li>PhonePe</li>
          <li>Paytm</li>
          <li>BHIM UPI</li>
          <li>Other UPI apps</li>
        </ul>

        <h3>Adding a Payment Method</h3>
        <ol>
          <li>Go to Settings > Subscription</li>
          <li>Click "Add Payment Method"</li>
          <li>Select your preferred payment type</li>
          <li>Enter your payment details</li>
          <li>Save for future payments</li>
        </ol>

        <h3>Security and Privacy</h3>
        <ul>
          <li>All payments are processed through secure, encrypted connections</li>
          <li>We use industry-standard PCI DSS compliance</li>
          <li>Payment information is never stored on our servers</li>
          <li>Regular security audits and monitoring</li>
        </ul>

        <h3>Billing Currency</h3>
        <ul>
          <li><strong>USD:</strong> For users in the Americas and global customers</li>
          <li><strong>INR:</strong> For users in India</li>
          <li><strong>EUR:</strong> For European users</li>
        </ul>

        <h3>Payment Processing</h3>
        <ul>
          <li><strong>Stripe:</strong> Primary payment processor for global transactions</li>
          <li><strong>Razorpay:</strong> For Indian customers</li>
          <li><strong>PayPal:</strong> For PayPal-specific transactions</li>
        </ul>

        <h3>Failed Payments</h3>
        <p>If a payment fails:</p>
        <ul>
          <li>You'll receive an email notification</li>
          <li>Access may be temporarily limited</li>
          <li>You can update payment information and retry</li>
          <li>Contact support if issues persist</li>
        </ul>

        <h3>Refunds and Chargebacks</h3>
        <ul>
          <li>Refunds processed within 5-7 business days</li>
          <li>Chargeback requests handled through payment processor</li>
          <li>Clear refund policy communicated during cancellation</li>
        </ul>
      `
    },
    "account-settings": {
      title: "Account settings",
      category: "Account & Billing",
      categoryIcon: FileText,
      categoryColor: "from-purple-400 to-violet-500",
      content: `
        <h2>Managing Your Account Settings</h2>
        <p>Customize your Budlee AI experience by adjusting your account preferences and settings.</p>

        <h3>Accessing Account Settings</h3>
        <ol>
          <li>Click your profile picture in the top-right corner</li>
          <li>Select "Settings" from the dropdown menu</li>
          <li>Navigate through different setting categories</li>
        </ol>

        <h3>Profile Settings</h3>
        <ul>
          <li><strong>Personal Information:</strong> Name, email, profile picture</li>
          <li><strong>Educational Details:</strong> Grade level, school, subjects of interest</li>
          <li><strong>Display Preferences:</strong> Theme, language, timezone</li>
        </ul>

        <h3>Privacy Settings</h3>
        <ul>
          <li><strong>Profile Visibility:</strong> Public, friends only, or private</li>
          <li><strong>Activity Sharing:</strong> Control what others see about your learning</li>
          <li><strong>Data Collection:</strong> Manage analytics and personalization preferences</li>
        </ul>

        <h3>Notification Settings</h3>
        <ul>
          <li><strong>Email Notifications:</strong> Updates, reminders, newsletters</li>
          <li><strong>In-App Notifications:</strong> Achievements, messages, recommendations</li>
          <li><strong>Push Notifications:</strong> Mobile app alerts</li>
        </ul>

        <h3>Learning Preferences</h3>
        <ul>
          <li><strong>Difficulty Level:</strong> Adjust challenge levels</li>
          <li><strong>Study Goals:</strong> Set daily/weekly learning objectives</li>
          <li><strong>Subject Priorities:</strong> Focus on specific areas</li>
        </ul>

        <h3>Security Settings</h3>
        <ul>
          <li><strong>Password:</strong> Change or reset password</li>
          <li><strong>Two-Factor Authentication:</strong> Add extra security</li>
          <li><strong>Login History:</strong> Monitor account access</li>
          <li><strong>Connected Devices:</strong> Manage logged-in devices</li>
        </ul>

        <h3>Data Management</h3>
        <ul>
          <li><strong>Export Data:</strong> Download your learning history</li>
          <li><strong>Delete Account:</strong> Permanently remove your account</li>
          <li><strong>Data Retention:</strong> Control how long we keep your data</li>
        </ul>

        <h3>Subscription Settings</h3>
        <ul>
          <li><strong>Plan Details:</strong> View current subscription</li>
          <li><strong>Payment Methods:</strong> Manage billing information</li>
          <li><strong>Billing History:</strong> Access past invoices</li>
        </ul>

        <h3>Accessibility Settings</h3>
        <ul>
          <li><strong>Font Size:</strong> Adjust text size for readability</li>
          <li><strong>Color Contrast:</strong> High contrast mode</li>
          <li><strong>Screen Reader:</strong> Accessibility support</li>
        </ul>
      `
    },
    "privacy-controls": {
      title: "Privacy controls",
      category: "Account & Billing",
      categoryIcon: FileText,
      categoryColor: "from-purple-400 to-violet-500",
      content: `
        <h2>Privacy Controls in Budlee AI</h2>
        <p>Your privacy is important to us. Learn how to control your data and privacy settings on our platform.</p>

        <h3>Privacy Dashboard</h3>
        <p>Access comprehensive privacy controls in Settings > Privacy.</p>

        <h3>Data Collection and Usage</h3>
        <ul>
          <li><strong>Learning Analytics:</strong> Track your progress and performance</li>
          <li><strong>Personalization:</strong> Customize content recommendations</li>
          <li><strong>Communication:</strong> Send relevant updates and notifications</li>
          <li><strong>Platform Improvement:</strong> Enhance features and user experience</li>
        </ul>

        <h3>Privacy Settings</h3>

        <h4>Profile Privacy</h4>
        <ul>
          <li><strong>Public:</strong> Profile visible to all users</li>
          <li><strong>Friends Only:</strong> Visible to connections only</li>
          <li><strong>Private:</strong> Profile hidden from other users</li>
        </ul>

        <h4>Activity Sharing</h4>
        <ul>
          <li>Share achievements and badges</li>
          <li>Display learning streaks</li>
          <li>Show completed quests</li>
          <li>Share study statistics</li>
        </ul>

        <h4>Data Sharing Preferences</h4>
        <ul>
          <li>Analytics and usage data</li>
          <li>Personalized recommendations</li>
          <li>Marketing communications</li>
          <li>Third-party integrations</li>
        </ul>

        <h3>Data Rights</h3>
        <ul>
          <li><strong>Access:</strong> View all data we have about you</li>
          <li><strong>Portability:</strong> Export your data in standard formats</li>
          <li><strong>Correction:</strong> Update inaccurate information</li>
          <li><strong>Deletion:</strong> Request removal of your data</li>
        </ul>

        <h3>Cookies and Tracking</h3>
        <ul>
          <li>Essential cookies for platform functionality</li>
          <li>Analytics cookies for usage insights</li>
          <li>Marketing cookies for relevant advertisements</li>
          <li>Third-party cookies from integrated services</li>
        </ul>

        <h3>Children's Privacy</h3>
        <p>For users under 13 (or applicable age in your jurisdiction):</p>
        <ul>
          <li>Parental consent required</li>
          <li>Limited data collection</li>
          <li>No behavioral advertising</li>
          <li>Enhanced privacy protections</li>
        </ul>

        <h3>Data Security</h3>
        <ul>
          <li>End-to-end encryption for data transmission</li>
          <li>Secure data storage with regular backups</li>
          <li>Regular security audits and updates</li>
          <li>Employee access controls and training</li>
        </ul>

        <h3>Contact for Privacy Concerns</h3>
        <p>For privacy-related questions or requests:</p>
        <ul>
          <li>Email: privacy@budlee.ai</li>
          <li>Data Protection Officer: dpo@budlee.ai</li>
          <li>Response time: Within 30 days</li>
        </ul>
      `
    },
    "app-not-loading": {
      title: "App not loading",
      category: "Troubleshooting",
      categoryIcon: Phone,
      categoryColor: "from-orange-400 to-red-500",
      content: `
        <h2>Troubleshooting: App Not Loading</h2>
        <p>If Budlee AI isn't loading properly, try these troubleshooting steps to get back to learning.</p>

        <h3>Basic Troubleshooting</h3>

        <h4>Check Your Internet Connection</h4>
        <ul>
          <li>Ensure you have a stable internet connection</li>
          <li>Try switching between Wi-Fi and mobile data</li>
          <li>Check if other websites load normally</li>
        </ul>

        <h4>Refresh the Page</h4>
        <ul>
          <li>Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac) for a hard refresh</li>
          <li>Clear your browser cache and cookies</li>
          <li>Try opening in an incognito/private window</li>
        </ul>

        <h4>Browser Compatibility</h4>
        <ul>
          <li>Use a modern browser (Chrome, Firefox, Safari, Edge)</li>
          <li>Update your browser to the latest version</li>
          <li>Disable browser extensions temporarily</li>
        </ul>

        <h3>Device-Specific Issues</h3>

        <h4>Mobile Devices</h4>
        <ul>
          <li>Close and reopen the app</li>
          <li>Check available storage space</li>
          <li>Update the app to the latest version</li>
          <li>Restart your device</li>
        </ul>

        <h4>Desktop Computers</h4>
        <ul>
          <li>Try a different browser</li>
          <li>Disable antivirus software temporarily</li>
          <li>Check firewall settings</li>
          <li>Update your operating system</li>
        </ul>

        <h3>Advanced Solutions</h3>

        <h4>Clear Browser Data</h4>
        <ol>
          <li>Open browser settings</li>
          <li>Navigate to Privacy/Clear browsing data</li>
          <li>Select cookies, cache, and browsing history</li>
          <li>Clear data and restart browser</li>
        </ol>

        <h4>Network Issues</h4>
        <ul>
          <li>Try using a VPN if available</li>
          <li>Contact your network administrator</li>
          <li>Check for network restrictions or firewalls</li>
        </ul>

        <h3>When to Contact Support</h3>
        <p>If the above steps don't resolve the issue:</p>
        <ul>
          <li>Include your device type and browser</li>
          <li>Describe the exact error message or behavior</li>
          <li>Mention when the problem started</li>
          <li>Attach screenshots if possible</li>
        </ul>

        <h3>Prevention Tips</h3>
        <ul>
          <li>Keep your browser and apps updated</li>
          <li>Use a reliable internet connection</li>
          <li>Regularly clear browser cache</li>
          <li>Close unused tabs and applications</li>
        </ul>
      `
    },
    "login-problems": {
      title: "Login problems",
      category: "Troubleshooting",
      categoryIcon: Phone,
      categoryColor: "from-orange-400 to-red-500",
      content: `
        <h2>Troubleshooting Login Issues</h2>
        <p>Having trouble logging into Budlee AI? Follow these steps to resolve common login problems.</p>

        <h3>Before You Begin</h3>
        <ul>
          <li>Check if the website is down (visit status.budlee.ai)</li>
          <li>Ensure you're using the correct URL: budlee.ai</li>
          <li>Try logging in from a different device or browser</li>
        </ul>

        <h3>Forgot Password</h3>
        <ol>
          <li>Click "Forgot Password" on the login page</li>
          <li>Enter your email address</li>
          <li>Check your email for reset instructions</li>
          <li>Follow the link to create a new password</li>
          <li>Use a strong, unique password</li>
        </ol>

        <h3>Account Not Found</h3>
        <p>If you see "Account not found":</p>
        <ul>
          <li>Double-check your email address spelling</li>
          <li>Try using any alternative email addresses</li>
          <li>Contact support if you believe you have an account</li>
        </ul>

        <h3>Incorrect Password</h3>
        <ul>
          <li>Check Caps Lock is off</li>
          <li>Try resetting your password</li>
          <li>Clear browser cache and cookies</li>
          <li>Use incognito/private browsing mode</li>
        </ul>

        <h3>Two-Factor Authentication Issues</h3>
        <ul>
          <li>Check your authenticator app</li>
          <li>Ensure your device time is correct</li>
          <li>Use backup codes if available</li>
          <li>Contact support for 2FA reset</li>
        </ul>

        <h3>Browser-Related Issues</h3>
        <ul>
          <li>Clear browser cache and cookies</li>
          <li>Disable browser extensions</li>
          <li>Try a different browser</li>
          <li>Update your browser</li>
        </ul>

        <h3>Network and Security Issues</h3>
        <ul>
          <li>Check your internet connection</li>
          <li>Disable VPN temporarily</li>
          <li>Check firewall/antivirus settings</li>
          <li>Try from a different network</li>
        </ul>

        <h3>Account Security</h3>
        <ul>
          <li>Never share your login credentials</li>
          <li>Use unique passwords for different accounts</li>
          <li>Enable two-factor authentication</li>
          <li>Monitor your account activity</li>
        </ul>

        <h3>Still Having Issues?</h3>
        <p>If you continue to experience login problems:</p>
        <ul>
          <li>Collect error messages and screenshots</li>
          <li>Note when the problem occurs</li>
          <li>Include your device and browser information</li>
          <li>Contact help@budlee.ai with details</li>
        </ul>
      `
    },
    "payment-errors": {
      title: "Payment errors",
      category: "Troubleshooting",
      categoryIcon: Phone,
      categoryColor: "from-orange-400 to-red-500",
      content: `
        <h2>Resolving Payment Errors</h2>
        <p>Encountering payment issues? Here's how to troubleshoot and resolve common payment problems.</p>

        <h3>Common Payment Errors</h3>

        <h4>Card Declined</h4>
        <ul>
          <li>Check card expiration date</li>
          <li>Verify available balance or credit limit</li>
          <li>Confirm billing address matches card</li>
          <li>Contact your bank for authorization</li>
        </ul>

        <h4>Invalid Card Details</h4>
        <ul>
          <li>Double-check card number</li>
          <li>Verify CVV/security code</li>
          <li>Ensure correct billing address</li>
          <li>Try entering details manually</li>
        </ul>

        <h4>Payment Processing Error</h4>
        <ul>
          <li>Check internet connection</li>
          <li>Disable VPN if using one</li>
          <li>Try a different browser</li>
          <li>Clear browser cache</li>
        </ul>

        <h3>Payment Method Issues</h3>

        <h4>Credit/Debit Cards</h4>
        <ul>
          <li>Ensure card is not blocked or frozen</li>
          <li>Check for international transaction fees</li>
          <li>Verify card supports online transactions</li>
        </ul>

        <h4>Digital Wallets</h4>
        <ul>
          <li>Confirm wallet balance</li>
          <li>Check wallet app is updated</li>
          <li>Verify linked payment methods</li>
        </ul>

        <h4>UPI Payments</h4>
        <ul>
          <li>Ensure UPI app is installed and updated</li>
          <li>Check UPI PIN is correct</li>
          <li>Verify bank balance</li>
        </ul>

        <h3>Troubleshooting Steps</h3>
        <ol>
          <li>Try a different payment method</li>
          <li>Use a different browser or device</li>
          <li>Clear browser cache and cookies</li>
          <li>Disable browser extensions</li>
          <li>Check for VPN or proxy interference</li>
        </ol>

        <h3>Currency and Region Issues</h3>
        <ul>
          <li>Ensure correct currency selection</li>
          <li>Check regional payment restrictions</li>
          <li>Verify tax calculations</li>
        </ul>

        <h3>Subscription Payment Failures</h3>
        <ul>
          <li>Update payment method before renewal</li>
          <li>Check for expired cards</li>
          <li>Ensure sufficient funds</li>
          <li>Review billing cycle timing</li>
        </ul>

        <h3>Contacting Support</h3>
        <p>For unresolved payment issues:</p>
        <ul>
          <li>Include error message details</li>
          <li>Provide payment method used</li>
          <li>Mention transaction ID if available</li>
          <li>Contact billing@budlee.ai</li>
        </ul>

        <h3>Refund Requests</h3>
        <ul>
          <li>Review refund policy</li>
          <li>Provide transaction details</li>
          <li>Explain reason for refund</li>
          <li>Allow 5-7 business days for processing</li>
        </ul>
      `
    },
    "performance-issues": {
      title: "Performance issues",
      category: "Troubleshooting",
      categoryIcon: Phone,
      categoryColor: "from-orange-400 to-red-500",
      content: `
        <h2>Resolving Performance Issues</h2>
        <p>Experiencing slow loading or performance problems? Follow these steps to optimize your Budlee AI experience.</p>

        <h3>Browser Optimization</h3>

        <h4>Clear Cache and Cookies</h4>
        <ol>
          <li>Open browser settings</li>
          <li>Navigate to Privacy/Security</li>
          <li>Select "Clear browsing data"</li>
          <li>Choose cache, cookies, and browsing history</li>
          <li>Clear data and restart browser</li>
        </ol>

        <h4>Update Browser</h4>
        <ul>
          <li>Ensure you're using the latest browser version</li>
          <li>Enable automatic updates</li>
          <li>Consider switching to Chrome, Firefox, or Edge</li>
        </ul>

        <h4>Disable Extensions</h4>
        <ul>
          <li>Temporarily disable browser extensions</li>
          <li>Re-enable one by one to identify conflicts</li>
          <li>Remove unnecessary extensions</li>
        </ul>

        <h3>Device and System Optimization</h3>

        <h4>Close Unnecessary Programs</h4>
        <ul>
          <li>Close unused applications</li>
          <li>Check Task Manager/Activity Monitor for resource usage</li>
          <li>Restart your device</li>
        </ul>

        <h4>Free Up Storage</h4>
        <ul>
          <li>Delete unnecessary files</li>
          <li>Clear download folders</li>
          <li>Empty recycle bin/trash</li>
        </ul>

        <h4>Update System</h4>
        <ul>
          <li>Install pending operating system updates</li>
          <li>Update device drivers</li>
          <li>Ensure antivirus software is up to date</li>
        </ul>

        <h3>Network Optimization</h3>

        <h4>Check Internet Speed</h4>
        <ul>
          <li>Test connection speed (speedtest.net)</li>
          <li>Minimum recommended: 10 Mbps download</li>
          <li>Contact ISP if speeds are consistently low</li>
        </ul>

        <h4>Network Troubleshooting</h4>
        <ul>
          <li>Try different Wi-Fi networks</li>
          <li>Use Ethernet connection if available</li>
          <li>Restart router/modem</li>
          <li>Check for network congestion</li>
        </ul>

        <h3>Budlee AI Specific Issues</h3>

        <h4>App Performance</h4>
        <ul>
          <li>Log out and log back in</li>
          <li>Clear app cache (mobile)</li>
          <li>Update to latest app version</li>
          <li>Reinstall app if problems persist</li>
        </ul>

        <h4>Content Loading</h4>
        <ul>
          <li>Disable ad blockers temporarily</li>
          <li>Allow cookies for budlee.ai</li>
          <li>Check content filters</li>
        </ul>

        <h3>Mobile Device Optimization</h3>

        <h4>iOS Devices</h4>
        <ul>
          <li>Close background apps</li>
          <li>Clear Safari cache</li>
          <li>Update iOS version</li>
          <li>Check available storage</li>
        </ul>

        <h4>Android Devices</h4>
        <ul>
          <li>Clear app cache and data</li>
          <li>Update Android version</li>
          <li>Check for app updates</li>
          <li>Free up storage space</li>
        </ul>

        <h3>Advanced Troubleshooting</h3>

        <h4>Hardware Acceleration</h4>
        <ul>
          <li>Enable/disable hardware acceleration in browser settings</li>
          <li>Update graphics drivers</li>
        </ul>

        <h4>DNS Issues</h4>
        <ul>
          <li>Try Google DNS (8.8.8.8)</li>
          <li>Flush DNS cache</li>
        </ul>

        <h3>When to Contact Support</h3>
        <p>If performance issues persist:</p>
        <ul>
          <li>Include device and browser specifications</li>
          <li>Describe exact performance problems</li>
          <li>Mention internet speed test results</li>
          <li>Provide screenshots of error messages</li>
        </ul>
      `
    },
    "how-to-reset-your-password": {
      title: "How to reset your password",
      category: "General",
      categoryIcon: Lightbulb,
      categoryColor: "from-gray-400 to-gray-500",
      content: `
        <h2>Resetting Your Password</h2>
        <p>Forgot your password? Don't worry—resetting it is quick and secure.</p>

        <h3>Step-by-Step Guide</h3>
        <ol>
          <li>Go to the login page at budlee.ai/login</li>
          <li>Click "Forgot Password" below the login form</li>
          <li>Enter your email address associated with your account</li>
          <li>Click "Send Reset Link"</li>
          <li>Check your email for the password reset message</li>
          <li>Click the reset link in the email</li>
          <li>Create a new, strong password</li>
          <li>Confirm the new password</li>
          <li>Log in with your new password</li>
        </ol>

        <h3>Password Requirements</h3>
        <ul>
          <li>At least 8 characters long</li>
          <li>Include uppercase and lowercase letters</li>
          <li>Contain at least one number</li>
          <li>Include special characters (!@#$%^&*)</li>
        </ul>

        <h3>Troubleshooting</h3>
        <ul>
          <li>Check your spam/junk folder</li>
          <li>Ensure the email address is correct</li>
          <li>Try using a different browser</li>
          <li>Contact support if you don't receive the email</li>
        </ul>

        <h3>Security Tips</h3>
        <ul>
          <li>Use unique passwords for different accounts</li>
          <li>Enable two-factor authentication</li>
          <li>Never share your password</li>
          <li>Change passwords regularly</li>
        </ul>
      `
    },
    "understanding-subscription-plans": {
      title: "Understanding subscription plans",
      category: "General",
      categoryIcon: Lightbulb,
      categoryColor: "from-gray-400 to-gray-500",
      content: `
        <h2>Budlee AI Subscription Plans</h2>
        <p>Choose the plan that best fits your learning needs and budget.</p>

        <h3>Free Plan</h3>
        <ul>
          <li>Limited daily usage</li>
          <li>Basic AI chat features</li>
          <li>Access to community forums</li>
          <li>Perfect for trying out the platform</li>
        </ul>

        <h3>Monthly Plan ($20/₹1,990)</h3>
        <ul>
          <li>Unlimited usage for one month</li>
          <li>Priority customer support</li>
          <li>Advanced AI responses</li>
          <li>All platform features</li>
        </ul>

        <h3>Yearly Plan ($200/₹19,990)</h3>
        <ul>
          <li>Unlimited usage for one year</li>
          <li>All monthly benefits</li>
          <li>Exclusive content access</li>
          <li>Best value for long-term learners</li>
        </ul>

        <h3>Plan Comparison</h3>
        <table>
          <tr><th>Feature</th><th>Free</th><th>Monthly</th><th>Yearly</th></tr>
          <tr><td>AI Chat</td><td>Limited</td><td>Unlimited</td><td>Unlimited</td></tr>
          <tr><td>Quests</td><td>Limited</td><td>Unlimited</td><td>Unlimited</td></tr>
          <tr><td>Support</td><td>Basic</td><td>Priority</td><td>Priority</td></tr>
          <tr><td>Content</td><td>Basic</td><td>Full</td><td>Full + Exclusive</td></tr>
        </table>

        <h3>How to Subscribe</h3>
        <ol>
          <li>Log in to your account</li>
          <li>Go to Settings > Subscription</li>
          <li>Select your preferred plan</li>
          <li>Complete payment</li>
          <li>Enjoy unlimited access</li>
        </ol>
      `
    },
    "using-ai-chat-for-homework-help": {
      title: "Using AI Chat for homework help",
      category: "General",
      categoryIcon: Lightbulb,
      categoryColor: "from-gray-400 to-gray-500",
      content: `
        <h2>Getting Homework Help with AI Chat</h2>
        <p>Our AI chat is designed to assist with homework while promoting understanding and learning.</p>

        <h3>Effective Question Types</h3>
        <ul>
          <li>"Explain photosynthesis step by step"</li>
          <li>"Help me understand quadratic equations"</li>
          <li>"What are the main causes of World War II?"</li>
          <li>"How do I solve this math problem?"</li>
        </ul>

        <h3>Best Practices</h3>
        <ul>
          <li>Be specific about what you need help with</li>
          <li>Ask follow-up questions to deepen understanding</li>
          <li>Use the chat to check your work</li>
          <li>Request examples and practice problems</li>
        </ul>

        <h3>What AI Chat Can Help With</h3>
        <ul>
          <li>Math problems and explanations</li>
          <li>Science concepts</li>
          <li>History and social studies</li>
          <li>Language learning</li>
          <li>Writing assistance</li>
          <li>Study strategies</li>
        </ul>

        <h3>Learning Tips</h3>
        <ul>
          <li>Don't just copy answers—understand the concepts</li>
          <li>Use AI explanations to supplement your learning</li>
          <li>Practice similar problems independently</li>
          <li>Ask for hints rather than complete solutions</li>
        </ul>
      `
    },
    "managing-your-privacy-settings": {
      title: "Managing your privacy settings",
      category: "General",
      categoryIcon: Lightbulb,
      categoryColor: "from-gray-400 to-gray-500",
      content: `
        <h2>Controlling Your Privacy on Budlee AI</h2>
        <p>Your privacy matters. Learn how to manage your privacy settings effectively.</p>

        <h3>Accessing Privacy Settings</h3>
        <ol>
          <li>Click your profile picture</li>
          <li>Select "Settings"</li>
          <li>Navigate to "Privacy"</li>
        </ol>

        <h3>Profile Privacy</h3>
        <ul>
          <li><strong>Public:</strong> Anyone can see your profile</li>
          <li><strong>Friends Only:</strong> Only connections can view</li>
          <li><strong>Private:</strong> Profile is hidden</li>
        </ul>

        <h3>Activity Sharing</h3>
        <ul>
          <li>Control what achievements are visible</li>
          <li>Manage study streak visibility</li>
          <li>Choose whether to share progress</li>
        </ul>

        <h3>Data Collection</h3>
        <ul>
          <li>Opt out of analytics tracking</li>
          <li>Control personalized recommendations</li>
          <li>Manage cookie preferences</li>
        </ul>

        <h3>Communication Preferences</h3>
        <ul>
          <li>Email notification settings</li>
          <li>In-app message preferences</li>
          <li>Marketing communication options</li>
        </ul>
      `
    },
    "troubleshooting-login-issues": {
      title: "Troubleshooting login issues",
      category: "General",
      categoryIcon: Lightbulb,
      categoryColor: "from-gray-400 to-gray-500",
      content: `
        <h2>Fixing Login Problems</h2>
        <p>Having trouble logging in? Try these troubleshooting steps.</p>

        <h3>Common Solutions</h3>
        <ul>
          <li>Check your internet connection</li>
          <li>Clear browser cache and cookies</li>
          <li>Try a different browser</li>
          <li>Disable browser extensions</li>
          <li>Use incognito/private mode</li>
        </ul>

        <h3>Forgot Password</h3>
        <ol>
          <li>Click "Forgot Password"</li>
          <li>Enter your email</li>
          <li>Check your email for reset link</li>
          <li>Create new password</li>
        </ol>

        <h3>Account Issues</h3>
        <ul>
          <li>Verify email address is correct</li>
          <li>Check if account is active</li>
          <li>Contact support if locked out</li>
        </ul>

        <h3>Security Features</h3>
        <ul>
          <li>Two-factor authentication setup</li>
          <li>Backup codes for 2FA</li>
          <li>Password reset procedures</li>
        </ul>
      `
    },
    "completing-your-first-quest": {
      title: "Completing your first quest",
      category: "General",
      categoryIcon: Lightbulb,
      categoryColor: "from-gray-400 to-gray-500",
      content: `
        <h2>Your First Budlee AI Quest</h2>
        <p>Ready to start your learning adventure? Here's how to complete your first quest.</p>

        <h3>Finding Quests</h3>
        <ul>
          <li>Check your dashboard for recommendations</li>
          <li>Browse by subject or difficulty</li>
          <li>Start with beginner-friendly quests</li>
        </ul>

        <h3>Quest Structure</h3>
        <ul>
          <li><strong>Objective:</strong> What you need to accomplish</li>
          <li><strong>Instructions:</strong> Step-by-step guidance</li>
          <li><strong>Hints:</strong> Helpful tips (don't reduce points)</li>
          <li><strong>Time Limit:</strong> How long you have</li>
        </ul>

        <h3>Completing a Quest</h3>
        <ol>
          <li>Read the quest description carefully</li>
          <li>Gather any required materials</li>
          <li>Follow the instructions step by step</li>
          <li>Use hints if you get stuck</li>
          <li>Submit your answer</li>
          <li>Review feedback and explanations</li>
        </ol>

        <h3>Earning Rewards</h3>
        <ul>
          <li>Experience points for leveling up</li>
          <li>Badges for achievements</li>
          <li>Certificates for completion</li>
          <li>Unlock new quests and features</li>
        </ul>

        <h3>Tips for Success</h3>
        <ul>
          <li>Start with easier quests to build confidence</li>
          <li>Take your time to understand concepts</li>
          <li>Learn from mistakes and feedback</li>
          <li>Celebrate small victories</li>
        </ul>
      `
    }
  };

  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <HelpCircle className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Article Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">The help article you're looking for doesn't exist.</p>
            <Link to="/help" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium">
              ← Back to Help Center
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
            <Link to="/help" className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Help Center
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 bg-gradient-to-br ${article.categoryColor || 'from-gray-400 to-gray-500'} rounded-lg flex items-center justify-center`}>
                {article.categoryIcon ? <article.categoryIcon className="w-5 h-5 text-white" /> : <Lightbulb className="w-5 h-5 text-white" />}
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                {article.category || 'General'}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>
          </div>
        </section>

        {/* Article Content */}
        <section className="w-full pb-16 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Article Body */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-800 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-table:text-gray-700 dark:prose-table:text-gray-300 prose-th:bg-gray-50 dark:prose-th:bg-gray-800 prose-th:text-gray-800 dark:prose-th:text-white prose-td:border-gray-200 dark:prose-td:border-gray-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Was this article helpful?</span>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
                      <CheckCircle className="w-4 h-4" />
                      Yes
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                      No
                    </button>
                  </div>
                </div>
                <Link to="/help" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors">
                  ← Back to Help Center
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

export default HelpArticlePage;