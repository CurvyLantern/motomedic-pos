import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { useGlobalTheme } from "@/styles/theme";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const qc = new QueryClient();

const AllProvider = ({ children }) => {
    const theme = useGlobalTheme({ colorScheme: "light" });
    return (
        <QueryClientProvider client={qc}>
            <MantineProvider
                withNormalizeCSS
                withGlobalStyles
                theme={{
                    ...theme,
                    components: {
                        NumberInput: {
                            defaultProps: {
                                type: "number",
                            },
                        },
                    },
                }}
            >
                <ModalsProvider>{children}</ModalsProvider>
            </MantineProvider>
        </QueryClientProvider>
    );
};

export default AllProvider;
