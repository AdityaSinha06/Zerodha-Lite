export default function Brokerage() {
    return (
        <div className="container mt-5 border-top">
            <div className="row mt-5 mb-5">
                <div className="col-9">
                    <h4 className="text-center" ><a href="">Brokerage calculator</a></h4>
                    <ul className="text-muted mt-5">
                        <li>
                            <p>Call & Trade and RMS auto-squareoff: Additional charges of &#8377; 50 + GST per order.</p>
                        </li>
                        <li>
                            <p>Digital contract notes will be sent via e-mail. </p>
                        </li>
                        <li>
                            <p>Physical copies of contract notes, if required, shall be charged &#8377;20 per contract note. Courier charges apply.</p>
                        </li>
                        <li>
                            <p>For NRI account (non-PIS), 0.5% or &#8377;100 per executed order for equity (whichever is lower).</p>
                        </li>
                        <li>
                            <p>For NRI account (PIS), 0.5% or &#8377;200 per executed order for equity (whichever is lower).</p>
                        </li>
                        <li>
                            <p>If the account is in debit balance, any order placed will be charged &#8377;40 per executed order instead of &#8377;20 per executed order.</p>
                        </li>
                    </ul>
                </div>

                <div className="col-3">
                    <h4 className="text-center" ><a href="">List of charges</a></h4>
                </div>
            </div>
        </div>
    );
}