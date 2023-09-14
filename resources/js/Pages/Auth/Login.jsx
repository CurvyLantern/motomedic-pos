import { useEffect } from "react";
// import Checkbox from "@/Components/Checkbox";
// import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Anchor,
    Button,
    Checkbox,
    Container,
    Group,
    Paper,
    PasswordInput,
    Stack,
    TextInput,
    Title,
} from "@mantine/core";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
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
        <div className="tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center">
            <Container size="xs">
                <Head title="Log in" />

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}

                <Paper p="xl" withBorder>
                    <Title
                        my="xl"
                        py="xl"
                        order={1}
                        align="center"
                        size="h1"
                        weight={500}
                    >
                        Welcome to MotoMedic Admin Panel
                    </Title>
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
                </Paper>
            </Container>
        </div>
    );
}
