import { useDisclosure } from "@mantine/hooks";
import { Drawer, Group, Button, TextInput } from "@mantine/core";

import { TbPrinter } from "react-icons/tb";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { useAppContext } from "@/contexts/AppContext";

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
                <Button onClick={handlePrint} leftIcon={<TbPrinter />}>
                    Print
                </Button>
            </div>
        </Drawer>
    );
};

export default ServiceDrawer;
