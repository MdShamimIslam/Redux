import { ImYoutube2 } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <Link to='/' >
                <ImYoutube2 className="text-7xl text-red-600" />
                </Link>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    <Search/>
                    <IoIosSearch className="inline text-xl cursor-pointer" />
                </div>
            </div>
        </nav>
  )
}

export default Navbar
