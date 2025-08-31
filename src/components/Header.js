import { Link } from 'react-router'
export default function Header() {
    return (
        <header className>
            <nav>
                <ul className="row text-center align-items-center fs-5 p-5 " style={{ height: '100%' }}>
                    <li className='col'><Link to='/'><img className='img-fluid' src='/little-lemon-logo.png' alt='site logo' /></Link></li>
                    <li className="col"><Link to='/'>Home</Link></li>
                    <li className="col"><Link>About</Link></li>
                    <li className="col"><Link>Menu</Link></li>
                    <li className="col"><Link to='/booking'>Reservations</Link></li>
                    <li className="col"><Link>Order Online</Link></li>
                    <li className="col"><Link>Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}