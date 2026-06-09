export default function Awards() {
    return (
        <div className="container p-4">
            <div className="row text-center mt-5 mb-5">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <img src="Assets/largestBroker.svg" alt="largest Broker Img" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India by trading and investing in: </p>
                    <div className="row">
                        <div className="col-6 p-3">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>

                        <div className="col-6 p-3">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct Mutual Funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                        <img src="Assets/pressLogos.png" alt="Img" />
                    </div>
                </div>
            </div>
        </div>
    );
}