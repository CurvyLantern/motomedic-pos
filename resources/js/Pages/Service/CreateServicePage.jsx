import ServiceDrawer from "@/Components/service/ServiceDrawer";
import {
    ServiceFieldWrapper,
    SelectCustomerOrEnterInfo,
    UserItems,
    UserService,
    UserServiceActions,
} from "@/Components/service/ServiceFields";
import { MechanicTable } from "@/Components/tables/MechanicTable";
import { Grid, SimpleGrid } from "@mantine/core";

const Service = () => {
    return (
        <>
            <ServiceFieldWrapper />
            <ServiceDrawer />
        </>
    );
};

export default Service;
