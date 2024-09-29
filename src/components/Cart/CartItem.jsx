import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  deleteCart,
} from "../../redux/cart/actionTypes";
import toast from "react-hot-toast";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();
  const { id, name, image, category, price, quantity, initialPrice } = cart;
  const products = useSelector((state) => state.products);
  const originalProduct = products.find((product) => product.id === id);
  const originalQuantity = originalProduct ? originalProduct.quantity : 0;

  const handleIncrement = (id) => {
    const currentProduct = products.find(product => product.id === id);
    if (currentProduct && currentProduct.quantity > 0) {
      dispatch(incrementQuantity(id));
    } else {
      toast.error('Exceeding the maximum available quantity');
    }
  };

  const handleDecrement = (id) => {
    if (quantity > 0) {
      dispatch(decrementQuantity(id));
      
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteCart(id,originalQuantity));
  };

  return (
    <>
    {
      quantity > 0 ?  <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* cart image */}
        <img className="lws-cartImage" src={image} alt="product" />
        {/* cart item info */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{initialPrice}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* amount buttons */}
        <div className="flex items-center space-x-4">
          <button onClick={()=> handleIncrement(id)} className="lws-incrementQuantity">
            <FiPlus />
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button onClick={()=> handleDecrement(id)} className="lws-decrementQuantity">
            <FiMinus />
          </button>
        </div>
        {/* price */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price}</span>
        </p>
      </div>
      {/* delete button */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button onClick={() => handleDelete(id)} className="lws-removeFromCart">
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
          <RiDeleteBin6Line className="text-lg text-red-400" />
        </button>
      </div>
    </div> : <p>No products found in this cart. Please add one</p>
    }
    </>
   
  );
};

export default CartItem;
