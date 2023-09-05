import { useContext, createContext, useState } from "react";
const AppShellContext = createContext(null);
export const useAppContext = () => useContext(AppShellContext);
export const AppShellContextProvider = ({ children }) => {
    const [navHidden, setNavHidden] = useState(false);
    const [drawerOpened, setDrawerOpened] = useState(false);
    return (
        <AppShellContext.Provider
            value={{
                navHidden,
                drawerOpened,
                setNavHidden,
                setDrawerOpened,
            }}
        >
            {children}
        </AppShellContext.Provider>
    );
};
