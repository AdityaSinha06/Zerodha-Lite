export default function Hero() {
    return (
        <div className="container-fluid text-white mb-5 p-5" style={{backgroundColor:"#367ED1"}}>
            <div className="container">
                <div className="row">
                    <div className="col-6"><h4>Support Portal</h4></div>
                    <div className="col-6 text-end"><a href="" style={{color:"white" , textDecoration:"underline"}}>Track Tickets</a></div>
                </div>

                <div className="row mt-5 mb-2">
                    <div className="col">
                        <h3>Search for an answer or browse help topics <br />to create a ticket</h3> <br />
                        <input type="text" style={{width:"80%" , height:"30%" , borderRadius:"10px", padding:"5%"}} placeholder="Eg: how do i activate F&O, why is my order getting rejected.."/> <br /> <br />
                        <a href=""style={{color:"white" , textDecoration:"underline"}}>Track account opening</a> &nbsp;&nbsp;
                        <a href=""style={{color:"white" , textDecoration:"underline"}}>Track segment activation</a> &nbsp;&nbsp;
                        <a href=""style={{color:"white" , textDecoration:"underline"}}>Intraday</a> &nbsp;&nbsp; <br />
                        <a href=""style={{color:"white" , textDecoration:"underline"}}>margins</a> &nbsp;&nbsp;
                        <a href=""style={{color:"white" , textDecoration:"underline"}}>Kite user manual</a>
                    </div>
                    
                    <div className="col">
                        <h3>Featured</h3>
                        <ol type="1">
                            <li className="mb-3"><a href=""style={{color:"white" , textDecoration:"underline"}}>Current Takeovers and Delisting - January 2024</a></li>
                            <li><a href=""style={{color:"white" , textDecoration:"underline"}}>Latest Intraday leverages - MIS & CO</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}