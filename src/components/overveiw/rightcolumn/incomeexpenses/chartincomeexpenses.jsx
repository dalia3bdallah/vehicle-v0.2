import { useState } from "react";
import Chart from "react-apexcharts";

export default function ColumnBasic() {
    const [chartData] = useState({
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 20, 10, 20]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 10, 20, 5],

        }],
        options: {
            legend: {
                show: false,
            },
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false   // ← إخفاء الـ Toolbar
                }
            },
            colors: ["#000", "#EA5154"],
            grid: {
                show: false   // ← إخفاء الشبكة
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '40%',
                    borderRadius: 5,
                    borderRadiusApplication: 'end',
                    colors: {
                        ranges: [
                            {
                                from: 0,
                                to: 20,
                                color: ["#E8E8E8"] // اللون الرمادي للشهور اللي ملهاش داتا
                            }
                        ]
                    }
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: {
                // title: {
                //     text: '$ (thousands)'
                // }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },


    });

    return (
        <div>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                height={350}
            />
        </div>
    );
}
