import { useDisclosure } from "@mantine/hooks";
import { Drawer, Group, Button, TextInput } from "@mantine/core";
import { useAppContext } from "@/Layouts/BasicLayout";
import { IconPrinter } from "@tabler/icons-react";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const ServiceDrawer = () => {
    const { drawerOpened, setDrawerOpened } = useAppContext();
    const contentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => contentRef.current,
    });
    return (
        <Drawer
            position="right"
            closeOnClickOutside={false}
            withOverlay={false}
            opened={drawerOpened}
            lockScroll={false}
            onClose={() => setDrawerOpened(false)}
            title="Invoice of Customer"
        >
            <div ref={contentRef}>
                <div>Products</div>
                <ul>
                    <li>WD40</li>
                </ul>
            </div>

            <div>
                <Button onClick={handlePrint} leftIcon={<IconPrinter />}>
                    Print
                </Button>
            </div>
        </Drawer>
    );
};

export default ServiceDrawer;
