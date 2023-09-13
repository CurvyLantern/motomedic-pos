import { useEffect } from "react";
// import Checkbox from "@/Components/Checkbox";
// import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Center,
    Anchor,
    Button,
    Checkbox,
    Container,
    Group,
    Paper,
    PasswordInput,
    Stack,
    Text,
    TextInput,
    Title,
    Box,
    rem,
} from "@mantine/core";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <>
            <Head title="Forgot Password" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                    {status}
                </div>
            )}

            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: rem(50),
                }}
            >
                <Box>
                    <Title align="center" size="h4" weight={600}>
                        Forgot your password ???
                    </Title>
                    <Text color="dimmed" size="sm" align="center" mt={5}>
                        Worry not, enter your email address below and you will
                        receive password reset instructions in your email?
                    </Text>
                </Box>
                <Box
                    maw={400}
                    w={"90%"}
                    mx={"auto"}
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <form onSubmit={submit}>
                        <Stack>
                            <TextInput
                                required
                                id="email"
                                label="Email"
                                placeholder="Please enter your email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="email"
                                error={errors.email}
                                onChange={(e) =>
                                    setData("email", e.currentTarget.value)
                                }
                            />
                        </Stack>

                        <Group position="apart" mt="xl">
                            <Stack spacing={"xs"}>
                                <Anchor
                                    component={Link}
                                    href={"/login"}
                                    size="xs"
                                >
                                    Try loggin in again ?
                                </Anchor>
                                <Anchor
                                    component={Link}
                                    href={"/register"}
                                    size="xs"
                                >
                                    Create a new account ?
                                </Anchor>
                            </Stack>

                            <Button type="submit" disabled={processing}>
                                Confirm
                            </Button>
                        </Group>
                    </form>
                </Box>
            </Box>
        </>
    );
}
