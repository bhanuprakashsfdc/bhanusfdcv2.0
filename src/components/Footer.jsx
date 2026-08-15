import { Link } from 'react-router-dom';
import { footerLinks } from '../data/data';

export default function Footer() {
  return (
    <footer className="bg-primary-green border-t border-secondary-green/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/index.html" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 hexagon bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">BP</span>
              </div>
              <span className="font-semibold text-lg text-background-light tracking-tight">
                Bhanu<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-text-dark text-sm leading-relaxed">
              Salesforce Architect specializing in scalable enterprise solutions and cloud-native architectures.
            </p>
          </div>

          <div>
            <h3 className="text-background-light font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-text-dark hover:text-accent text-sm transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-background-light font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-text-dark hover:text-accent text-sm transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-background-light font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-text-dark hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-green/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-dark text-sm">
            &copy; {new Date().getFullYear()} Bhanu Prakash. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-dark hover:text-accent text-sm transition-colors duration-200">Privacy</a>
            <a href="#" className="text-text-dark hover:text-accent text-sm transition-colors duration-200">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}