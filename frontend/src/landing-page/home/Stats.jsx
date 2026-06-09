import "./Stats.css"
export default function Stats() {
    return (
        <div className="container p-5">
            <div className="row text-center p-5">
                <div className="col-sm-12 col-md-12 col-lg-6 p-5">
                    <h1 className="fs-1 mb-5">Trust with confidence</h1>
                    <h2 className="fs-2">Customer-first always</h2>
                    <p className="fs-6 mb-5">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h2 className="fs-2">No spam or gimmicks</h2>
                    <p className="fs-6 mb-5">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="https://zerodha.com/about/philosophy">Our philosophies.</a></p>

                    <h2 className="fs-2">The Zerodha universe</h2>
                    <p className="fs-6 mb-5">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className="fs-2">Do better with money</h2>
                    <p className="fs-6">With initiatives like <a href="https://support.zerodha.com/category/trading-and-markets/alerts-and-nudges/nudges/articles/what-is-nudge">Nudge</a>  and <a href="https://support.zerodha.com/category/console/segments/killswitch/articles/what-is-the-kill-switch">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 p-5">
                    <img src="Assets/ecosystem.png" alt="Img" style={{width: "110%" , height: "70%"}}/>
                    <div className="row  mt-4">
                        <div className="col-7">
                            <a href="https://zerodha.com/products">Explore our products &rarr;</a>
                        </div>
                        <div className="col-5 ">
                            <a href="https://kite-demo.zerodha.com/dashboard">Try Kite demo &rarr;</a>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}