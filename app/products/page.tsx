import Link from "next/link";
import Image from "next/image";


export default async function ProductsAll() {
    try {
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
                                <p className="font-medium">{item.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm btn-circle btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    </button>
                                    <button className="btn btn-sm btn-outline btn-accent">
                                        {/* <Link href={'#'}>Buy Now</Link> */}
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="btn-group place-content-center place-items-center">
                        <button className="btn">«</button>
                        <button className="btn">Page 22</button>
                        <button className="btn">»</button>
                    </div>
                </div>
            </>
        );
    } catch (error) {
        console.log(error);
        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Oops ! 😢</h1>
                        <p className="py-6">
                            Sorry, there was an issue retrieving the data. Please try again later.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
