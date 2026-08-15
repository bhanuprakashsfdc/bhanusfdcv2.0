import { posts, blogCategories } from '../data/data';
import { useState } from 'react';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState(blogCategories[0]);

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="fade-in">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-background-light tracking-tight mb-4">
              Blog
            </h1>
            <p className="text-text-dark max-w-2xl mx-auto">
              Thoughts on Salesforce architecture, cloud integration, and technical leadership.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-12">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-accent text-primary-dark'
                    : 'bg-primary-green/30 text-text-dark hover:text-background-light border border-secondary-green/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
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
                <p className="text-text-dark text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-text-dark text-xs">{post.date}</span>
                  <span className="text-accent text-sm font-medium group-hover:underline">Read more &rarr;</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}