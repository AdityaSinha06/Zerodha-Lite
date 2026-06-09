export default function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center mt-5 mb-5">
        <h3>The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center mb-5 text-muted">
        <div className="col">
          <div className="mb-5">
            <img
              src="Assets/zerodhaFundhouse.png"
              alt=""
              style={{ width: "35%", marginBottom: "20px" }}
            />
            <p>
              Our asset managemnt venture that is creating simple and
              transparent index funds to help you save for your goals
            </p>
          </div>
          <div>
            <img
              src="Assets/streakLogo.png"
              alt=""
              style={{ width: "35%", marginBottom: "20px" }}
            />
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>

        <div className="col">
          <div className="mb-5">
            <img
              src="Assets/sensibullLogo.svg"
              alt=""
              style={{ width: "35%", marginBottom: "20px" }}
            />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div>
            <img
              src="Assets/smallcaseLogo.png"
              alt=""
              style={{ width: "35%", marginBottom: "20px" }}
            />
            <p>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>

        <div className="col">
          <div className="mb-5">
            <img
              src="Assets/tijori.png"
              alt=""
              style={{ width: "35%", marginBottom: "5px" }}
            />
            <p>
              Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div>
            <img
              src="Assets/dittoLogo.png"
              alt=""
              style={{ width: "35%", marginBottom: "20px" }}
            />
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <button className="btn btn-primary p-2 mb-3" style={{width: "25%", margin: "0 auto"}}> Sign up for free </button>
      </div>
    </div>
  );
}
