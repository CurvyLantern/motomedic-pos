import { Table } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useQuery } from "@tanstack/react-query";
import { router } from "@inertiajs/react";

import axios from "axios";
const ViewServicePage = () => {
    const { data: services } = useQuery({
        queryKey: ["api/services"],
        queryFn: () => {
            return axios.get("/v1/services").then((res) => res.data.data);
        },
    });

    const viewService = (id) => {};
    const editService = (id) => {
        router.visit(`${id}`);
    };
    const deleteService = (id) => {
        const confirmed = window.confirm("Do you really want to delete this");
        if (confirmed) {
            const data = axios
                .get(`/v1/delete-service/${id}`)
                .then((res) => res.data)
                .catch((error) => {
                    throw error;
                });
        }
    };

    const _services = services ? services : [];
    const tRows = _services.map((service) => {
        const id = service.id;
        return (
            <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.serviceName}</td>
                <td>{service.price}</td>
                <td>
                    <button
                        onClick={() => {
                            deleteService(id);
                        }}
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => {
                            editService(id);
                        }}
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => {
                            viewService(id);
                        }}
                    >
                        view
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>{tRows}</tbody>
        </Table>
    );
};

export default ViewServicePage;
