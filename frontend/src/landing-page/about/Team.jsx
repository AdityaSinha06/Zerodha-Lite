export default function Team() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6">
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className="col-6">
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p><a href="https://rainmatter.com/" target="_blank">Rainmatter</a> , our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <h3 style={{textAlign:"center"}}>People</h3> 
                <div className="col-6 mt-5 text-center mb-5">
                    <img src="Assets/nithinKamath.jpg" alt="NithinKamath Img" style={{width:"50%", borderRadius:"100%"}}/>
                    <p><b>Nithin Kamath</b></p>
                    <p>Founder, CEO</p>
                </div>
                <div className="col-6 mt-5 mb-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
                </div>
            </div>

            <div className="row mb-5 p-3" style={{border:"1px solid black" , borderRadius:"20px"}}>
                <p>This is full-stack web-application built by me, <a href="https://www.linkedin.com/in/adityasinha20/" target="_blank">Aditya Sinha.</a></p>
                <p>I'm a final year CSE undergrad, looking for internships and opportunities where I can contribute and learn along the way too.</p>
                <p>Feel free to connect!</p>
            </div>
        </div>
    );
}