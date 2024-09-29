import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({handleCartBox}) => {
  const carts = useSelector(state=>state.carts);

  const totalQuantity = carts.reduce((acc, cart)=> cart.quantity + acc, 0);
  
  return (
    <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="index.html">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>

          <div onClick={handleCartBox} className="flex gap-4">
            <a href="#home" className="navHome" id="lws-home">
              Home
            </a>
            <a  href="#" className="navCart" id="lws-cart">
            <IoCartOutline />
              <span id="lws-totalCart">{totalQuantity}</span>
            </a>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
