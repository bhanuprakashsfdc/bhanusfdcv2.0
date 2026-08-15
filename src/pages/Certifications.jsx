import { certifications } from '../data/data';

export default function Certifications() {
  return (
    <div className="fade-in">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-background-light tracking-tight mb-4">
              Certifications
            </h1>
            <p className="text-text-dark max-w-2xl mx-auto">
              A comprehensive set of professional certifications demonstrating expertise across the Salesforce ecosystem and cloud platforms.
            </p>
          </div>

          <div className="bento-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="glass-card p-6 group hover:border-secondary-green/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 hexagon bg-primary-green/40 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-green/60 transition-colors overflow-hidden">
                    {cert.icon && (cert.icon.startsWith('/') || cert.icon.startsWith('http')) ? (
                      <img src={cert.icon} alt={cert.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-3xl">{cert.icon || '🏆'}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-background-light font-semibold mb-1 group-hover:text-accent transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-text-dark text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-text-dark text-xs">{cert.date}</span>
                      <span className="text-text-dark text-xs">ID: {cert.credentialId}</span>
                    </div>
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