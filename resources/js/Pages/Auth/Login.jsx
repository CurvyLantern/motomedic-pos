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
    Select,
} from "@mantine/core";
import BasicSection from "@/Components/sections/BasicSection";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
        role: "staff",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    // return <GuestLayout></GuestLayout>;

    return (
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
                    Login to{" "}
                    <Text span sx={{ display: "inline-block" }} color={"blue"}>
                        MotoMedic
                    </Text>
                </Title>
                <Text color="dimmed" size="sm" align="center" mt={5}>
                    Do not have an account yet?{" "}
                    <Anchor size="sm" href="/register" component={Link}>
                        Create account
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

                        <Select
                            label="Role"
                            name="role"
                            data={[
                                { label: "admin", value: "admin" },
                                { label: "staff", value: "staff" },
                                { label: "biller", value: "biller" },
                            ]}
                            value={data.role}
                            onChange={(value) => setData("role", value)}
                            size="sm"
                        ></Select>

                        <Checkbox
                            label="Keep me logged in"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.currentTarget.checked)
                            }
                            size="sm"
                        ></Checkbox>
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
                            Log in
                        </Button>
                    </Group>
                </form>
            </Box>
        </Box>
    );
}
