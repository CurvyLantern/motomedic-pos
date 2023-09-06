import {
    TbShoppingBag,
    TbSettingsAutomation,
    TbHammer,
    TbUser,
    TbCash,
    TbUserDollar,
    TbHome,
} from "react-icons/tb";
class Navlink {
    constructor({ href, label, icon }) {
        (this.href = href ?? "#"),
            (this.label = label ?? "Product label"),
            (this.icon = icon ?? TbUser);
    }
}

const urlForProducts = (str) => "products/" + str;

export const mockData = [
    {
        label: "Home",
        icon: TbHome,
        href: "/",
    },
    {
        label: "Products",
        icon: TbShoppingBag,
        childLinks: [
            {
                href: "add-product",
                label: "Add New Product",
                icon: TbShoppingBag,
            },

            {
                href: "products",
                label: "All Products",
                icon: TbShoppingBag,
            },
            // {
            //     href: urlForProducts("in-house"),
            //     label: "In House Products",
            //     icon: TbShoppingBag,
            // },
            // {
            //     href: urlForProducts("import-bulk"),
            //     label: "Bulk Import",
            //     icon: TbShoppingBag,
            // },
            // {
            //     href: urlForProducts("export-bulk"),
            //     label: "Bulk Export",
            //     icon: TbShoppingBag,
            // },
            {
                href: urlForProducts("categories"),
                label: "Categories",
                icon: TbShoppingBag,
            },
            {
                href: urlForProducts("brand"),
                label: "Brand",
                icon: TbShoppingBag,
            },
            {
                href: urlForProducts("attribute"),
                label: "Attributes",
                icon: TbShoppingBag,
            },
            {
                href: urlForProducts("colors"),
                label: "Colors",
                icon: TbShoppingBag,
            },
            {
                href: "add-product-bulk",
                label: "Add Products Bulk",
                icon: TbShoppingBag,
            },
            // {
            //     href: urlForProducts("reviews"),
            //     label: "Product Reviews",
            //     icon: TbShoppingBag,
            // },
        ],
    },
    {
        label: "Sales",
        icon: TbCash,
        childLinks: [
            {
                href: "orders",
                label: "All orders",
                icon: TbShoppingBag,
            },
            {
                href: "create-order",
                label: "Create Order",
                icon: TbShoppingBag,
            },
            // {
            //     href: "seller-orders",
            //     label: "Seller Orders",
            //     icon: TbShoppingBag,
            // },
        ],
    },

    {
        label: "Service Management",
        icon: TbSettingsAutomation,
        childLinks: [
            {
                href: "service/create",
                label: "Create Service",
                icon: TbSettingsAutomation,
            },
            {
                href: "service/view-all",
                label: "All Services",
                icon: TbSettingsAutomation,
            },
            // {
            //     href: "service/create-service-data",
            //     label: "Create Service Essentitals",
            //     icon: TbSettingsAutomation,
            // },
        ],
    },
    {
        href: "",
        label: "Mechanic Management",
        icon: TbHammer,
        childLinks: [
            {
                href: "mechanics/view-all",
                label: "All Mechanics",
                icon: TbSettingsAutomation,
            },
        ],
    },
    {
        label: "Customers",
        icon: TbUser,
        childLinks: [
            {
                href: "customers",
                label: "All Customers",
                icon: TbUserDollar,
            },
        ],
    },
];
