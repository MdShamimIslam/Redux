import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/product/actionTypes";
import toast from "react-hot-toast";

const Form = () => {
  const { reset,register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const productInfo = {
      name: data.productName,
      image: data.image,
      category: data.category,
      price: parseInt(data.price),
      quantity: parseInt(data.quantity),
    }

    dispatch(addProduct(productInfo))
    toast.success('SuccessFully created!');

    reset();
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* product name  */}
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            {...register("productName")}
            name="productName"
            className="addProductInput"
            id="lws-inputName"
            type="text"
            required
          />
        </div>
        {/* product category  */}
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            {...register("category")}
            name="category"
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
          />
        </div>
        {/* product image url  */}
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            {...register("image")}
            name="image"
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required
          />
        </div>
        {/* price & quantity container  */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* price */}
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              {...register("price")}
              name="price"
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
            />
          </div>
          {/* quantity  */}
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              {...register("quantity")}
              name="quantity"
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
            />
          </div>
        </div>
        {/* submit button  */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Form;
