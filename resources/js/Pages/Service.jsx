import ServiceDrawer from "@/Components/drawers/ServiceDrawer";
import { MechanicTable } from "@/Components/tables/MechanicTable";
import PackageTransferList from "@/Components/transfers/PackageTransferList";
import { SimpleTable } from "@/Components/tables/SimpleTable";
import {
    Group,
    SimpleGrid,
    Paper,
    TextInput,
    NumberInput,
    Textarea,
    Select,
    Text,
    Stack,
    createStyles,
    Grid,
    ScrollArea,
    TransferList,
    Checkbox,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { useState } from "react";
const customerFormFields = {
    userName: {
        label: "Name of customer",
        ph: "Please enter customer name",
        fieldType: "text",
        required: true,
    },
    userPhone: {
        label: "Phone Number",
        ph: "Please enter customer name",

        fieldType: "number",
        required: true,
    },
    userEmail: {
        label: "Email of customer",
        ph: "Please enter customer name",
        fieldType: "email",
        required: false,
    },
    bikeInfo: {
        ph: "Please enter customer name",
        label: "Bike Info",
        fieldType: "textbox",
        required: true,
    },
    checkCustomer: {
        ph: "Please enter customer name",
        label: "Find Customer",
        fieldType: "select",
        required: false,
        options: [
            { value: "lavlu", label: "Lavlu Mia" },
            { value: "mohsin", label: "Mohsin Mia 420" },
            { value: "chakladar", label: "Chakladar 69" },
            { value: "ronju", label: "Ronju Komlachor" },
        ],
    },
    userAddress: {
        ph: "Please enter customer name",
        label: "Address of customer",
        fieldType: "textbox",
        required: true,
    },
    userService: {
        ph: "Your Service Serial",
        label: "Service Serial",
        fieldType: "text",
        required: true,
    },
    userJob: {
        ph: "Job number",
        label: "Job No",
        fieldType: "text",
        required: true,
    },
    userProblem: {
        ph: "Please enter the job details",
        label: "Problem Details",
        fieldType: "textbox",
        required: true,
    },
    userPackage: {
        ph: "Please select a package from the list",
        label: "Available Packages",
        fieldType: "select",
        required: true,
        data: [
            {
                label: "Basic Package",
                value: "pkg-basic",
            },
            {
                label: "Tire Change",
                value: "pkg-tire-change",
            },
            {
                label: "Paint Job",
                value: "pkg-paint-job",
            },
        ],
    },
};

const useStyles = createStyles((theme) => ({
    paper: {
        backgroundColor: theme.fn.lighten(theme.colors.primary.background, 0.9),
        height: "100%",
    },
    title: {
        fontWeight: 600,
        fontSize: theme.fontSizes.lg,
        paddingTop: theme.spacing.lg,
        paddingBottom: theme.spacing.lg,
    },
}));

const MyPaper = ({ title, children }) => {
    const { classes, cx } = useStyles();

    return (
        <Paper className={cx(classes.paper)} shadow="xs" radius="xs" p="sm">
            <Text component="p" className={cx(classes.title)}>
                {title}
            </Text>
            {children}
        </Paper>
    );
};

const Service = () => {
    return (
        <>
            <Stack>
                <Grid>
                    <Grid.Col span={8}>
                        <MyPaper title="User Info">
                            <SimpleGrid
                                cols={4}
                                breakpoints={[{ maxWidth: "md", cols: 2 }]}
                            >
                                {/* name */}
                                <TextInput
                                    placeholder={customerFormFields.userName.ph}
                                    label={customerFormFields.userName.label}
                                    withAsterisk={
                                        customerFormFields.userName.required
                                    }
                                />
                                {/* number */}
                                <NumberInput
                                    placeholder={
                                        customerFormFields.userPhone.ph
                                    }
                                    label={customerFormFields.userPhone.label}
                                    withAsterisk={
                                        customerFormFields.userPhone.required
                                    }
                                    hideControls
                                />
                                {/* email */}
                                <TextInput
                                    placeholder={
                                        customerFormFields.userEmail.ph
                                    }
                                    label={customerFormFields.userEmail.label}
                                    withAsterisk={
                                        customerFormFields.userEmail.required
                                    }
                                />
                                {/* checkCustomer */}
                                <Select
                                    placeholder={
                                        customerFormFields.checkCustomer.ph
                                    }
                                    label={
                                        customerFormFields.checkCustomer.label
                                    }
                                    withAsterisk={
                                        customerFormFields.checkCustomer
                                            .required
                                    }
                                    data={
                                        customerFormFields.checkCustomer.options
                                    }
                                />
                                {/* address */}
                                <Textarea
                                    placeholder={
                                        customerFormFields.userAddress.ph
                                    }
                                    label={customerFormFields.userAddress.label}
                                    withAsterisk={
                                        customerFormFields.userAddress.required
                                    }
                                />
                                <Stack>
                                    {/* bikeInfo */}
                                    <Textarea
                                        placeholder={
                                            customerFormFields.bikeInfo.ph
                                        }
                                        label={
                                            customerFormFields.bikeInfo.label
                                        }
                                        withAsterisk={
                                            customerFormFields.bikeInfo.required
                                        }
                                    />
                                </Stack>
                            </SimpleGrid>
                        </MyPaper>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <MyPaper title="Customer Profile">
                            <p>Name : Md Mohsin Ali</p>
                            <p>Phone : 01600000</p>
                            <p>Email : not available</p>
                            <p>Address : 13/b bla bla road, demra dhaka</p>
                        </MyPaper>
                    </Grid.Col>
                </Grid>

                <MyPaper title="Service Info">
                    <SimpleGrid cols={2}>
                        {/* Service */}
                        <TextInput
                            placeholder={customerFormFields.userService.ph}
                            label={customerFormFields.userService.label}
                            withAsterisk={
                                customerFormFields.userService.required
                            }
                        />
                        {/* name */}
                        <NumberInput
                            placeholder={customerFormFields.userJob.ph}
                            label={customerFormFields.userJob.label}
                            withAsterisk={customerFormFields.userJob.required}
                            hideControls
                        />
                    </SimpleGrid>
                    {/* name */}
                    <Textarea
                        placeholder={customerFormFields.userProblem.ph}
                        label={customerFormFields.userProblem.label}
                        withAsterisk={customerFormFields.userProblem.required}
                    />
                </MyPaper>
                <MyPaper title="Item Lists">
                    <SimpleGrid cols={1}>
                        {/* Service */}
                        <Select
                            placeholder={customerFormFields.userPackage.ph}
                            label={customerFormFields.userPackage.label}
                            withAsterisk={
                                customerFormFields.userPackage.required
                            }
                            data={customerFormFields.userPackage.data ?? []}
                        />
                        <PackageTransferList />
                    </SimpleGrid>
                </MyPaper>
                <MyPaper title="Mechanics">
                    <MechanicTable />
                </MyPaper>
            </Stack>
            <ServiceDrawer />
        </>
    );
};

export default Service;
