import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-general sticky top-0 z-40 border-b bg-violet-700 transition-colors">
    <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16 items-center">
            <Link to="/" className="font-bold text-white"> Go Home </Link>
            <ul>
                <li className="text-white">
                    <span className="cursor-pointer font-bold text-white">Logout</span>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar;