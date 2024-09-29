import { useSelector } from "react-redux"
import BillDetails from "./BillDetails"
import CartItem from "./CartItem"

const Cart = () => {
  const carts = useSelector(state=>state.carts);
  return (
    <main className="py-16">
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          { carts.length > 0 ? carts?.map((cart)=> <CartItem key={cart.id} cart={cart} /> ) : <p>No products found in this cart. Please add one</p>}
        </div>
        <div>
          <BillDetails />
        </div>
      </div>
    </div>
  </main>
  )
}

export default Cart
