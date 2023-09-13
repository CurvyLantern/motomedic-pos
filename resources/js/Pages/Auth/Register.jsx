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
import BasicSection from "@/Components/sections/BasicSection";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />

            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: rem(50),
                }}
            >
                <Box>
                    <Title align="center" size="h1" weight={600}>
                        Register to{" "}
                        <Text
                            span
                            sx={{ display: "inline-block" }}
                            color={"blue"}
                        >
                            MotoMedic
                        </Text>
                    </Title>
                    <Text color="dimmed" size="sm" align="center" mt={5}>
                        Already have an account?{" "}
                        <Anchor size="sm" href="/login" component={Link}>
                            Log in
                        </Anchor>
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
                                id="username"
                                label="Username"
                                placeholder="Please enter your username"
                                name="username"
                                value={data.username}
                                error={errors.username}
                                onChange={(e) =>
                                    setData("username", e.currentTarget.value)
                                }
                            />
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

                            <PasswordInput
                                required
                                id="password"
                                name="password"
                                autoComplete="current-password"
                                label="Password"
                                placeholder="mypasswordisstrong"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.currentTarget.value)
                                }
                                error={errors.password}
                            />
                            <PasswordInput
                                required
                                id="password_confirmation"
                                name="password_confirmation"
                                autoComplete="current-password"
                                label="Confirm Password"
                                placeholder="mypasswordisstrong"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.currentTarget.value
                                    )
                                }
                                error={errors.password_confirmation}
                            />
                        </Stack>

                        <Group position="apart" mt="xl">
                            <Anchor
                                component={Link}
                                href={route("password.request")}
                                onClick={() => {}}
                                size="xs"
                            >
                                Forgot your password?
                            </Anchor>

                            <Button type="submit" disabled={processing}>
                                Register
                            </Button>
                        </Group>
                    </form>
                </Box>
            </Box>
        </>
    );
}
