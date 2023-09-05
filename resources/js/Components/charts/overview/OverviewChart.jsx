import BasicSection from "@/Components/sections/BasicSection";
import { Center, SimpleGrid } from "@mantine/core";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Legend,
    Line,
} from "recharts";
import {
    sub,
    format,
    parseISO,
    addMonths,
    eachMonthOfInterval,
    subYears,
} from "date-fns";

function getDateOfPast(yearsAgo) {
    const currentDate = new Date();
    const pastDate = subYears(currentDate, yearsAgo);
    return pastDate;
}
const allMonths = eachMonthOfInterval({
    end: new Date(),
    start: getDateOfPast(2),
}).map((date) => format(date, "MMMM-yyyy"));
console.log({ allMonths });

const allSaleData = allMonths.map((date) => ({
    date: date,
    sold: Math.floor(Math.random() * 30000) + 20000,
    profit: Math.floor(Math.random() * 10000) + 30000,
}));

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: -1000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 500,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: -2000,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: -250,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const gradientOffset = () => {
    const dataMax = Math.max(...allSaleData.map((i) => i.sold));
    const dataMin = Math.min(...allSaleData.map((i) => i.sold));

    if (dataMax <= 0) {
        return 0;
    }
    if (dataMin >= 0) {
        return 1;
    }

    return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export const OverviewChart = () => {
    return (
        <BasicSection title="Company Overview">
            <SimpleGrid cols={1} style={{ position: "relative" }}>
                <Center>
                    <ResponsiveContainer width="90%" aspect={16 / 9}>
                        <LineChart
                            style={{
                                overflow: "visible",
                            }}
                            data={allSaleData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                padding={{ left: 20, right: 20 }}
                                height={150}
                                angle={-60}
                                textAnchor="end"
                                dataKey="date"
                            />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="sold"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="profit"
                                stroke="#82ca9d"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Center>
                <Center>
                    <ResponsiveContainer width="90%" aspect={16 / 9}>
                        <AreaChart
                            style={{
                                overflow: "visible",
                            }}
                            data={allSaleData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                height={150}
                                angle={-60}
                                textAnchor="end"
                                dataKey="date"
                            />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area
                                type="monotone"
                                dataKey="sold"
                                fill="#ff00ee"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Area
                                type="monotone"
                                dataKey="profit"
                                stroke="#82ca9d"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </Center>
            </SimpleGrid>

            {/* <ResponsiveContainer width="100%" aspect={16 / 9}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <defs>
                        <linearGradient
                            id="splitColor"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset={off}
                                stopColor="green"
                                stopOpacity={1}
                            />
                            <stop
                                offset={off}
                                stopColor="red"
                                stopOpacity={1}
                            />
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#000"
                        fill="url(#splitColor)"
                    />
                </AreaChart>
            </ResponsiveContainer> */}
        </BasicSection>
    );
};
