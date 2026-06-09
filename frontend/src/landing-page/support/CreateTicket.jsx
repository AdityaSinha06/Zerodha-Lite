import "./CreateTicket.css";

export default function CreateTicket() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row mt-5 mb-5">
                <h3>To create a ticket, select a relevant topic</h3>
                <div className="col supportCol mt-5">
                    <p className="mb-5"><b> <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</b></p>
                    <ul>
                        <li className="mb-3"><a href="">Online Account Opening</a></li>
                        <li className="mb-3"><a href="">Offline Account Opening</a></li>
                        <li className="mb-3"><a href="">Company, Partnershup and HUF Account Opening</a></li>
                        <li className="mb-3"><a href="">NRI Account Opening</a></li>
                        <li className="mb-3"><a href="">Charges at Zerodha</a></li>
                        <li className="mb-3"><a href="">Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
                        <li className="mb-3"><a href="">Getting Started</a></li>
                    </ul>
                </div>

                <div className="col supportCol mt-5">
                    <p className="mb-5"><b><i class="fa-solid fa-circle-user"></i> Your Zerodha Account</b></p>
                    <ul>
                        <li className="mb-3"><a href="">Login Credentials</a></li>
                        <li className="mb-3"><a href="">Account Modification and Segment Addition</a></li>
                        <li className="mb-3"><a href="">DP ID and bank details</a></li>
                        <li className="mb-3"><a href="">Your Profile</a></li>
                        <li className="mb-3"><a href="">Transfer and conversion of shares</a></li>
                    </ul>
                </div>

                <div className="col supportCol mt-5">
                    <p className="mb-5"><b><i class="fa-solid fa-chart-column"></i>  Your Zerodha Account</b></p>
                    <ul>
                        <li className="mb-3"><a href="">Margin/leverage, Product and Order types</a></li>
                        <li className="mb-3"><a href="">Kite Web and Mobile</a></li>
                        <li className="mb-3"><a href="">Trading FAQs</a></li>
                        <li className="mb-3"><a href="">Corporate Actions</a></li>
                        <li className="mb-3"><a href="">Sentinel</a></li>
                        <li className="mb-3"><a href="">Kite API</a></li>
                        <li className="mb-3"><a href="">Pi and other platform</a></li>
                        <li className="mb-3"><a href="">Stockreports+</a></li>
                        <li className="mb-3"><a href="">GTT</a></li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col supportCol mt-5">
                    <p className="mb-5"><b><i class="fa-solid fa-indian-rupee-sign"></i> Funds</b></p>
                    <ul>
                        <li className="mb-3"><a href="">Add money</a></li>
                        <li className="mb-3"><a href="">Withdraw money</a></li>
                        <li className="mb-3"><a href="">Add bank accounts</a></li>
                        <li className="mb-3"><a href="">eMandates</a></li>
                    </ul>
                </div>

                <div className="col supportCol mt-5">
                    <p className="mb-5"><b><i class="fa-solid fa-chart-pie"></i> Console</b></p>
                    <ul>
                        <li className="mb-3"><a href="">Portfolio</a></li>
                        <li className="mb-3"><a href="">Corporate actions</a></li>
                        <li className="mb-3"><a href="">Funds statement</a></li>
                        <li className="mb-3"><a href="">Reports</a></li>
                        <li className="mb-3"><a href="">Profile</a></li>
                        <li className="mb-3"><a href="">Segments</a></li>
                    </ul>
                </div>

                <div className="col supportCol mt-5">
                    <p className="mb-5"><b><i class="fa-solid fa-coins"></i> Coin</b></p>
                    <ul>
                        <li className="mb-3"><a href="">Mutual funds</a></li>
                        <li className="mb-3"><a href="">National Pension Scheme (NPS)</a></li>
                        <li className="mb-3"><a href="">Fixed Deposit (FD)</a></li>
                        <li className="mb-3"><a href="">Features on Coin</a></li>
                        <li className="mb-3"><a href="">Payments and Orders</a></li>
                        <li className="mb-3"><a href="">General</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}