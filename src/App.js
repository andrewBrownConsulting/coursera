import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Booking from './components/Booking.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage.js';
import { Link, Route, Routes } from 'react-router'
import ConfirmedBooking from './components/ConfirmedBooking.js';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/confirmed' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
