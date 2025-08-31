import Header from './Header.js'
import Hero from './Hero.js'
import Specials from './Specials.js'
import Testimonials from './Testimonials.js'
import About from './About.js'
import Footer from './Footer.js'
export default function Homepage() {
    return (<div >

        <main>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </main>

    </div >)
}