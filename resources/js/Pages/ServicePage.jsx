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
    MultiSelect,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { useState } from "react";
import {
    ServiceFieldWrapper,
    ServiceMechanics,
    UserInfo,
    UserItems,
    UserService,
} from "@/Components/service/ServiceFields";
import ServiceDrawer from "@/Components/service/ServiceDrawer";
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
        ph: "service type",
        label: "Service Type",
        fieldType: "select",
        required: true,
        serviceTypes: [
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
            { value: "riot", label: "Riot" },
            { value: "next", label: "Next.js" },
            { value: "blitz", label: "Blitz.js" },
        ],
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
            <ServiceFieldWrapper>
                <UserInfo />

                <UserService />
                <UserItems />
                <ServiceDrawer />
                <MechanicTable />
            </ServiceFieldWrapper>
            <ServiceDrawer />
        </>
    );
};

export default Service;
