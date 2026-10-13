import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-gray-100 border-b border-gray-300">

            <nav className="flex items-center gap-4 px-8 py-3">

                <Link
                    to="/"
                    className="font-bold text-xl text-gray-900 whitespace-nowrap"
                >
                    DEV@Deakin
                </Link>

                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-white border border-gray-300 px-4 py-2 outline-none"
                    />
                </div>

                <Link
                    to="/post"
                    className="text-gray-900 font-medium px-3 hover:text-blue-600"
                >
                    Post
                </Link>

                <Link
                    to="/login"
                    className="text-gray-900 font-medium px-3 hover:text-blue-600"
                >
                    Login
                </Link>

            </nav>

        </header>
    )
}

export default Header