import { Link } from 'react-router-dom';
import { projects, certifications, posts, stats } from '../data/data';

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const latestPosts = posts.slice(0, 2);
  const featuredCerts = certifications.slice(0, 3);

  return (
    <div className="fade-in">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border border-secondary-green/30 rotate-45" />
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-accent/20 rotate-12" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 hexagon border border-secondary-green/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/40 border border-secondary-green/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-text-dark text-sm font-medium">Available for new opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-background-light tracking-tight mb-6 leading-tight">
            Building Scalable<br />
            <span className="text-accent">Salesforce</span> Solutions
          </h1>

          <p className="text-lg sm:text-xl text-text-dark max-w-2xl mx-auto mb-10 leading-relaxed">
            Salesforce Technical Architect specializing in enterprise cloud architecture, integration patterns, and building high-performance CRM solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/portfolio.html" className="px-8 py-3 bg-accent text-primary-dark font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-200">
              View Portfolio
            </Link>
            <Link to="/contact.html" className="px-8 py-3 bg-transparent border border-secondary-green/40 text-background-light font-semibold rounded-lg hover:border-secondary-green hover:bg-primary-green/20 transition-all duration-200">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bento-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-6">
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-text-dark text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-background-light mb-2">Featured Work</h2>
              <p className="text-text-dark">Recent projects and achievements</p>
            </div>
            <Link to="/portfolio.html" className="text-accent hover:text-accent/80 text-sm font-medium transition-colors">
              View all &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="glass-card p-6 group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-background-light group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <svg className="w-5 h-5 text-text-dark group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-text-dark text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary-green/40 text-text-dark text-xs rounded-md border border-secondary-green/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-background-light mb-2">Latest Insights</h2>
              <p className="text-text-dark">Thoughts on Salesforce and cloud architecture</p>
            </div>
            <Link to="/blog.html" className="text-accent hover:text-accent/80 text-sm font-medium transition-colors">
              View all &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestPosts.map((post) => (
              <article key={post.id} className="glass-card p-6 group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-md border border-accent/20">
                    {post.category}
                  </span>
                  <span className="text-text-dark text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-background-light group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-text-dark text-sm leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-background-light mb-2">Certifications</h2>
            <p className="text-text-dark">Professional credentials and achievements</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCerts.map((cert) => (
              <div key={cert.id} className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 hexagon bg-primary-green/40 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {cert.icon && (cert.icon.startsWith('/') || cert.icon.startsWith('http')) ? (
                    <img src={cert.icon} alt={cert.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl">{cert.icon || '🏆'}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-background-light font-semibold text-sm mb-1">{cert.name}</h3>
                  <p className="text-text-dark text-xs">{cert.issuer} &middot; {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}