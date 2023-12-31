import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/CartSlice";

function Cart() {
  const item = useSelector((state) => state.cart);
  

  const Dispatch = useDispatch();

  const removeItem = (itemid) => {
    Dispatch(remove(itemid));
  };

  return (
    <div>
      <div className="bg-gray-100 pt-20">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

          <div className="space-y-4">
            {item.map((item) => {
              return (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 ">
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
                        onClick={() => removeItem(item.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Remove item
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-xl font-bold">Total Price: $64.97</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
