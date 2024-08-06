import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Home from "./pages/Home";
import Organisers from './pages/Organisers';
// import Footer from './components/Footer';

function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organisers" element={<Organisers />} />
        
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;