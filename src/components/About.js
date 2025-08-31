export default function About() {
    function ChefImages() {
        return (
            <div className="col-12 col-md-5 align-content-center overlap-images">
                <img id='one-chef' className="img-fluid" src='chef.png' alt="chef" />
                <img id='two-chefs' className="img-fluid" src='/two-chefs.png' alt="two-chefs" />
            </div>
        )
    }
    return (
        <section className="row p-2 p-md-5">
            <div className="col-12 col-md-7 align-content-center">
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    <br />
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button className="yellow-btn">Learn More</button>
            </div>
            <ChefImages />

        </section>
    )
}