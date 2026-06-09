export default function LeftSection({imgSrc , title , text}) {
    return (
        <div className="container mt-5 mb-5">
            <div className="row p-5">
                <div className="col">
                    <h3 className="mb-3">{title}</h3>
                    <p>{text}</p>
                </div>
                <div className="col">
                    <img src={imgSrc} alt="" />
                </div>
            </div>
        </div>
    );
}