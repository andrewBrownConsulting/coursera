import './App.css';
import Header from './Header.js'
import Hero from './Hero.js'
import Specials from './Specials.js'
import Testimonials from './Testimonials.js'
import About from './About.js'
import Footer from './Footer.js'
function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div >
  );
}

export default App;
