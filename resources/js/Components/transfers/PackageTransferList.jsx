import { useState } from "react";
import { TransferList, Checkbox, Group } from "@mantine/core";
import lodash from "lodash";
const storeValues = [
    [
        {
            count: 40,
            value: "wd40",
            label: "WD40",
        },
        {
            count: 50,
            value: "5540",
            label: "md40",
        },
    ],
    [],
];

const initialValues = [
    [
        { value: "wd40", label: "WD40" },
        { value: "paint-black", label: "Paint Black" },
        { value: "sticker", label: "Monster Sticker" },
        { value: "light", label: "Headlights" },
        { value: "backtire", label: "Backtire" },
        { value: "fronttire", label: "Fronttire" },
        { value: "mobil", label: "Mobil" },
    ],
    [],
];
const PackageItemComp = ({ data, selected }) => {
    return (
        <Group>
            <Checkbox
                checked={selected}
                onChange={() => {}}
                tabIndex={-1}
                sx={{ pointerEvents: "none" }}
            />
            <p>hell0</p>
            <p>{data.count}</p>
        </Group>
    );
};
const PackageTransferList = () => {
    const [data, setData] = useState(storeValues);
    const onChange = ([storeChangedData, customerChangedData]) => {
        // for every item in the storeChangedData reduce the count by 1
        // of every matched item in storeState

        const copiedStoreChangedData = lodash.cloneDeep(storeChangedData);
        const copiedCustomerChangeData = lodash.cloneDeep(customerChangedData);

        console.log({ copiedCustomerChangeData, copiedStoreChangedData });

        const storedItemData = data[0];
        const storedCustomerData = data[1];
        // now for every value of copiedStore decrease count of storedChange
        // by 1
        copiedCustomerChangeData.forEach((copyCustomerChangeItem) => {
            for (let i = 0; i < storedItemData.length; i++) {
                const storedItem = storedItemData[i];
                if (copyCustomerChangeItem.value === storedItem.value) {
                    storedItem.count--;
                    break;
                }
            }
        });

        console.log({
            storedItemData,
            storedCustomerData,
        });

        setData([storedItemData, []]);
    };
    return (
        <TransferList
            value={data}
            onChange={onChange}
            searchPlaceholder="Search..."
            nothingFound="Nothing here"
            titles={["Items", "Customer Items"]}
            itemComponent={PackageItemComp}
        />
    );
};

export default PackageTransferList;
