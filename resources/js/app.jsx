// my custom libraries

import { StrictMode } from "react";
import AllProvider from "@/global/AllProvider";
import BasicLayout from "./Layouts/BasicLayout";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

const App = ({ children }) => {
    return (
        <StrictMode>
            <AllProvider>
                <BasicLayout>{children}</BasicLayout>
            </AllProvider>
        </StrictMode>
    );
};

export default App;
