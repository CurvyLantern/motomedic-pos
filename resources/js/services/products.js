import { useMemo } from "react";
const randItem = (arr) => arr[Math.floor(Math.random() * (arr.length - 1))];
const rand = (n, min) => {
    let num = Math.floor(Math.random() * n);
    if (min) {
        num = Math.max(num, min);
    }
    return num;
};
const allStatus = ["INSTOCK", "LOWSTOCK", "OUTOFSTOCK"];
const categories =
    "Hero,Yamaha,Honda,Rickshaw,CNG,Plasic Gari,Murir tin,Tesla".split(",");
const names =
    "Nasim,Rakib,Tuhin,Mridul,Tamal,Prematal,Lokman,Rina Khala,Shamim,Shohan,Emon,Ochena Se".split(
        ","
    );
const data = Array.from({ length: 200 }, (_, idx) => {
    return {
        name: randItem(names),
        price: rand(2000, 500),
        code: idx + 1,
        category: randItem(categories),
        rating: rand(5),
        inventoryStatus: randItem(allStatus),
    };
});
export const useProducts = () => {
    const isLoading = false;
    const isFetching = false;
    const isError = false;

    return {
        isLoading,
        isFetching,
        isError,
        data,
    };
};
