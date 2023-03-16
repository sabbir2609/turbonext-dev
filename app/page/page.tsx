"use client";

import { useState, useEffect } from 'react';

interface Product {
    id: number;
    name: string;
    // add any other properties here
}

function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://127.0.0.1:8000/store/products/?page=${pageNumber}`);
            const data = await res.json();
            console.log(data);
            setProducts(data.results);
        }

        fetchData();
    }, [pageNumber]);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            <button onClick={() => setPageNumber(pageNumber + 1)}>Next Page</button>
        </div>
    );
}

export default ProductsPage;
