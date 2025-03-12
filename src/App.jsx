import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import SinglePage from './pages/SinglePage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import Navigation from './components/Navigation';

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:id" element={<SinglePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
