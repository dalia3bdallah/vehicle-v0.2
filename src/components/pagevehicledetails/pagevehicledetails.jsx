import "./pagevehicledetails.css";
import TopBar from "../topbar/topbar.jsx";
import VehicleTabs from "../vehicle-tabs/vehicle-tabs.jsx";
// import { Outlet } from "react-router-dom";


export default function PageVehicleDetails() {
    return (
        <div className="page v-details">

            <div className="toppart">
                <TopBar />

            </div>

            <div className="base-nav">              
                <VehicleTabs />
            </div>

            {/* <div className="content-area">                
                <Outlet />
            </div> */}


        </div>
    )
}
