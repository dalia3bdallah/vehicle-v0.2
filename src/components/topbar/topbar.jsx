import "./topbar.css";
import BackBtn from "./backbtn/backbtn";

import DalBreadCrumb from "./breadcrumb/dalbreadcrumb";
import Title from "./title/title";
import VTopDetails from "../vtopdetails/vtopdetails";
// import { CubeIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import optionsHorizontal from "/src/assets/imgs/Vehicles/options-horizontal.svg";
import printer1 from "/src/assets/imgs/Vehicles/printer1.svg";

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="left-part">
                <BackBtn />
            </div>
            <div className="right-part">
            <div className="top-right-part">
                <div className="top-title">
                    <DalBreadCrumb />
                    <Title />
                </div>
                <div className="top-actions">
                    <button className="btn btn-print">
                        {/* <span><CubeIcon /></span> */}
                        <span><img src={printer1} alt="Print Icon" title="Print Icon" /></span>
                        <span> print</span>
                        </button>

                    <button className="btn btn-more-actions">
                        {/* <span><DotsHorizontalIcon /></span> */}
                        <span><img src={optionsHorizontal} alt="More Actions Icon" title="More Actions Icon" /></span>
                    </button>
                    
                </div>
            </div>
            <div className="bottom-right-part">
                <VTopDetails />
            </div>
            </div>
        </div>


    )
}