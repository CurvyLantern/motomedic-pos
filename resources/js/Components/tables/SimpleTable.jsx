import { Paper, Space, Stack, Title } from "@mantine/core";
import { MantineReactTable } from "mantine-react-table";
import { useMemo } from "react";

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
            firstName: "Zachary",
            lastName: "Davis",
        },
        address: "261 Battle Ford",
        city: "Columbus",
        state: "Ohio",
    },
    {
        name: {
            firstName: "Robert",
            lastName: "Smith",
        },
        address: "566 Brakus Inlet",
        city: "Westerville",
        state: "West Virginia",
    },
    {
        name: {
            firstName: "Kevin",
            lastName: "Yan",
        },
        address: "7777 Kuhic Knoll",
        city: "South Linda",
        state: "West Virginia",
    },
    {
        name: {
            firstName: "John",
            lastName: "Upton",
        },
        address: "722 Emie Stream",
        city: "Huntington",
        state: "Washington",
    },
    {
        name: {
            firstName: "Nathan",
            lastName: "Harris",
        },
        address: "1 Kuhic Knoll",
        city: "Ohiowa",
        state: "Nebraska",
    },
];

export const SimpleTable = () => {
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
                accessorKey: "address", //normal accessorKey
                header: "Address",
            },
            {
                accessorKey: "city",
                header: "City",
            },
            {
                accessorKey: "state",
                header: "State",
            },
        ],
        []
    );

    return (
        <Paper withBorder radius="md" p="md">
            <Title order={5}>Simple</Title>
            <Space h="md" />
            <MantineReactTable
                columns={columns}
                data={data}
                enableRowDragging
                enableRowOrdering
                enableColumnDragging
                initialState={{
                    showGlobalFilter: true,
                }}
                mantinePaperProps={{ shadow: "0", withBorder: false }}
            />
        </Paper>
    );
};
