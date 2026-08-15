import { courses } from '../data/data';

export default function Training() {
  return (
    <div className="fade-in">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-background-light tracking-tight mb-4">
              Training
            </h1>
            <p className="text-text-dark max-w-2xl mx-auto">
              Continuous learning and professional development across cloud platforms and architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="glass-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-2 py-1 bg-primary-green/40 text-text-dark text-xs font-medium rounded-md border border-secondary-green/20">
                    {course.level}
                  </span>
                  <span className="text-text-dark text-xs">{course.duration}</span>
                </div>
                <h3 className="text-background-light font-semibold mb-1">{course.title}</h3>
                <p className="text-text-dark text-sm mb-4">{course.provider}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-dark">Progress</span>
                    <span className="text-accent font-medium">{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-primary-green/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}