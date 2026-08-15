export const navLinks = [
  { name: 'Home', path: '/index.html' },
  { name: 'About', path: '/about.html' },
  { name: 'Certifications', path: '/certifications.html' },
  { name: 'Portfolio', path: '/portfolio.html' },
  { name: 'Training', path: '/training.html' },
  { name: 'Blog', path: '/blog.html' },
  { name: 'Contact', path: '/contact.html' },
];

export const footerLinks = {
  navigation: [
    { name: 'Home', path: '/index.html' },
    { name: 'About', path: '/about.html' },
    { name: 'Portfolio', path: '/portfolio.html' },
    { name: 'Blog', path: '/blog.html' },
  ],
  resources: [
    { name: 'Certifications', path: '/certifications.html' },
    { name: 'Training', path: '/training.html' },
    { name: 'Contact', path: '/contact.html' },
    { name: 'Interview Prep', path: '/interview.html' },
  ],
  social: [
    { name: 'LinkedIn', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Salesforce', href: '#' },
  ],
};

export const socialLinks = [
  { name: 'LinkedIn', href: '#' },
  { name: 'GitHub', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Salesforce', href: '#' },
];

export const bio = {
  paragraphs: [
    "I'm Bhanu Prakash, a Salesforce Technical Architect with over 10 years of experience designing and implementing enterprise-grade CRM solutions.",
    "My expertise spans the full Salesforce ecosystem — from platform architecture and data modeling to complex integrations with AWS, Azure, and GCP. I've led transformation programs for Fortune 500 clients, delivering scalable solutions that drive business value.",
    "I'm passionate about clean architecture, performance optimization, and mentoring the next generation of Salesforce professionals.",
  ],
};

export const experience = [
  {
    year: '2023 - Present',
    role: 'Principal Salesforce Architect',
    company: 'TechCorp Global',
    desc: 'Leading enterprise architecture for a 50,000+ user Salesforce org.',
  },
  {
    year: '2020 - 2023',
    role: 'Senior Salesforce Architect',
    company: 'Enterprise Solutions Inc',
    desc: 'Architected multi-cloud integration platform serving 30+ business units.',
  },
  {
    year: '2017 - 2020',
    role: 'Salesforce Developer',
    company: 'Digital Dynamics',
    desc: 'Developed custom Apex, Lightning components, and managed complex data migrations.',
  },
  {
    year: '2014 - 2017',
    role: 'Junior Developer',
    company: 'StartupXYZ',
    desc: 'Full-stack development with focus on Salesforce platform and APIs.',
  },
];

export const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '15+', label: 'Certifications' },
  { value: '30+', label: 'Happy Clients' },
];

export const courses = [
  {
    id: 1,
    title: 'Salesforce Platform Developer I',
    provider: 'Salesforce',
    duration: '40 hours',
    progress: 100,
    level: 'Intermediate',
  },
  {
    id: 2,
    title: 'Einstein AI for Developers',
    provider: 'Trailhead',
    duration: '20 hours',
    progress: 75,
    level: 'Advanced',
  },
  {
    id: 3,
    title: 'AWS Solutions Architect',
    provider: 'AWS',
    duration: '60 hours',
    progress: 60,
    level: 'Advanced',
  },
  {
    id: 4,
    title: 'Data Integration Patterns',
    provider: 'MuleSoft',
    duration: '25 hours',
    progress: 40,
    level: 'Intermediate',
  },
  {
    id: 5,
    title: 'Agile Project Management',
    provider: 'Scrum.org',
    duration: '30 hours',
    progress: 90,
    level: 'Beginner',
  },
  {
    id: 6,
    title: 'Advanced Apex Programming',
    provider: 'Salesforce',
    duration: '35 hours',
    progress: 100,
    level: 'Advanced',
  },
];

export const interviewQuestions = [
  {
    id: 1,
    question: 'What is the difference between a Salesforce Consultant and a Technical Architect?',
    answer: 'A Consultant focuses on business requirements and process optimization, while a Technical Architect designs the technical solution — including data model, integration architecture, security model, and scalability strategy.',
    category: 'Architecture',
  },
  {
    id: 2,
    question: 'Explain the importance of the Salesforce Security Model.',
    answer: 'The security model protects data at multiple layers: org-wide defaults, role hierarchies, sharing rules, manual sharing, and territory management. A robust security model ensures the right people have the right access.',
    category: 'Security',
  },
  {
    id: 3,
    question: 'How do you handle large data volumes in Salesforce?',
    answer: 'Key strategies include using skinny tables, selective queries, archiving old data, using platform events for async processing, and leveraging Big Objects for massive datasets.',
    category: 'Performance',
  },
  {
    id: 4,
    question: 'What are the key considerations for multi-currency orgs?',
    answer: 'Consider corporate currency, active currency rates, dated exchange rates, conversion rounding, and how currency impacts reporting and forecasts across business units.',
    category: 'Data Model',
  },
  {
    id: 5,
    question: 'Describe a complex integration you have built.',
    answer: 'I built a real-time integration between Salesforce and an ERP system using Platform Events and Change Data Capture, handling 100K+ records daily with guaranteed delivery and error handling.',
    category: 'Integration',
  },
];

export const blogCategories = ['All', 'Architecture', 'Integration', 'AI', 'Performance'];

export const portfolioFilters = ['All', 'Salesforce', 'Integration', 'AI', 'B2B'];

export const contactInfo = {
  email: 'contact@bhanusfdc.com',
  location: 'Remote - Worldwide',
};

export const cookieConsent = {
  message: 'This website uses cookies to enhance your browsing experience. By continuing, you agree to our use of cookies.',
  buttonText: 'Accept',
};

export const chatConfig = {
  title: "Let's Connect",
  subtitle: 'Salesforce Web-to-Lead',
  fields: {
    name: { label: 'Name', placeholder: 'Your name' },
    email: { label: 'Email', placeholder: 'you@example.com' },
    message: { label: 'Message', placeholder: 'How can I help?' },
  },
  submitButton: 'Send Message',
  success: {
    title: 'Message sent!',
    message: "I'll get back to you soon.",
  },
};

export const aiChatConfig = {
  title: 'AI Assistant',
  subtitle: 'Powered by OpenRouter',
  placeholder: 'Ask me anything...',
  initialMessage: "Hi! I'm Bhanu's AI assistant. Ask me anything about Salesforce architecture or his work.",
  sendButton: 'Send',
  errorMessage: 'Error connecting to AI service. Please try again.',
};

export const projects = [
  {
    id: 1,
    title: 'Enterprise CRM Transformation',
    description: 'Led the architecture and migration of a legacy CRM to Salesforce, serving 50,000+ users.',
    tags: ['Salesforce', 'Architecture', 'Migration'],
    image: '/assets/project-1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Multi-Cloud Integration Hub',
    description: 'Designed a scalable integration layer connecting Salesforce with AWS, Azure, and GCP services.',
    tags: ['Integration', 'AWS', 'Azure'],
    image: '/assets/project-2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'AI-Powered Lead Scoring',
    description: 'Implemented Einstein AI for lead scoring, increasing conversion rates by 35%.',
    tags: ['Einstein', 'AI', 'Analytics'],
    image: '/assets/project-3.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'B2B Commerce Platform',
    description: 'Built a custom B2B commerce experience on Salesforce with complex pricing and approval workflows.',
    tags: ['B2B', 'Commerce', 'CPQ'],
    image: '/assets/project-4.jpg',
    link: '#',
  },
];

export const posts = [
  {
    id: 1,
    title: 'Mastering Salesforce Architecture Patterns',
    excerpt: 'Explore the most effective architecture patterns for scalable Salesforce implementations.',
    date: '2024-01-15',
    category: 'Architecture',
    readTime: '8 min read',
    slug: 'mastering-salesforce-architecture-patterns',
  },
  {
    id: 2,
    title: 'Integrating Salesforce with Modern Cloud Services',
    excerpt: 'A deep dive into connecting Salesforce with AWS, Azure, and GCP for enterprise solutions.',
    date: '2024-01-02',
    category: 'Integration',
    readTime: '12 min read',
    slug: 'integrating-salesforce-with-modern-cloud-services',
  },
  {
    id: 3,
    title: 'The Future of CRM: AI and Automation',
    excerpt: 'How Einstein AI and automation are reshaping the Salesforce ecosystem.',
    date: '2023-12-20',
    category: 'AI',
    readTime: '6 min read',
    slug: 'future-of-crm-ai-and-automation',
  },
  {
    id: 4,
    title: 'Performance Optimization in Large Salesforce Orgs',
    excerpt: 'Strategies for maintaining performance in orgs with millions of records.',
    date: '2023-12-05',
    category: 'Performance',
    readTime: '10 min read',
    slug: 'performance-optimization-large-salesforce-orgs',
  },
];

export const certifications = [
  {
    id: 1,
    name: 'Salesforce Certified Technical Architect',
    issuer: 'Salesforce',
    date: '2023',
    credentialId: 'CTA-2023-001',
    icon: '🏆',
  },
  {
    id: 2,
    name: 'Salesforce Certified Application Architect',
    issuer: 'Salesforce',
    date: '2022',
    credentialId: 'CAA-2022-001',
    icon: '🎓',
  },
  {
    id: 3,
    name: 'Salesforce Certified Platform Developer II',
    issuer: 'Salesforce',
    date: '2021',
    credentialId: 'PDII-2021-001',
    icon: '💻',
  },
  {
    id: 4,
    name: 'Salesforce Certified Administrator',
    issuer: 'Salesforce',
    date: '2020',
    credentialId: 'ADM-2020-001',
    icon: '⚙️',
  },
  {
    id: 5,
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2022',
    credentialId: 'AWS-2022-001',
    icon: '☁️',
  },
  {
    id: 6,
    name: 'Google Cloud Professional Architect',
    issuer: 'Google Cloud',
    date: '2023',
    credentialId: 'GCP-2023-001',
    icon: '🌐',
  },
];

export const skills = [
  { name: 'Salesforce Architecture', level: 95 },
  { name: 'Apex & Lightning', level: 90 },
  { name: 'Integration (REST/SOAP)', level: 88 },
  { name: 'AWS Cloud', level: 85 },
  { name: 'Data Modeling', level: 92 },
  { name: 'DevOps & CI/CD', level: 80 },
  { name: 'Project Management', level: 87 },
  { name: 'Technical Leadership', level: 93 },
];