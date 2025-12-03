import "./insurancecard.css";
import Rajhi from "/src/assets/imgs/Rajhi.webp";

export default function InsuranceCard() {
    return (
        <div className="insurance-card">
            <div className="card-row mb-[25px]">
                <div className="card-column">
                    <div className="subtitle">Al Rajhi Takaful</div>
                    <div className="ins-title">Insurance Card</div>
                </div>
                <div className="insurance-image">
                    <img src={Rajhi} alt="Insurance Card" />
                </div>
            </div>

            <div className="card-row-2">
                <div className="policy-number">
                    <div className="title">Policy Number </div>
                    <div className="number">1234 5678 9012 3456</div>
                </div>
                <div className="policy-number">
                    <div className="title">Expiration date </div>
                    <div className="number">26 Mar. 2027</div>
                </div>

            </div>


        </div>
    )
}