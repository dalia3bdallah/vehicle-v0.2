import DalChart from "./dalchart";
import "./monthlyutilizing.css";



export default function MonthlyUtilizing() {
    return (
        <div className="mine-test">
            <div className="row-">

                <div className="col-8-">
                    <div className="monthly-Utilizing">
                        <div className="card-income">
                            <div className="card-header">
                                <div className="header-title">Monthly Utilizing</div>
                                <div className="header-filter">
                                    <select>
                                        <option>This Fiscal Year</option>
                                        <option>This Fiscal Year 1</option>
                                        <option>This Fiscal Year 2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card-header-2">

                                <div className="col-card">
                                    <div className="block-info">
                                        <div className="block-label">Avg. Monthly Revenue</div>
                                        <div className="block-value">
                                            <span className="amount">250% </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <DalChart />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}