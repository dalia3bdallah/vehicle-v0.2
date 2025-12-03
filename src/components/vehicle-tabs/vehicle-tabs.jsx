import { NavLink } from "react-router-dom";
import "./vehicle-tabs.css";
import TabLive, { Rides, Contracts, Transactions, History, Updates, TabSchedule } from '../tabs-test-content/tabs-test-content.jsx';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Overview from "../overveiw/overview";


export default function VehicleTabs() {
    return (
<>
  <Tabs defaultValue="Overview">
                    <div className="base-nav">
                        <TabsList className="tabs-list">
                            <TabsTrigger value="Overview" className="tab-item">Overview</TabsTrigger>
                            <TabsTrigger value="Live" className="tab-item">Live</TabsTrigger>
                            <TabsTrigger value="Schedule" className="tab-item">Schedule</TabsTrigger>
                            <TabsTrigger value="Rides" className="tab-item">Rides</TabsTrigger>
                            <TabsTrigger value="Contracts" className="tab-item">Contracts</TabsTrigger>
                            <TabsTrigger value="Transactions" className="tab-item">Transactions</TabsTrigger>
                            <TabsTrigger value="Fuel History" className="tab-item">Fuel History</TabsTrigger>
                            <TabsTrigger value="Updates Logs" className="tab-item">Updates Logs</TabsTrigger>
                        </TabsList>
                    </div>
                    <div className="content-area">
                        <TabsContent value="Overview">
                            <Overview />
                        </TabsContent>
                        <TabsContent value="Live">
                            <TabSchedule />
                        </TabsContent>

                        <TabsContent value="Schedule">
                            <TabLive />
                        </TabsContent>

                        <TabsContent value="Rides">
                            <Rides />
                        </TabsContent>

                        <TabsContent value="Contracts">
                            <Contracts />
                        </TabsContent>

                        <TabsContent value="Transactions">
                            <Transactions />
                        </TabsContent>

                        <TabsContent value="Fuel History">
                            <History />
                        </TabsContent>

                        <TabsContent value="Updates Logs">
                            <Updates />
                        </TabsContent>
                    </div>

                </Tabs>
</>
    )
}

