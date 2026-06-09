export default function Education() {
    return (
        <div className="container mt-5 p-5">
            <div className="row p-5 mb-5">
                <div className="col-6 ">
                    <img src="Assets/education.svg" alt="Img"  style={{width: "75%"}}/>
                </div>
                <div className="col-6">
                    <h1>Free and open market education</h1> <br />

                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="https://zerodha.com/varsity/">Varsity &rarr;</a>

                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="https://tradingqna.com/">TradingQ&A &rarr;</a>
                </div>
            </div>
        </div>
    );
}