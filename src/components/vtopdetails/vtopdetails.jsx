
import "./vtopdetails.css";
import driverAvatar from "/src/assets/imgs/2.avif";

export default function VTopDetails() {

    function toArabicNumbers(num) {
        return num.toString().replace(/[0-9]/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
    }

    return (
        <div className="v-top-details">
            <div className="v-d-block">
                <div className="block-title">Chassis Number</div>
                <div className="block-value">1HGCM82633A123456</div>
            </div>

            <div className="v-d-block">
                <div className="block-title">Plate Number</div>
                <div className="block-value">
                    <div className="plate-number-card">
                        <div className="row-p ar">
                            <div className="plate-number-value">ح ر س</div>
                            <div className="plate-state">{toArabicNumbers(5100)}</div>
                        </div>
                        <div className="row-p en">
                            <div className="plate-number-value">H R S</div>
                            <div className="plate-state">5100</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="v-d-block">
                <div className="block-title">Driver Assigned</div>
                <div className="block-value">
                    <div className="driver-info-card">
                        <div className="row-p ">
                            <div className="driver-img">
                                <img src={driverAvatar} alt="driver-avatar" className="driver-avatar" />
                            </div>
                            <div className="driver-details">
                                <div className="driver-name">Abdallah Bin Nasser</div>
                                <div className="driver-number">+966 56 896 6230</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="v-d-block">
                <div className="block-title">Authorized To</div>
                <div className="block-value">
                    <div className="driver-info-card">
                        <div className="row-p ">
                            --
                        </div>
                    </div>
                </div>
            </div>

            <div className="v-d-block">
                <div className="block-title">Tracking Device</div>
                <div className="block-value">
                    <div className="driver-info-card">
                        <div className="row-p ">
                            --
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
