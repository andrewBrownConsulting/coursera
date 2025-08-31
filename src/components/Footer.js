export default function Footer() {
    return (
        <footer className="row p-5">
            <div className="col-12 col-sm-6 col-md-3 text-center">
                <img
                    className='img-fluid'
                    src='footer-logo.png'
                    alt='little lemon footer icon'
                    style={{ maxWidth: '100px' }}
                />
                <br />
                <br />
                <p>Copyright Little Lemon 2025 &copy;</p>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <h2>Site Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <h2>Contact</h2>
                <ul>
                    <li>Email</li>
                    <li>Phone</li>
                    <li>Fax</li>
                </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
                <h2>Social Media</h2>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </footer>
    )
}