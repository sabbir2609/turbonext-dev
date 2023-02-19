import Link from "next/link";
import 'tailwindcss/tailwind.css'

export default function Sample() {
    return (
        <div>
            <h1>Sample Page</h1>
            <p>This is a sample page.</p>
            <Link href="/">
                Go to Home
            </Link>
        </div>
    );
}