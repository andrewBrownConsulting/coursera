export default function Testimonials() {
    function Review() {
        return (
            <div>
                <div className="card p-3">
                    <div className="row row-cols-2 p-2">
                        <h1>Juan</h1>
                        <img className='review-img' src='/juan.png' alt='profile goes here' />
                    </div>
                    <div className="row row-cols-5">
                        <img className='col' src="star.svg" alt="star" />
                        <img className='col' src="star.svg" alt="star" />
                        <img className='col' src="star.svg" alt="star" />
                        <img className='col' src="star.svg" alt="star" />
                        <img className='col' src="star.svg" alt="star" />
                    </div>
                    <p>The food was good.</p>
                </div>
            </div>
        )
    }
    return (
        <section className="testimonials p-2 p-md-5">
            <h1 className="light-text">Testimonials</h1>
            <div className="row row-cols-sm-2 row-cols-md-3 g-3">
                <Review />
                <Review />
                <Review />
            </div>
        </section>
    )
}