import { useSelector } from "react-redux";
import Form from "./Form";
import ProductCard from "./ProductCard";

const Product = () => {
const products = useSelector((state)=> state.products);

  return (
    <main className="py-16">
      <div className="productWrapper">
        <div className="productContainer" id="lws-productContainer">
          {
            products?.map((product)=>  <ProductCard key={product.id} product={product} /> )
          }
         
        </div>
        <div>
          <Form/>
        </div>
      </div>
    </main>
  );
};

export default Product;
