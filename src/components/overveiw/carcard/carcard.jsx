import "./carcard.css"
import carImage from "/src/assets/imgs/car.avif"

export default function CarCard() {
    return (
        <div className="car-card">
            <div className="car-image">
                <img src={carImage} alt="Car" />
            </div>
            <div>
                <div className="v-card-title">Vehicle Details</div>
                <div className="v-card-content">
                    <div className="vehicle-details-row">
                        <div className="title-th">Chassis Number</div>
                        <div className="data-td">JTMBFREV4JJ752103</div>
                    </div>
                    <div className="vehicle-details-row">
                        <div className="title-th">Plate Number</div>
                        <div className="data-td"> sdf 5000</div>
                    </div>
                    <div className="vehicle-details-row">
                        <div className="title-th">brand</div>
                        <div className="data-td">Chevrolet</div>
                    </div>
                    <div className="vehicle-details-row">
                        <div className="title-th">model</div>
                        <div className="data-td">Tahoe</div>
                    </div>
                    <div className="vehicle-details-row">
                        <div className="title-th">year</div>
                        <div className="data-td">2025</div>
                    </div>
                    <div className="vehicle-details-row">
                        <div className="title-th">color</div>
                        <div className="data-td">black</div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

    