import React from "react";

import { useEffect, useState } from "react";
import { STATUSES } from "../Store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/CartSlice";
import { addTOWish } from "../Store/WishlistSlice";
import { fetchProducts } from "../Store/ProductSlice";

function ProductData() {
  //const [products, setProduct] = useState([]);
  const {data:products , status} = useSelector((state)=>state.product)
  const dispatch = useDispatch();

  useEffect(() => {

      dispatch(fetchProducts())

    // const getProduct = async () => {
    //   const res = await axios.get("https://fakestoreapi.com/products");

    //   setProduct(res.data);
    // };

    // getProduct();
  }, []);

  const handleAddtoCart = (product) => {
    dispatch(add(product));
  };


  const addTOWishlistfun = (product) =>{
    dispatch(addTOWish(product));
  }



  if(status==STATUSES.LOADING){
    return <h1 className="text-2xl font-bold text-center">LOADING......</h1>
  }
  if(status==STATUSES.ERROR){
    return <h1 className="text-2xl font-bold text-center">Page not Found......</h1>
  }

  return (
    <div>
      <div className="flex flex-wrap gap-8 p-5 ">
        {products.map((product) => {
          return (
            <div className="max-w-xs mx-auto bg-white p-4 rounded shadow-xl">
              <img
                src={product.image}
                alt=""
                className="bg-cover w-full h-52  mb-4 rounded"
              />
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-500 mb-2">price {product.price}</p>
              <div className="flex items-center mb-4 gap-4">
              <button
                onClick={() => handleAddtoCart(product)}
                className="bg-blue-500 text-white px-3 py-2 rounded"
              >
                Add to Cart
              </button>
              <button 
              onClick={()=>addTOWishlistfun(product)}
              className="bg-blue-500 text-white px-3 py-2 rounded">
                Add To Wish
              </button>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductData;
