import { SelectCustomerOrEnterInfo } from "@/Components/user/SelectCustomerOrEnter";

const WithCustomerLayout = ({ children }) => {
    return (
        <>
            <SelectCustomerOrEnterInfo />
            {children}
        </>
    );
};

export default WithCustomerLayout;
