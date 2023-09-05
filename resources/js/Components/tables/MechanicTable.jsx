import { Paper, Space, Stack, Title } from "@mantine/core";
import { MantineReactTable } from "mantine-react-table";
import { useMemo } from "react";
import BasicSection from "../sections/BasicSection";

// nested data is ok, see accessorKeys in ColumnDef below
/**
 * An array of person objects.
 * @type {{
 *   name: { firstName: string, lastName: string },
 *   address: string,
 *   city: string,
 *   state: string
 * }[]}
 */
const data = [
    {
        name: {
            firstName: "Montu",
            lastName: "Sheikh",
        },
        availability: "ONLEAVE",
    },
    {
        name: {
            firstName: "Modon",
            lastName: "Mia",
        },
        availability: "AVAILABLE",
    },
    {
        name: {
            firstName: "Ripon",
            lastName: "Hawladar",
        },
        availability: "BUSY",
    },
];

export const MechanicTable = () => {
    //should be memoized or stable
    const columns = useMemo(
        () => [
            {
                accessorKey: "name.firstName", //access nested data with dot notation
                header: "First Name",
            },
            {
                accessorKey: "name.lastName",
                header: "Last Name",
            },
            {
                accessorKey: "availability",
                header: "Availability",
            },
        ],
        []
    );

    return (
        <BasicSection title="Avaiable staffs">
            <Space h="md" />
            <MantineReactTable
                columns={columns}
                data={data}
                initialState={{
                    showGlobalFilter: true,
                }}
                mantinePaperProps={{ shadow: "0", withBorder: false }}
            />
        </BasicSection>
    );
};
