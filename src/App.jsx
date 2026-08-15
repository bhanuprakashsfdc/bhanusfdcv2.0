import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import AIChatModal from './components/AIChatModal';

import Home from './pages/Home';
import About from './pages/About';
import Certifications from './pages/Certifications';
import Portfolio from './pages/Portfolio';
import Training from './pages/Training';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Interview from './pages/Interview';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="index.html" element={<Home />} />
              <Route path="about.html" element={<About />} />
              <Route path="certifications.html" element={<Certifications />} />
              <Route path="portfolio.html" element={<Portfolio />} />
              <Route path="training.html" element={<Training />} />
              <Route path="blog.html" element={<Blog />} />
              <Route path="contact.html" element={<Contact />} />
              <Route path="interview.html" element={<Interview />} />
            </Route>
          </Routes>
        </div>
        <Footer />
        <ChatBot />
        <AIChatModal />
      </div>
    </BrowserRouter>
  );
}