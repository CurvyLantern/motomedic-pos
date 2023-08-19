import { useMantineReactTable } from "mantine-react-table";

// export type CustomTableOptions<TData extends Record<string, any> = {}> = Omit<
// 	MRT_TableOptions<TData>,
// 	| 'manualPagination'
// 	| 'enablePagination'
// 	| 'mantinePaginationProps'
// 	| 'paginationDisplayMode'
// 	| 'mantineTableProps.align'
// 	| 'mantinePaperProps'
// 	| 'initialState.density'
// >;

export const useCustomTable = (tableOptions) => {
    const obj = Object.assign(
        {
            paginationDisplayMode: "pages",
            // filters
            manualFiltering: true,
            // styles
            mantineTableProps: {
                align: "center",
            },
            positionActionsColumn: "last",
            mantinePaperProps: {
                shadow: "0",
                radius: "md",
                p: "md",
                withBorder: false,
            },
            displayColumnDefOptions: {
                "mrt-row-actions": {
                    size: 200, //make actions column wider
                },
            },
            mantineFilterTextInputProps: {
                sx: { borderBottom: "unset", marginTop: "8px" },
                variant: "filled",
            },
            mantineFilterSelectProps: {
                sx: { borderBottom: "unset", marginTop: "8px" },
                variant: "filled",
            },
            // features
            enableColumnActions: false,
            enableDensityToggle: true,
            enableFullScreenToggle: false,
            enableHiding: true,
            enablePinning: false,
            // states
            initialState: {
                density: "md",
            },
            columns: [],
            data: [],
        },
        tableOptions
    );
    return useMantineReactTable(obj);
};
