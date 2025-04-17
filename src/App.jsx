
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { EmailProvider } from './context/EmailContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import SinglePage from './pages/SinglePage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import Navigation from './components/Navigation';
import Logo from './assets/Logo';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {



  return (
    <ThemeProvider>
    <EmailProvider>

    <Router>

      <header>
      <Logo />
      <Navigation />
      </header>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<SinglePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>  

      <Footer />
      <ScrollToTop />
    </Router>
    </EmailProvider>
    </ThemeProvider>
  )
}

export default App
