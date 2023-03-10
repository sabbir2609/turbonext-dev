"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    description: string;
    slug: string;
}

interface Props {
    page: number;
}

export default function ProductsAll({ page }: Props) {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchData = async () => {
        const res = await fetch(`http://127.0.0.1:8000/store/products/?page=${page}`);
        const { results } = await res.json();
        setProducts(results);
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <>
            <div className="columns-3xs flex-wrap space-y-4 p-4">
                {products && products.map((item) => (
                    <div key={item.id} className="card card-compact bg-base-100 h-80 shadow-xl">
                        <figure>
                            <Image height={500} width={500} src={"/images/shirt.jpg"} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-accent md:btn-md">
                                    <Link href={item.slug}>Buy Now</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button
                    className="btn btn-outline btn-accent mx-2"
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                >
                    Prev
                </button>
                <button className="btn btn-outline btn-accent mx-2" disabled>
                    {page}
                </button>
                <button
                    className="btn btn-outline btn-accent mx-2"
                    onClick={() => setPage((prev) => prev + 1)}
                    disabled={products && products.length === 0}
                >
                    Next
                </button>
            </div>
        </>
    );
}
