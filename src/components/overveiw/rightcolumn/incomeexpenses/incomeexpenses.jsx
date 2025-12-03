import ColumnBasic from "./chartincomeexpenses"
import SaudiRiyalSymbol21 from "/src/assets/imgs/Vehicles/Saudi_Riyal_Symbol-21.svg"

import "./incomeexpenses.css"

export default function IncomeExpenses() {
    return (
        <div className="incomeExpenses"> 
            <div className="card-income">
                <div className="card-header">
                    <div className="header-title">Income & Expenses</div>
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
                                <span><img className="rs-icon" src={SaudiRiyalSymbol21} /></span>
                                <span className="amount">250.235 </span>
                            </div>
                            </div>
                        </div>
                    <div className="col-card">
                    <div className="block-info">
                            <div className="block-label">Avg. Monthly Expencses</div>
                            <div className="block-value">
                                <span><img className="rs-icon" src={SaudiRiyalSymbol21} /></span>
                                <span className="amount">250.235 </span>
                            </div>
                            </div>
                        </div>
                </div>
                <div className="card-content">
                    <ColumnBasic />            
                </div>
            </div>
        </div>
    )
}