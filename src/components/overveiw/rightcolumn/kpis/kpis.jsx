import "./kpis.css"
import banknoteArrowDown from "/src/assets/imgs/Vehicles/banknote-arrow-down-1.svg"
import banknoteArrowUp from "/src/assets/imgs/Vehicles/banknote-arrow-up-1.svg"
import fileCheckCorner from "/src/assets/imgs/Vehicles/file-check-corner-2.svg"
import mapPinCheck from "/src/assets/imgs/Vehicles/map-pin-check-1.svg"
import SaudiRiyalSymbol from "/src/assets/imgs/Vehicles/Saudi_Riyal_Symbol-21.svg"

export default function Kpis() {
    return (
        <div className="kpis-cards">
            <div className="row">
                <div className="col-3">
                    <div className="card-item">
                        <div className="icon-kpi">
                            <img src={banknoteArrowDown} />
                        </div>
                        <div className="kpi-info">
                            <div className="kpi-label">Total Income</div>
                            <div className="kpi-value">
                                <span><img className="rs-icon" src={SaudiRiyalSymbol} /></span>
                                <span className="amount">250.235 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card-item">
                        <div className="icon-kpi">
                            <img src={banknoteArrowUp} />
                        </div>
                        <div className="kpi-info">
                            <div className="kpi-label">Total Income</div>
                            <div className="kpi-value">
                                <span><img className="rs-icon" src={SaudiRiyalSymbol}  /></span>
                                <span className="amount">250.235 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card-item">
                        <div className="icon-kpi">
                            <img src={fileCheckCorner} />
                        </div>
                        <div className="kpi-info">
                            <div className="kpi-label">Total Contracts</div>
                            <div className="kpi-value">
                                {/* <span><img className="rs-icon" src={SaudiRiyalSymbol} /></span> */}
                                <span className="amount">250.235 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card-item">
                        <div className="icon-kpi">
                            <img src={mapPinCheck} />
                        </div>
                        <div className="kpi-info">
                            <div className="kpi-label">Total Rides</div>
                            <div className="kpi-value">
                                {/* <span><img className="rs-icon" src="/src/assets/imgs/Vehicles/Saudi_Riyal_Symbol-21.svg" /></span> */}
                                <span className="amount">250.235 </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}