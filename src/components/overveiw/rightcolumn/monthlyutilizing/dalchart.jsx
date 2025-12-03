import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart"
import { MobileIcon } from "@radix-ui/react-icons"
import { Monitor } from "lucide-react"

// import { BarChart } from "lucide-react"
import { Bar, CartesianGrid, XAxis, BarChart, YAxis } from "recharts"



export default function DalChart() {

    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
        { month: "July", desktop: 200, mobile: 130 },
        { month: "Aug", desktop: 205, mobile: 130 },
        { month: "Sept", desktop: 100, mobile: 150 },
        { month: "Oct", desktop: 260, mobile: 160 },
        { month: "Nov", desktop: 220, mobile: 190 },
        { month: "Des", desktop: 220, mobile: 180 },

    ]
    const chartConfig = {

        desktop: {
            label: "Desktop",
            icon: Monitor,
            // A color like 'hsl(220, 98%, 61%)' or 'var(--color-name)'
            color: "#000",
            // OR a theme object with 'light' and 'dark' keys
            theme: {
                light: "#000",
                dark: "#dc2626",
            },
        },
        mobile: {
            label: "Mobile",
            icon: MobileIcon,
            // A color like 'hsl(220, 98%, 61%)' or 'var(--color-name)'
            color: "#20cd71",
            // OR a theme object with 'light' and 'dark' keys
            theme: {
                light: "#20cd71",
                dark: "#dc2626",
            },
        },
    }

    return (
        <>
            <ChartContainer config={chartConfig} className="my-5 min-h-[100px] w-11/12">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} horizontal={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                    />
                        
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={10}   barSize="10"/>
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={10} barSize={10} />
                </BarChart>
            </ChartContainer>
        </>
    )
}