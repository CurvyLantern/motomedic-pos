import { MantineProvider } from "@mantine/core";

import { useGlobalTheme } from "@/styles/theme";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const qc = new QueryClient();

const AllProvider = ({ children }) => {
    const theme = useGlobalTheme({ colorScheme: "light" });
    return (
        <QueryClientProvider client={qc}>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
                {children}
            </MantineProvider>
        </QueryClientProvider>
    );
};

export default AllProvider;
