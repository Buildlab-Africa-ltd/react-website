import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Programs from './components/pages/Programs';
import HeroSection from './components/HeroSection';
import ProgramSection from './components/ProgramSection';
import TestimonialSection from './components/TestimonialSection';
import Tracks from './components/Tracks';
import QuestionSection from './components/QuestionSection'
import Footer from './components/Footer';




function App() {
  return (
    <>
    <Router>
      <Navbar />
      <HeroSection />
      <ProgramSection />
      <TestimonialSection />
      <Tracks />
      <QuestionSection />
      <Footer />
        <Routes>
           <Route path="/" exact component={Home} />  
            <Route path="/Programs" exact component={Programs} />
        </Routes>
    </Router>
    </>
  );

}

export default App;
