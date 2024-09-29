import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/Product";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const [isCartBox, setIsCartBox] = useState(false);

  const handleCartBox = () => {
    setIsCartBox(!isCartBox);
  };

  return (
    <Provider store={store}>
      <Navbar handleCartBox={handleCartBox} />
      {isCartBox ? <Cart /> : <Product />}
    </Provider>
  );
}

export default App;
