import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import RootApp from "@/app";
import BasicLayout from "@/Layouts/BasicLayout";
import GuestLayout from "@/Layouts/GuestLayout";

createInertiaApp({
    resolve: async (name) => {
        const page = await resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        );

        const authRoutes = name.startsWith("Auth/");
        console.log(name, "route names or what", authRoutes);
        const Layout = authRoutes ? GuestLayout : BasicLayout;

        page.default.layout =
            page.default.layout || ((page) => <Layout>{page}</Layout>);
        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <RootApp>
                <App {...props} />
            </RootApp>
            // <App {...props} />
        );
    },
    progress: {
        color: "#4B5563",
    },
});
