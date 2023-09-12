import { MechanicTable } from "@/Components/tables/MechanicTable";
import PackageTransferList from "@/Components/transfers/PackageTransferList";
import {
    Grid,
    MultiSelect,
    NumberInput,
    SimpleGrid,
    Stack,
    Textarea,
} from "@mantine/core";
import { useSelector } from "react-redux";
import ServiceSection from "./ServiceSection";
import { serviceData } from "./serviceData.mock";


export const UserServiceActions = () => {
    return <ServiceSection title="Actions"></ServiceSection>;
};

export const UserService = () => {
    const serviceTypes = useSelector((state) => state.service.serviceTypes);
    return (
        <ServiceSection title="Service Info">
            <SimpleGrid cols={1} breakpoints={[{ minWidth: "md", cols: 2 }]}>
                {/* Service */}
                <MultiSelect
                    data={serviceTypes}
                    placeholder={serviceData.userService.ph}
                    label={serviceData.userService.label}
                    withAsterisk={serviceData.userService.required}
                />
                {/* name */}
                <NumberInput
                    placeholder={serviceData.userJob.ph}
                    label={serviceData.userJob.label}
                    withAsterisk={serviceData.userJob.required}
                    hideControls
                />
            </SimpleGrid>
            {/* name */}
            <Textarea
                placeholder={serviceData.userProblem.ph}
                label={serviceData.userProblem.label}
                withAsterisk={serviceData.userProblem.required}
            />
        </ServiceSection>
    );
};

export const UserItems = () => {
    return (
        <ServiceSection title="Item Lists">
            <SimpleGrid cols={1}>
                {/* Service */}
                {/* <Select
                    placeholder={serviceData.userPackage.ph}
                    label={serviceData.userPackage.label}
                    withAsterisk={serviceData.userPackage.required}
                    data={serviceData.userPackage.data ?? []}
                /> */}
                <PackageTransferList />
            </SimpleGrid>
        </ServiceSection>
    );
};

export const ServiceMechanics = () => {
    return (
        <ServiceSection title="Mechanics">
            <MechanicTable />
        </ServiceSection>
    );
};
export const ServiceFieldWrapper = ({ children }) => {
    const totalColSize = 12;
    const leftColSize = 7;
    const rightColSize = totalColSize - 7;
    return (
        <Grid>
            <Grid.Col span={leftColSize}>
                <Stack>
                    {/* user enter data */}

                    {/*  service and items*/}
                    <SimpleGrid
                        cols={1}
                        breakpoints={[{ cols: 2, minWidth: "lg" }]}
                    >
                        <UserService />
                        <UserItems />
                    </SimpleGrid>

                    {/* mechanic and actions */}
                    <MechanicTable />
                </Stack>
            </Grid.Col>
        </Grid>
    );
};
