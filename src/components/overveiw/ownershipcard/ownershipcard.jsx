import "./ownershipcard.css"
import file from "/src/assets/imgs/file.png"

export default function OwnershipCard() {
    return (
        <div className="ownership-card">
            <div>
                <div className="v-card-title">Ownership Card </div>
                <div className="v-card-content">
                    <div className="vehicle-details-row">
                        <div className="title-th">Registration Number</div>
                        <div className="data-td">Company Owned</div>
                    </div>
                    <div className="vehicle-details-row">
                        <div className="title-th">Purchase Date</div>
                        <div className="data-td">26 Mar. 2023</div>
                    </div>
                    <div className="vehicle-details-row">
                        <div className="title-th">File</div>
                        <div className="data-td">
                            <div className="file-details">
                                <div className="file-name">98766dydg.jpg</div>
                                <div className="view-link"><button className="view-button underline">View</button></div>
                            </div>
                            <div className="view-icon">
                                <img src={file} alt="Download Icon" className="download-icon" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}