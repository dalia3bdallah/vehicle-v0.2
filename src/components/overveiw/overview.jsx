import CarCard from "./carcard/carcard";
import InsuranceCard from "./insurancecard/insurancecard";
import Istmara from "./istmara/istmara";
import "./overview.css";
import OwnershipCard from "./ownershipcard/ownershipcard";
import IncomeExpenses from "./rightcolumn/incomeexpenses/incomeexpenses";
import Kpis from "./rightcolumn/kpis/kpis";
import MonthlyUtilizing from "./rightcolumn/monthlyutilizing/monthlyutilizing";

export default function Overview() {
    return (
        <div className="overview-section">
            <div className="row">

                <div className="col-4">
                    <CarCard />
                    <InsuranceCard />
                    <Istmara />
                    <OwnershipCard />


                </div>
                <div className="col-8">
                    <div className="right-column">
                        <Kpis />
                        <IncomeExpenses />
                        <MonthlyUtilizing />
                    </div>
                </div>
            </div>

        </div>
        
    )
}