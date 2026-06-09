import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";


export default function ProductsPage() {
    return (
        <>
            <Hero></Hero>
            <LeftSection imgSrc={"Assets/kite.png"} title={"Kite"} text={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}></LeftSection>
            <RightSection imgSrc={"Assets/console.png"} title={"Console"} text={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}></RightSection>
            <LeftSection imgSrc={"Assets/coin.png"} title={"Coin"} text={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}></LeftSection>
            <RightSection imgSrc={"Assets/kiteconnect.png"} title={"Kite Connect API"} text={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}></RightSection>
            <LeftSection imgSrc={"Assets/varsity.png"} title={"Varsity mobile"} text={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}></LeftSection>
            <p style={{textAlign:"center", marginBottom:"10%"}}>Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/">Zerodha.tech</a> blog.</p>
            <Universe></Universe>
        </>
    );
}