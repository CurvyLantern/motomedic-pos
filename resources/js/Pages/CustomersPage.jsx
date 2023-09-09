import CustomersTable from "@/Components/tables/CustomersTable";
import { useQuery } from "@tanstack/react-query";

const CustomersPage = () => {
    return (
        <div>
            <CustomersTable />
        </div>
    );
};

export default CustomersPage;
