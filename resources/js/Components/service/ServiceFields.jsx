import { MechanicTable } from "@/Components/tables/MechanicTable";
import PackageTransferList from "@/Components/transfers/PackageTransferList";
import {
    Grid,
    MultiSelect,
    NumberInput,
    Select,
    SimpleGrid,
    Stack,
    TextInput,
    Textarea,
} from "@mantine/core";
import ServiceSection from "./ServiceSection";
import { serviceData } from "./serviceData.mock";

export const UserInfo = () => {
    return (
        <Grid>
            <Grid.Col span={8}>
                <ServiceSection title="User Info">
                    <SimpleGrid
                        cols={4}
                        breakpoints={[{ maxWidth: "md", cols: 2 }]}
                    >
                        {/* name */}
                        <TextInput
                            placeholder={serviceData.userName.ph}
                            label={serviceData.userName.label}
                            withAsterisk={serviceData.userName.required}
                        />
                        {/* number */}
                        <NumberInput
                            placeholder={serviceData.userPhone.ph}
                            label={serviceData.userPhone.label}
                            withAsterisk={serviceData.userPhone.required}
                            hideControls
                        />
                        {/* email */}
                        <TextInput
                            placeholder={serviceData.userEmail.ph}
                            label={serviceData.userEmail.label}
                            withAsterisk={serviceData.userEmail.required}
                        />
                        {/* checkCustomer */}
                        <Select
                            placeholder={serviceData.checkCustomer.ph}
                            label={serviceData.checkCustomer.label}
                            withAsterisk={serviceData.checkCustomer.required}
                            data={serviceData.checkCustomer.options}
                        />
                        {/* address */}
                        <Textarea
                            placeholder={serviceData.userAddress.ph}
                            label={serviceData.userAddress.label}
                            withAsterisk={serviceData.userAddress.required}
                        />
                        <Stack>
                            {/* bikeInfo */}
                            <Textarea
                                placeholder={serviceData.bikeInfo.ph}
                                label={serviceData.bikeInfo.label}
                                withAsterisk={serviceData.bikeInfo.required}
                            />
                        </Stack>
                    </SimpleGrid>
                </ServiceSection>
            </Grid.Col>
            <Grid.Col span={4}>
                <ServiceSection title="Customer Profile">
                    <p>Name : Md Mohsin Ali</p>
                    <p>Phone : 01600000</p>
                    <p>Email : not available</p>
                    <p>Address : 13/b bla bla road, demra dhaka</p>
                </ServiceSection>
            </Grid.Col>
        </Grid>
    );
};

export const UserService = () => {
    return (
        <ServiceSection title="Service Info">
            <SimpleGrid cols={2}>
                {/* Service */}
                <MultiSelect
                    data={serviceData.userService.serviceTypes}
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
                <Select
                    placeholder={serviceData.userPackage.ph}
                    label={serviceData.userPackage.label}
                    withAsterisk={serviceData.userPackage.required}
                    data={serviceData.userPackage.data ?? []}
                />
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
    return <Stack>{children}</Stack>;
};
