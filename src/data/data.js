import { certifications as upstreamCerts } from './certifications';
import { projects as upstreamProjects } from './projects';
import { posts as upstreamPosts } from './posts';
import { skills as upstreamSkills } from './skills';
import { interviewTopics as upstreamInterviewTopics } from './interview';
import { trainingCourses as upstreamTrainingCourses } from './training';
import { social as upstreamSocial } from './social';

export const certifications = upstreamCerts.map((cert) => ({
  id: cert.id,
  name: cert.name,
  shortName: cert.shortName,
  issuer: 'Salesforce',
  date: String(cert.year),
  credentialId: `CERT-${cert.id}`,
  icon: cert.image || '🏆',
  description: cert.description,
  color: cert.color,
  image: cert.image,
  verifyUrl: cert.verifyUrl,
}));

export const projects = upstreamProjects.map((proj) => ({
  id: proj.id,
  title: proj.name,
  slug: proj.slug,
  description: proj.description,
  tags: proj.techStack,
  image: proj.image,
  link: '#',
  techStack: proj.techStack,
  highlights: proj.highlights,
  status: proj.status,
  year: proj.year,
  type: proj.type,
  category: proj.category,
}));

export const posts = upstreamPosts.map((post) => ({
  id: post.id,
  title: post.title,
  excerpt: post.excerpt,
  date: post.date,
  category: post.category,
  readTime: `${post.readTime} min read`,
  slug: post.slug,
  featured: post.featured,
  author: post.author,
  content: post.content,
  tags: post.tags,
}));

export const skills = upstreamSkills.map((skill, _index) => ({
  name: skill.name,
  level: skill.proficiency,
  category: skill.category,
  icon: skill.icon,
}));

export const interviewQuestions = upstreamInterviewTopics.flatMap((topic) =>
  topic.questions.map((q, idx) => ({
    id: `${topic.id}-${idx}`,
    question: q.q,
    answer: q.a,
    category: topic.title,
  }))
);

export const courses = upstreamTrainingCourses.map((course) => ({
  id: course.id,
  title: course.name,
  slug: course.slug,
  provider: 'Salesforce',
  duration: course.duration,
  progress: 0,
  level: course.level,
  description: course.description,
  fullDescription: course.fullDescription,
  icon: course.icon,
  image: course.image,
  modules: course.modules,
}));

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
    { name: 'LinkedIn', href: upstreamSocial.linkedin },
    { name: 'GitHub', href: upstreamSocial.github },
    { name: 'Twitter', href: upstreamSocial.twitter },
    { name: 'Salesforce', href: '#' },
  ],
};

export const socialLinks = [
  { name: 'LinkedIn', href: upstreamSocial.linkedin },
  { name: 'GitHub', href: upstreamSocial.github },
  { name: 'Twitter', href: upstreamSocial.twitter },
  { name: 'YouTube', href: upstreamSocial.youtube },
  { name: 'Upwork', href: upstreamSocial.upwork },
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