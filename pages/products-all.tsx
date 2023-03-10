import 'tailwindcss/tailwind.css'
import Link from 'next/link'

import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';

interface Product {
    id: number;
    title: string;
    slug: string;
    description: string;
    inventory: number;
    unit_price: number;
    price_with_tax: number;
    collection: number;
    images: { image: string }[]; // assume images is an array of string URLs
};

interface ProductListProps {
    products: Product[];
};

const ProductList: NextPage<ProductListProps> = ({ products }) => {
    return (
        <div className="card bg-white rounded-lg shadow-lg p-6">
            {products.map((product) => (
                <div key={product.id} className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="grid grid-cols-2 gap-4">
                        {product.images.map((image, index) => (
                            <Image
                                height={200}
                                width={200}
                                key={index}
                                src={image.image}
                                alt={`Image ${index}`}
                                className="rounded-lg shadow-sm"
                            />
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-6">
                        <p className="text-gray-600">Price: {product.unit_price}</p>
                        <p className="text-gray-600">Price (wTax): {product.price_with_tax}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-gray-600">Inventory: {product.inventory}</p>
                        <Link
                            href={`/store/products/${product.slug}`}
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                        >
                            View Product
                        </Link>
                    </div>
                </div>
            ))}
        </div>


    );
};

export const getServerSideProps: GetServerSideProps<ProductListProps> = async () => {
    const res = await fetch('http://127.0.0.1:8000/store/products');
    const data = await res.json();
    return {
        props: { products: data.results },
    };
};

export default ProductList;
