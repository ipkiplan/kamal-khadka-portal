import { useState, useCallback, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './sections/Navigation';
import { Footer } from './sections/Footer';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServicesLegal } from './pages/ServicesLegal';
import { ServicesNotary } from './pages/ServicesNotary';
import { ServicesDigitalTechnology } from './pages/ServicesDigitalTechnology';
import { Kiplan } from './pages/Kiplan';
import { KiplanNotary } from './pages/KiplanNotary';
import { KiplanScholar } from './pages/KiplanScholar';
import { KiplanLaw } from './pages/KiplanLaw';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { Disclaimer } from './pages/Disclaimer';

// Resets scroll position to the top whenever the route changes, so
// navigating between pages doesn't leave the viewport mid-scroll from
// wherever the previous page happened to be.
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      <div className={`min-h-screen bg-[#141414] ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
        <ScrollToTopOnNavigate />
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home isReady={!isLoading} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/legal" element={<ServicesLegal />} />
            <Route path="/services/notary" element={<ServicesNotary />} />
            <Route path="/services/digital-technology" element={<ServicesDigitalTechnology />} />
            <Route path="/kiplan" element={<Kiplan />} />
            <Route path="/kiplan/kiplannotary" element={<KiplanNotary />} />
            <Route path="/kiplan/kiplanscholar" element={<KiplanScholar />} />
            <Route path="/kiplan/kiplanlaw" element={<KiplanLaw />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;