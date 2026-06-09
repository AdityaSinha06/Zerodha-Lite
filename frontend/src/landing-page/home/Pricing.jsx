export default function Pricing() {
    return (
        <div className="container">
            <div className="row text-center mb-5">
                <div className="col-4">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="https://zerodha.com/charges/#tab-equities">See pricing &rarr;</a>
                </div>

                <div className="col-2"></div>

                <div className="col-6">
                    <div className="row" style={{border: "1px solid grey"}}>
                        <div className="col" style={{border: "1px solid grey"}}>
                            <h1>&#8377;0</h1>
                            <p>Free account opening</p>
                        </div>
                        <div className="col" style={{border: "1px solid grey"}}>
                            <h1>&#8377;0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col" style={{border: "1px solid grey"}}>
                            <h1>&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}