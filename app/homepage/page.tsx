import Link from "next/link"
import Image from "next/image"

const products = [

    {
        id: 134,
        title: 'Shoes',
        price: '$99.99',
        description: 'If a dog chews shoes whose shoes does he choose?',
        image: '/images/shoes.jpg',
        href: '#'
    },

    {
        id: 342,
        title: 'Shirt',
        price: '$49.99',
        description: 'If a dog chews shoes whose shoes does he choose?',
        image: '/images/shirt.jpg',
        href: '#'
    },

    {
        id: 342,
        title: 'Shirt',
        price: '$49.99',
        description: 'If a dog chews shoes whose shoes does he choose?',
        image: '/images/shirt.jpg',
        href: '#'
    },

    {
        id: 342,
        title: 'Shirt',
        price: '$49.99',
        description: 'If a dog chews shoes whose shoes does he choose?',
        image: '/images/shirt.jpg',
        href: '#'
    },

    {
        id: 342,
        title: 'Shirt',
        price: '$49.99',
        description: 'If a dog chews shoes whose shoes does he choose?',
        image: '/images/shoes.jpg',
        href: '#'
    },

    {
        id: 342,
        title: 'Shirt',
        price: '$49.99',
        description: 'If a dog chews shoes whose shoes does he choose?',
        image: '/images/shirt.jpg',
        href: '#'
    },

]


export default function Homepage() {
    return (
        <>
            <div className="columns-3xs space-y-4 p-4">
                {products.map((item) => (
                    <div key={item.id} className="card card-compact w-fit bg-base-100 h-80 shadow-xl">
                        <figure><Image height={500} width={500} src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}!</h2>
                            <p>{item.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-accent md:btn-md">
                                    <Link href={item.href}>Buy Now</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}