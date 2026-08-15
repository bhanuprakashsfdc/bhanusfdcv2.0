import { skills, bio, experience } from '../data/data';

export default function About() {
  return (
    <div className="fade-in">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-background-light tracking-tight mb-6">
                About <span className="text-accent">Me</span>
              </h1>
              <div className="space-y-4 text-text-dark leading-relaxed">
                {bio.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="glass-card p-8">
              <h2 className="text-xl font-semibold text-background-light mb-6">Core Competencies</h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-background-light">{skill.name}</span>
                      <span className="text-sm text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-primary-green/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-background-light mb-12 text-center">Experience Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-secondary-green/30" />
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-5/12" />
                  <div className="w-2 h-2 rounded-full bg-accent absolute left-1/2 transform -translate-x-1/2 z-10" />
                  <div className="w-5/12 glass-card p-6">
                    <span className="text-accent text-sm font-medium">{exp.year}</span>
                    <h3 className="text-background-light font-semibold mt-1">{exp.role}</h3>
                    <p className="text-text-dark text-sm">{exp.company}</p>
                    <p className="text-text-dark text-xs mt-2 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}