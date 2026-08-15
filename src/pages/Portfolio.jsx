import { projects } from '../data/data';
import { useState } from 'react';

import { portfolioFilters } from '../data/data';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState(portfolioFilters[0]);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="fade-in">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-background-light tracking-tight mb-4">
              Portfolio
            </h1>
            <p className="text-text-dark max-w-2xl mx-auto">
              A selection of projects showcasing enterprise architecture, integration, and innovation.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-12">
            {portfolioFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-accent text-primary-dark'
                    : 'bg-primary-green/30 text-text-dark hover:text-background-light border border-secondary-green/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
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
    </div>
  );
}