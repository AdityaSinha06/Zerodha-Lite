export default function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="Assets/homeHero.png" alt="Hero Image" className="mb-5"/>
                <h1 className="mb-3"> Invest in everything </h1>
                <p> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>
                <button className="btn btn-primary p-2 mb-5" style={{width: "25%", margin: "0 auto"}}> Sign up for free </button>
            </div>
        </div>
    );
}