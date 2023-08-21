import PaginationTable from "@/Components/tables/PaginationTable";
import { SimpleTable } from "@/Components/tables/SimpleTable";
import { Link, Head, router } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head>
                <title>MotoMedic</title>
                <meta name="description" content="pos for motomedic" />
            </Head>
            <SimpleTable />
            <PaginationTable />
        </>
    );
}


