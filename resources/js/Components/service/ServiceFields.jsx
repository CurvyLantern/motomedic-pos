import { MechanicTable } from "@/Components/tables/MechanicTable";
import PackageTransferList from "@/Components/transfers/PackageTransferList";
import {
    Grid,
    MultiSelect,
    NumberInput,
    Select,
    SimpleGrid,
    Stack,
    Tabs,
    TextInput,
    Textarea,
    useMantineTheme,
} from "@mantine/core";
import ServiceSection from "./ServiceSection";
import { serviceData } from "./serviceData.mock";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerByIdOrValue } from "@/Store/Slices/CustomerSlice";

export const SelectCustomerOrEnterInfo = () => {
    const selectPanel = "selectUser";
    const manualPanel = "createUser";

    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customer.customers);
    const updateCustomerSelection = (customerFieldValue) => {
        // dispatch(updateCustomerByIdOrValue(" aksjdklajdkljaksld "));
        dispatch(
            updateCustomerByIdOrValue({
                id: undefined,
                value: customerFieldValue,
            })
        );
    };
    return (
        <ServiceSection
            title={"Select customer from database or enter manually"}
        >
            <Tabs defaultValue={selectPanel} variant="pills">
                <Stack>
                    <Tabs.List>
                        <Tabs.Tab
                            value={selectPanel}
                            sx={{
                                textTransform: "uppercase",
                            }}
                        >
                            Select User
                        </Tabs.Tab>
                        <Tabs.Tab
                            value={manualPanel}
                            sx={{
                                textTransform: "uppercase",
                            }}
                        >
                            Create User
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value={selectPanel}>
                        <Select
                            onChange={updateCustomerSelection}
                            label="Select Customer from database"
                            data={customers}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel value={manualPanel}>
                        <SimpleGrid
                            cols={1}
                            breakpoints={[
                                { minWidth: "md", cols: 2 },
                                { minWidth: "lg", cols: 3 },
                            ]}
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
                                withAsterisk={
                                    serviceData.checkCustomer.required
                                }
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
                    </Tabs.Panel>
                </Stack>
            </Tabs>
        </ServiceSection>
    );
};
export const CustomerInfo = () => {
    const selectedCustomer = useSelector(
        (state) => state.customer.selectedCustomer
    );

    console.log({ selectedCustomer });

    return (
        <ServiceSection title="Customer Profile">
            {selectedCustomer ? (
                <>
                    <p>Name : {selectedCustomer.name}</p>
                    <p>Phone : {selectedCustomer.phone}</p>
                    <p>Email : {selectedCustomer.email}</p>
                    <p>Address : {selectedCustomer.address}</p>
                </>
            ) : (
                <div>No customer selected</div>
            )}
        </ServiceSection>
    );
};
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
                    <SelectCustomerOrEnterInfo />

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
            <Grid.Col span={rightColSize}>
                <Stack>
                    <CustomerInfo />
                </Stack>
            </Grid.Col>
        </Grid>
    );
};
