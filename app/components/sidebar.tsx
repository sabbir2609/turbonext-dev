import Link from "next/link"

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
const navigation = [
    { id: 1, name: 'Home', href: '/homepage', current: true },
    { id: 2, name: 'Books', href: '/products', current: false },
    { id: 3, name: 'Projects', href: '#', current: false },
    { id: 4, name: 'Calendar', href: '#', current: false },
    { id: 5, name: 'Reports', href: '#', current: false },

    // experimental
    { id: 1, name: 'Home', href: '/homepage', current: true },
    { id: 2, name: 'Books', href: '/products', current: false },
    { id: 3, name: 'Projects', href: '#', current: false },
    { id: 4, name: 'Calendar', href: '#', current: false },
    { id: 5, name: 'Reports', href: '#', current: false },
    { id: 1, name: 'Home', href: '/homepage', current: true },
    { id: 2, name: 'Books', href: '/products', current: false },
    { id: 3, name: 'Projects', href: '#', current: false },
    { id: 4, name: 'Calendar', href: '#', current: false },
    { id: 5, name: 'Reports', href: '#', current: false },
]

export default function Sidebar() {
    return (
        <>
            {navigation.map((item) => (
                <li key={item.id}>
                    <Link
                        key={item.name}
                        href={item.href}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </>
    )
}