import TextInput from "@/Components/TextInput";
import { Colors } from "@/Components/fields/colors.mock";
import {
    Box,
    Button,
    ColorInput,
    Group,
    Stack,
    Table,
    createStyles,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import colorFn from "color";
import { TbEdit, TbTrash } from "react-icons/tb";
const useTableStyles = createStyles({
    th: {
        textTransform: "uppercase",
    },
});
const ColorPage = () => {
    const { classes } = useTableStyles();
    const tRows = Colors.map((color) => {
        const { label, hex } = color;

        const c = colorFn(`#${hex}`);
        const rgb = c.rgb().string();
        return (
            <tr
                key={label}
                style={{
                    backgroundColor: `#${hex}`,
                    color: c.negate(),
                }}
            >
                <td style={{ textTransform: "capitalize" }}>{label}</td>
                <td>#{hex}</td>
                <td>{rgb}</td>
                <td>
                    <Box
                        sx={{
                            backgroundColor: `#${color.hex}`,
                            height: 30,
                            width: 30,
                            border: "1px solid #cacaca",
                            borderRadius: "50%",
                            boxShadow: "0 0 5px #00000033",
                        }}
                    ></Box>
                </td>
                <td>
                    <Group position="center" align="center">
                        <EditColorModal color={color} />
                        <DeleteColorAction color={color} />
                    </Group>
                </td>
            </tr>
        );
    });
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th className={classes.th}>Color name</th>
                        <th className={classes.th}>Hex</th>
                        <th className={classes.th}>RGB</th>
                        <th className={classes.th}>Color</th>
                        <th className={classes.th}> Actions</th>
                    </tr>
                </thead>
                <tbody>{tRows}</tbody>
            </Table>
        </div>
    );
};

const DeleteColorAction = ({ color }) => {
    return (
        <Button
            onClick={() => {
                // show();
            }}
            size="xs"
            compact
            w={30}
            h={30}
            radius={"100%"}
        >
            {/* Edit */}
            <TbTrash />
        </Button>
    );
};

const EditColorModal = ({ color }) => {
    const show = () => {
        modals.open({
            title: "Edit This Color",
            children: <EditColor color={color} />,
        });
    };
    return (
        <Button
            onClick={() => {
                show();
            }}
            size="xs"
            compact
            w={30}
            h={30}
            radius={"100%"}
        >
            {/* Edit */}
            <TbEdit size={20} />
        </Button>
    );
};

const EditColor = ({ color }) => {
    console.log(color.hex, "hex");
    const form = useForm({
        initialValues: {
            colorName: color.label,
            hex: `#${color.hex}`,
        },
        validate: () => {
            return null;
        },
    });
    const submitForm = (values) => {
        console.log(values, "color fiels");
    };
    return (
        <form onSubmit={form.onSubmit(submitForm)}>
            <Stack>
                {/*
                    name
                    color setter
                    action
                */}
                <TextInput
                    {...form.getInputProps("colorName")}
                    label="Color Name"
                />
                <ColorInput
                    placeholder="Pick color"
                    label="Your favorite color"
                    {...form.getInputProps("hex")}
                />
                <div>
                    <Button>Confirm</Button>
                </div>
            </Stack>
        </form>
    );
};

export default ColorPage;
