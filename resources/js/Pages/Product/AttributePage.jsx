import { Button, Group, Grid, Table, Stack, SimpleGrid } from "@mantine/core";
import BasicSection from "@/Components/sections/BasicSection";
import TextInput from "@/Components/TextInput";
import { useEffect, useRef, useState } from "react";

const AttributePage = () => {
    const [attrs, setAttrs] = useState([]);
    const onEditAttrs = (id) => {};
    const onDeleteAttrs = (id) => {};
    return (
        <>
            <Grid>
                <Grid.Col span={7}>
                    <BasicSection title="All Attributes">
                        <Table withBorder withColumnBorders>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Values</th>
                                    <th style={{ width: "20%" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Attr 1</td>
                                    <td>Attr 1</td>
                                    <td>
                                        <Group>
                                            <Button
                                                compact
                                                onClick={() => {
                                                    onEditAttrs(0);
                                                }}
                                            >
                                                edit
                                            </Button>
                                            <Button
                                                compact
                                                onClick={() => {
                                                    onDeleteAttrs(0);
                                                }}
                                            >
                                                delete
                                            </Button>
                                        </Group>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </BasicSection>
                </Grid.Col>
                <Grid.Col span={5}>
                    <BasicSection title={"Create Attribute"}>
                        <CreateAttributeForm />
                    </BasicSection>
                </Grid.Col>
            </Grid>
        </>
    );
};
const CreateAttributeForm = () => {
    const [subAttrs, setSubAttrs] = useState([]);
    const subIdRef = useRef(0);
    const onCreateSubAttr = () => {
        setSubAttrs((p) => [
            ...p,
            { id: subIdRef.current++, name: "name", value: "value" },
        ]);
    };
    const onReset = () => {
        const confirm = window.confirm("Are you sure ?");
        if (confirm) {
            setSubAttrs([]);
        }
    };
    const onDeleteSubField = (id) => {
        setSubAttrs((p) => {
            return p.filter((item) => item.id !== id);
        });
    };
    const onSubFieldChange = ({
        value = "",
        id = 0,
        propertyName = "name",
    }) => {
        setSubAttrs((p) => {
            // console.log(p[idx], "nasim");
            // console.log({ idx, propertyName, value });
            // console.log(p[idx][propertyName], "nasim");
            // p[idx][propertyName] = value;
            const _subAttr = p.find((item) => item.id === id);
            console.log(_subAttr, "subAttr");
            if (_subAttr) {
                _subAttr[propertyName] = value;
            }
            return [...p];
        });
    };
    useEffect(() => {
        console.log(subAttrs, "subAttrs");
    }, [subAttrs]);
    return (
        <form>
            <Stack>
                <TextInput label="Attribute Name" />
                <Button
                    onClick={() => {
                        onCreateSubAttr();
                    }}
                >
                    Add Sub Attribute
                </Button>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                            <th style={{ width: "10%" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subAttrs.length <= 0 ? (
                            <tr>
                                <td
                                    colSpan={3}
                                    style={{
                                        textAlign: "center",
                                        verticalAlign: "middle",
                                    }}
                                >
                                    No Sub Attributes
                                </td>
                            </tr>
                        ) : (
                            subAttrs.map((attr) => {
                                return (
                                    <tr key={attr.id}>
                                        <td>
                                            <TextInput
                                                onChange={(v) => {
                                                    onSubFieldChange({
                                                        value: v.currentTarget
                                                            .value,
                                                        id: attr.id,
                                                        propertyName: "name",
                                                    });
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <TextInput
                                                onChange={(v) => {
                                                    onSubFieldChange({
                                                        value: v.currentTarget
                                                            .value,
                                                        id: attr.id,
                                                        propertyName: "value",
                                                    });
                                                }}
                                            />
                                        </td>
                                        <td>
                                            <Button
                                                onClick={() => {
                                                    onDeleteSubField(attr.id);
                                                }}
                                                compact
                                                size={"xs"}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </Table>

                <SimpleGrid cols={2}>
                    <Button disabled={subAttrs.length <= 0}>Save</Button>
                    <Button
                        disabled={subAttrs.length <= 0}
                        onClick={() => {
                            onReset();
                        }}
                    >
                        Reset
                    </Button>
                </SimpleGrid>
            </Stack>
        </form>
    );
};

export default AttributePage;
