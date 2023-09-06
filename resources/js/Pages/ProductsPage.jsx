import { ProductCard } from "@/Components/cards/ProductCard";
import { SimpleGrid, Pagination, Stack, Center } from "@mantine/core";
import { useEffect, useState } from "react";

const getPaginatedUrl = (n) => `/v1/products?page=${n}`;
const Products = () => {
    const [products, setProducts] = useState([]);
    const [activePage, setPage] = useState(1);
    const [paginationCount, setPaginationCount] = useState(0);
    useEffect(() => {
        const controller = new AbortController();
        const url = getPaginatedUrl(activePage);
        const fetcher = () => {
            return axios(url, { signal: controller.signal }).then((res) => {
                const products = res.data.data.products.data;
                console.log(products, "from useEffect");
                setProducts(products);
            });
        };

        fetcher();

        return () => {
            controller.abort();
        };
    }, [activePage]);

    useEffect(() => {
        // setPaginationCount(product);
    }, [products]);

    return (
        <Stack>
            {/* <div>{JSON.stringify(products)}</div> */}
            <SimpleGrid cols={4}>
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                })}
            </SimpleGrid>
            <div>{activePage}</div>
            <Center>
                <Pagination
                    value={activePage}
                    onChange={setPage}
                    total={10}
                    radius="md"
                />
            </Center>
        </Stack>
    );
};

export default Products;
