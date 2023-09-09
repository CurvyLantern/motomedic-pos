import { ActionIcon, Button, Flex, Text, Tooltip } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconTrash } from "@tabler/icons-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    MantineReactTable,
    // createRow,
    useMantineReactTable,
} from "mantine-react-table";
import { useMemo, useState } from "react";

const CustomersTable = () => {
    const [validationErrors, setValidationErrors] = useState({});
    //keep track of rows that have been edited
    const [editedUsers, setEditedUsers] = useState({});

    //call CREATE hook
    const { mutateAsync: createUser, isLoading: isCreatingUser } =
        useCreateUser();
    //call READ hook

    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageIndex: 0,
        pageSize: 15,
    });

    const {
        data: fetchedUsers = {},
        isError: isLoadingUsersError,
        isFetching: isFetchingUsers,
        isLoading: isLoadingUsers,
    } = useGetUsers({ pageIndex: pageIndex + 1 });

    const pagination = useMemo(() => {
        return {
            pageIndex,
            pageSize,
        };
    }, [pageIndex, pageSize]);

    const customers = fetchedUsers.data ? fetchedUsers.data : [];
    //call UPDATE hook
    const { mutateAsync: updateUsers, isLoading: isUpdatingUser } =
        useUpdateUsers();
    //call DELETE hook
    const { mutateAsync: deleteUser, isLoading: isDeletingUser } =
        useDeleteUser();

    //CREATE action
    const handleCreateUser = async ({ values, exitCreatingMode }) => {
        const newValidationErrors = validateUser(values);
        if (Object.values(newValidationErrors).some((error) => !!error)) {
            setValidationErrors(newValidationErrors);
            return;
        }
        setValidationErrors({});
        await createUser(values);
        exitCreatingMode();
    };

    //UPDATE action
    const handleSaveUsers = async () => {
        if (Object.values(validationErrors).some((error) => !!error)) return;
        await updateUsers(Object.values(editedUsers));
        setEditedUsers({});
    };

    //DELETE action
    const openDeleteConfirmModal = (row) =>
        modals.openConfirmModal({
            title: "Are you sure you want to delete this user?",
            children: (
                <Text>
                    Are you sure you want to delete {row.original.firstName}{" "}
                    {row.original.lastName}? This action cannot be undone.
                </Text>
            ),
            labels: { confirm: "Delete", cancel: "Cancel" },
            confirmProps: { color: "red" },
            onConfirm: () => deleteUser(row.original.id),
        });

    const columns = useMemo(
        () => [
            // {
            //     accessorKey: "id",
            //     header: "Id",
            //     enableEditing: false,
            //     size: 80,
            // },
            {
                accessorKey: "customerName",
                header: "Name",
                mantineEditTextInputProps: ({ cell, row }) => ({
                    type: "text",
                    required: true,
                    error: validationErrors?.[cell.id],
                    //store edited user in state to be saved later
                    onBlur: (event) => {
                        const validationError = !validateRequired(
                            event.currentTarget.value
                        )
                            ? "Required"
                            : undefined;
                        setValidationErrors({
                            ...validationErrors,
                            [cell.id]: validationError,
                        });
                        setEditedUsers({
                            ...editedUsers,
                            [row.id]: row.original,
                        });
                    },
                }),
            },
            {
                accessorKey: "email",
                header: "Email",
                mantineEditTextInputProps: ({ cell, row }) => ({
                    type: "email",
                    required: true,
                    error: validationErrors?.[cell.id],
                    //store edited user in state to be saved later
                    onBlur: (event) => {
                        const validationError = !validateRequired(
                            event.currentTarget.value
                        )
                            ? "Required"
                            : undefined;
                        setValidationErrors({
                            ...validationErrors,
                            [cell.id]: validationError,
                        });
                        setEditedUsers({
                            ...editedUsers,
                            [row.id]: row.original,
                        });
                    },
                }),
            },
            {
                accessorKey: "phone",
                header: "Phone",
                mantineEditTextInputProps: ({ cell, row }) => ({
                    type: "telephone",
                    required: true,
                    error: validationErrors?.[cell.id],
                    //store edited user in state to be saved later
                    onBlur: (event) => {
                        const validationError = !validateEmail(
                            event.currentTarget.value
                        )
                            ? "Invalid Phone number"
                            : undefined;
                        setValidationErrors({
                            ...validationErrors,
                            [cell.id]: validationError,
                        });
                        setEditedUsers({
                            ...editedUsers,
                            [row.id]: row.original,
                        });
                    },
                }),
            },
        ],
        [editedUsers, validationErrors]
    );

    const table = useMantineReactTable({
        columns,
        data: customers,
        createDisplayMode: "row", // ('modal', and 'custom' are also available)
        editDisplayMode: "cell", // ('modal', 'row', 'cell', and 'custom' are also available)
        enableEditing: true,
        enableRowActions: true,
        positionActionsColumn: "last",
        getRowId: (row) => row.id,
        mantineToolbarAlertBannerProps: isLoadingUsersError
            ? {
                  color: "red",
                  children: "Error loading data",
              }
            : undefined,
        mantineTableContainerProps: {
            sx: {
                minHeight: "500px",
            },
        },
        onCreatingRowCancel: () => setValidationErrors({}),
        onCreatingRowSave: handleCreateUser,
        renderRowActions: ({ row }) => (
            <Tooltip label="Delete">
                <ActionIcon
                    color="red"
                    onClick={() => openDeleteConfirmModal(row)}
                >
                    <IconTrash />
                </ActionIcon>
            </Tooltip>
        ),
        renderBottomToolbarCustomActions: () => (
            <Flex align="center" gap="md">
                <Button
                    color="blue"
                    onClick={handleSaveUsers}
                    disabled={
                        Object.keys(editedUsers).length === 0 ||
                        Object.values(validationErrors).some((error) => !!error)
                    }
                    loading={isUpdatingUser}
                >
                    Save
                </Button>
                {Object.values(validationErrors).some((error) => !!error) && (
                    <Text color="red">Fix errors before submitting</Text>
                )}
            </Flex>
        ),
        renderTopToolbarCustomActions: ({ table }) => (
            <Button
                onClick={() => {
                    table.setCreatingRow(true); //simplest way to open the create row modal with no default values
                    //or you can pass in a row object to set default values with the `createRow` helper function
                    // table.setCreatingRow(
                    //   createRow(table, {
                    //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
                    //   }),
                    // );
                }}
            >
                Create New User
            </Button>
        ),
        onPaginationChange: setPagination,
        manualPagination: true,
        // autoResetPageIndex: false,
        pageCount: 100,
        state: {
            pagination,
            isLoading: isLoadingUsers,
            isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
            showAlertBanner: isLoadingUsersError,
            showProgressBars: isFetchingUsers,
        },
        mantinePaginationProps: {
            showRowsPerPage: false,
        },
    });

    return <MantineReactTable table={table} />;
};

//CREATE hook (post new user to api)
function useCreateUser() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (user) => {
            //send api update request here
            await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
            return Promise.resolve();
        },
        //client side optimistic update
        onMutate: (newUserInfo) => {
            queryClient.setQueryData(["get/customers"], (prevUsers) => [
                ...prevUsers,
                {
                    ...newUserInfo,
                    id: (Math.random() + 1).toString(36).substring(7),
                },
            ]);
        },
        // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
    });
}

//READ hook (get users from api)
function useGetUsers({ pageIndex }) {
    return useQuery({
        queryKey: ["get/customers", pageIndex],
        queryFn: () =>
            axios.get(`/v1/all-customer?page=${pageIndex}`).then((res) => {
                return res.data.data.customers;
            }),
        refetchInterval: Infinity,
        refetchIntervalInBackground: Infinity,
    });
}

//UPDATE hook (put users in api)
function useUpdateUsers() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (users) => {
            //send api update request here
            await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
            return Promise.resolve();
        },
        //client side optimistic update
        onMutate: (newUsers) => {
            queryClient.setQueryData(["users"], (prevUsers) =>
                prevUsers?.map((user) => {
                    const newUser = newUsers.find((u) => u.id === user.id);
                    return newUser ? newUser : user;
                })
            );
        },
        // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
    });
}

//DELETE hook (delete user in api)
function useDeleteUser() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (userId) => {
            //send api update request here
            await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
            return Promise.resolve();
        },
        //client side optimistic update
        onMutate: (userId) => {
            queryClient.setQueryData(["users"], (prevUsers) =>
                prevUsers?.filter((user) => user.id !== userId)
            );
        },
        // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
    });
}

const validateEmail = (email) =>
    !!email.length &&
    email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

function validateUser(user) {
    return {
        firstName: !validateRequired(user.firstName)
            ? "First Name is Required"
            : "",
        lastName: !validateRequired(user.lastName)
            ? "Last Name is Required"
            : "",
        email: !validateEmail(user.email) ? "Incorrect Email Format" : "",
    };
}
export default CustomersTable;
