import BasicSection from "@/Components/sections/BasicSection";
import ServiceSection from "@/Components/service/ServiceSection";
import { addType } from "@/Store/Slices/ServiceSlice";
import {
    Box,
    Text,
    Group,
    SimpleGrid,
    Grid,
    TextInput,
    Button,
    Stack,
    Table,
} from "@mantine/core";

import { useForm } from "@mantine/form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateEssentials = () => {
    const dispatch = useDispatch();
    const serviceTypes = useSelector((state) => {
        return state.service.serviceTypes;
    });

    const form = useForm({
        initialValues: {
            typeName: "",
        },
        validate: {
            typeName: (value) =>
                typeof value === "string" && value.length > 0
                    ? null
                    : "Invalid input",
        },
    });
    const createServiceType = () => {};
    const saveServiceType = () => {};
    const hasTypes = Array.isArray(serviceTypes) && serviceTypes.length > 0;

    return (
        <Stack>
            <ServiceSection title="Create Service Types">
                <form
                    onSubmit={form.onSubmit((values) => {
                        console.log({ values });
                        dispatch(
                            addType({
                                label: values.typeName,
                                value: values.typeName.toLowerCase(),
                            })
                        );
                        form.reset("typeName");
                    })}
                >
                    <Stack>
                        <Group>
                            <Button type="button" onClick={createServiceType}>
                                Create Service Types
                            </Button>
                            <Button type="submit">Save</Button>
                        </Group>

                        <Group>
                            <Text>Name of service types :</Text>
                            <TextInput
                                placeholder="give it a good name"
                                {...form.getInputProps("typeName")}
                            />
                        </Group>
                    </Stack>
                </form>
            </ServiceSection>
            <ServiceSection title="All Service Types">
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serviceTypes.map((type, typeIdx) => {
                            return (
                                <tr key={typeIdx}>
                                    <td>{type.label}</td>
                                    <td>{type.value}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </ServiceSection>
        </Stack>
    );
};

export default CreateEssentials;
