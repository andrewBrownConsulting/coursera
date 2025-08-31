export default function Specials() {
    function SpecialCard() {
        return (
            <div>
                <div className="card">
                    <img className='card-img' src='/bruscetta.png' alt='Bruscetta goes here' />
                    <div className="card-body">
                        <h2>Bruscetta</h2>
                        <p>$10.99</p>
                        <p>Our bruscetta is made from bread</p>
                        <button className="yellow-btn">Order Now</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section className="specials align-items-center p-2 p-md-5">
            <h1 className='col-12'>Specials</h1>
            <div className="row row-cols-sm-2 row-cols-md-3 g-3">
                <SpecialCard />
                <SpecialCard />
                <SpecialCard />
            </div>
        </section>
    )
}