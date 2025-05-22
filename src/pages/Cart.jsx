import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Checkout from "../components/Cart/Checkout";
import OrderComplete from "../components/Cart/OrderComplete";
import ShopingCart from "../components/Cart/ShopingCart";

const Cart = () => {
  const [activeState, setActiveState] = useState("cart");
  const handleCartState = (e) => {
    setActiveState(e.target.value);
  };
  return (
    <div className="container mx-auto py-10">
      <div className="flex gap-2 mx-auto justify-center">
        <button
          value="cart"
          onClick={handleCartState}
          className="text-lg font-semibold mb-4 flex items-center gap-1 text-gray-400"
        >
          <h6 className="w-5 h-5 text-xs md:text-sm text-white flex items-center justify-center rounded-full bg-gray-400">
            1
          </h6>{" "}
          Shopping Cart
          <FaChevronRight />
        </button>
        <button
          value="checkout"
          onClick={handleCartState}
          className="text-lg font-semibold mb-4 flex items-center gap-1 text-gray-400"
        >
          <h6 className="w-5 h-5 text-xs md:text-sm text-white flex items-center justify-center rounded-full bg-gray-400">
            2
          </h6>{" "}
          Checkout details
          <FaChevronRight />
        </button>
        <button
          value="order details"
          onClick={handleCartState}
          className="text-lg font-semibold mb-4 flex items-center gap-1 text-gray-400"
        >
          <h6 className="w-5 h-5 text-xs md:text-sm text-white flex items-center justify-center rounded-full bg-gray-400">
            3
          </h6>{" "}
          Order Complete
          <FaChevronRight />
        </button>
      </div>
      {activeState === "cart" && <ShopingCart />}
      {activeState === "checkout" && <Checkout />}
      {activeState === "order details" && <OrderComplete />}
    </div>
  );
};

export default Cart;
