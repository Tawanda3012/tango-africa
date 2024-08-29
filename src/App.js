import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Home from "./pages/Home";
import Organisers from './pages/Organisers';
import PaymentSuccessPage from './components/PaymentSuccessPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organisers" element={<Organisers />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;