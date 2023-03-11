import Link from "next/link";
import Image from "next/image";


export default async function ProductsAll() {
    const response = await fetch('http://127.0.0.1:8000/store/products/');
    const { results } = await response.json();

    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
                {results?.map((item: any) => (
                    <div key={item.id} className="card card-compact bg-base-100 h-80 shadow-xl">
                        <figure><Image height={500} width={500} src={item?.images[0]?.image || '/images/placeholder-image.webp'} alt={item.title} /></figure>
                        <div className="card-body">
                            <h2 className="card-title truncate hover:text-clip">{item.title}</h2>
                            <p className="truncate hover:text-clip">{item.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-accent md:btn-md">
                                    <Link href={item.slug}>Buy Now</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
