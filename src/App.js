import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Home from "./pages/Home";
import Organisers from './pages/Organisers';
import PaymentSuccessPage from './components/PaymentSuccessPage';
import  EventDetails from './pages/EventDetails'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organisers" element={<Organisers />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>

    </Router>
  );
}

export default App;