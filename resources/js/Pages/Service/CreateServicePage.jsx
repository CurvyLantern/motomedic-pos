import ServiceDrawer from "@/Components/service/ServiceDrawer";
import { ServiceFieldWrapper } from "@/Components/service/ServiceFields";
import { MechanicTable } from "@/Components/tables/MechanicTable";
import WithCustomerLayout from "@/Layouts/WithCustomerLayout";
import { Grid, SimpleGrid } from "@mantine/core";

const Service = () => {
    return (
        <>
            <WithCustomerLayout>
                <ServiceFieldWrapper />
                <ServiceDrawer />
            </WithCustomerLayout>
        </>
    );
};

export default Service;
