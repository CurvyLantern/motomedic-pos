import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { useGlobalTheme } from "@/styles/theme";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import ReduxMainStore from "@/Store/MainStore";
const qc = new QueryClient();

const AllProvider = ({ children }) => {
    const theme = useGlobalTheme({ colorScheme: "light" });
    return (
        <QueryClientProvider client={qc}>
            <ReduxProvider store={ReduxMainStore}>
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
            </ReduxProvider>
        </QueryClientProvider>
    );
};

export default AllProvider;
