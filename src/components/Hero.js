import { Link } from 'react-router';
export default function Hero() {
    return (
        <section className="hero row align-items-center p-2 p-md-5">
            <div className='col-12 col-md-6 light-text'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, focused on
                    traditional recipes served with a modern twist.
                </p>
                <Link to='/booking'><button className="yellow-btn" aria-label='Go to Reservations'>Reserve a Table</button></Link>
            </div>
            <div className="col-12 col-md-4 m-auto">
                <img
                    className='img-fluid'
                    src='/board.png'
                    alt='board of food'
                    style={{ width: '100%', height: 'auto', aspectRatio: '1 / 1', objectFit: 'cover' }}
                />
            </div>
        </section>
    )
}