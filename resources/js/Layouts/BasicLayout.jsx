import { AppShell, Header } from "@mantine/core";

import BasicNavbar from "./BasicNavbar";

const BasicLayout = ({ children }) => {
    return (
        <AppShell
            layout="alt"
            navbar={<BasicNavbar />}
            header={<BasicHeader />}
        >
            {children}
        </AppShell>
    );
};

const BasicHeader = () => {
    return <Header height={60} p="xs"></Header>;
};

export default BasicLayout;
