import { interviewQuestions } from '../data/data';

export default function Interview() {
  const questions = interviewQuestions;

  return (
    <div className="fade-in">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-background-light tracking-tight mb-4">
              Interview Prep
            </h1>
            <p className="text-text-dark max-w-2xl mx-auto">
              Common Salesforce architect interview questions with detailed answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {questions.map((q) => (
              <details key={q.id} className="glass-card group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-8 bg-accent/60 rounded-full flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-background-light font-semibold group-hover:text-accent transition-colors">{q.question}</h3>
                      <span className="text-text-dark text-xs mt-1 inline-block">{q.category}</span>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-text-dark group-hover:text-accent transition-colors flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-text-dark text-sm leading-relaxed pl-5">{q.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}