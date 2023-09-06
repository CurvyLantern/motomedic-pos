import { OrderSummaryChart } from "@/Components/charts/order/OrderSummaryChart";
import { OverviewChart } from "@/Components/charts/overview/OverviewChart";
import { ProductSellChart } from "@/Components/charts/product/ProductSellChart";
import { StatsCell } from "@/Components/stats/StatsCell/index";
import { Head } from "@inertiajs/react";
import { Group, SimpleGrid, Stack, Tabs, Grid } from "@mantine/core";

import { TbPhoto, TbMessageCircle, TbSettings } from "react-icons/tb";
import { Image, AspectRatio } from "@mantine/core";
import primaryBannerImg from "@/assets/banners/banner1.jpg";
import BannerImgSmall from "@/assets/banners/motomedic-banner.jpg";
const mock = {
    data: [
        {
            title: "Revenue",
            value: "bdt 13000",
            diff: 34,
        },
        {
            title: "Profit",
            value: "bdt 4535",
            diff: -13,
        },
        {
            title: "Coupons usage",
            value: "7",
            diff: 18,
        },
        {
            title: "Product sold",
            value: "12",
            diff: 18,
        },
    ],
};

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head>
                <title>MotoMedic</title>
                <meta name="description" content="pos for motomedic" />
            </Head>
            <Stack spacing="xl">
                <Tabs variant="outline" defaultValue="overview">
                    <Tabs.List>
                        <Tabs.Tab
                            value="overview"
                            icon={<TbPhoto size="0.8rem" />}
                        >
                            Overview
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="reports"
                            icon={<TbSettings size="0.8rem" />}
                        >
                            Reports
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="overview" pt="xs">
                        <Stack>
                            <Grid>
                                <Grid.Col
                                    span={12}
                                    md={6}
                                    lg={7}
                                    orderLg={0}
                                    order={1}
                                    sx={{
                                        display: "flex",

                                    }}
                                >
                                    <SimpleGrid
                                        sx={{
                                            flex: 1,
                                        }}
                                        cols={1}
                                        breakpoints={[
                                            {
                                                cols: 2,
                                                minWidth: "sm",
                                            },
                                            {
                                                cols: 2,
                                                minWidth: "lg",
                                            },
                                        ]}
                                    >
                                        {mock.data.map((d, dIdx) => {
                                            return (
                                                <StatsCell
                                                    diff={d.diff}
                                                    title={d.title}
                                                    value={d.value}
                                                    key={dIdx}
                                                />
                                            );
                                        })}
                                    </SimpleGrid>
                                </Grid.Col>
                                <Grid.Col
                                    span={12}
                                    md={6}
                                    lg={5}
                                    order={0}
                                    orderLg={1}
                                >
                                    <Image
                                        fit="contain"
                                        sx={{
                                            width: "100%",
                                        }}
                                        radius={"md"}
                                        src={BannerImgSmall}
                                        alt="primary banner of motomedic"
                                    />
                                </Grid.Col>
                            </Grid>

                            <SimpleGrid
                                cols={1}
                                breakpoints={[{ minWidth: "md", cols: 2 }]}
                            >
                                <ProductSellChart />
                                <OrderSummaryChart />
                            </SimpleGrid>
                        </Stack>
                    </Tabs.Panel>
                    <Tabs.Panel value="reports" pt="xs">
                        <Stack>
                            <OverviewChart />
                        </Stack>
                    </Tabs.Panel>
                </Tabs>

                <SimpleGrid cols={1}>
                    <Image
                        fit="contain"
                        sx={{
                            width: "100%",
                        }}
                        radius={"md"}
                        src={primaryBannerImg}
                        alt="primary banner of motomedic"
                    />
                </SimpleGrid>
            </Stack>
            {/* <SimpleTable />
            <PaginationTable /> */}
        </>
    );
}
