import { useSelector } from "react-redux";
import BasicSection from "../sections/BasicSection";

export const SelectedUserInfo = () => {
    const selectedCustomer = useSelector(
        (state) => state.customer.selectedCustomer
    );

    console.log({ selectedCustomer });

    return (
        <BasicSection title="Customer Profile">
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
        </BasicSection>
    );
};
