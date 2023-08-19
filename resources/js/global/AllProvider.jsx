import { MantineProvider } from "@mantine/core";

import { useGlobalTheme } from "@/styles/theme";
const AllProvider = ({ children }) => {
    const theme = useGlobalTheme({ colorScheme: "light" });
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
            {children}
        </MantineProvider>
    );
};

export default AllProvider;
