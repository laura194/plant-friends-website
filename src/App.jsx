import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home-Page';
import PrivacyPolicy from './pages/Privacy-Policy-Page';
import DeleteAccountPage from './pages/Delete-Account-Page';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/plant-friends-website/" element={<Home />} />
        <Route path="/plant-friends-website/privacy" element={<PrivacyPolicy />} />
        <Route path="/plant-friends-website/deleteAccount" element={<DeleteAccountPage />} />

      </Routes>
    </Router>
  );
}

export default App;

