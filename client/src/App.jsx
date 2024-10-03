
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer'
import Products from './pages/Products';
import RewardsPage from './components/RewardsPage';

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/rewards" element={<RewardsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
