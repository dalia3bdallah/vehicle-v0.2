import "./backbtn.css";
import { ChevronLeftIcon} from '@radix-ui/react-icons';
import chevronLeft from "/src/assets/imgs/Vehicles/chevron-left2.svg";
export default function BackBtn() {
    return (

        <button className="btn btn-back">
            {/* <span><ChevronLeftIcon /></span>     */}
            <span><img src={chevronLeft} alt="go back"  title="Go Back" /></span>    
        </button>
    )
}