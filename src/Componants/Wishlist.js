import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTOWish } from "../Store/WishlistSlice";
// import { removeFromWish } from '../Store/WishlistSlice'
// import WishlistSlice from '../Store/WishlistSlice'
function Wishlist() {
  const wishItem = useSelector((state) => state.wishlist);

  return (
  
    <div>
    <div className="bg-gray-100 pt-20">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Wishlist</h2>

        <div className="space-y-4">
          {wishItem.map((item) => {
            return (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 top-4 right-4">
                  <img
                    src={item.image}
                    alt="Item 1"
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-gray-500">Price: {item.price}</p>
                  </div>
                  <div>
                    <button
                      
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </div>
  </div>
  );
}

export default Wishlist;
