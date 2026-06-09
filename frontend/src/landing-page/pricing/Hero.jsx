export default function Hero() {
    return (
        <div className="container mt-5">
            <div className="row text-center mt-5 mb-5">
                <h1>Pricing</h1>
                <p>Free equity investments and flat &#8377; 20 traday and F&O trades</p>
            </div>

            <div className="row text-center border-top">
                <div className="col">
                    <img src="Assets/pricing0.svg" alt="" />
                    <h2>Free equity delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), <br /> are absolutely free - &#8377; 0 brokerage.</p>
                </div>
                <div className="col">
                    <img src="Assets/intradayTrades.svg" alt="" />
                    <h2>Intraday and F&O trades</h2>
                    <p className="text-muted">Flat Rs. 20 or 0.03% (whichever is lower) <br /> per executed order on intraday trades <br /> across equity, currency, and commodity <br /> trades.</p>
                </div>
                <div className="col">
                    <img src="Assets/pricing0.svg" alt="" />
                    <h2>Free direct MF</h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely <br /> free - &#8377; 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}