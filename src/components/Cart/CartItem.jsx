/* eslint-disable react/prop-types */
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useAuthContext } from "../../context/AuthContext";
import {
  useAddToCartMutation,
  useDeleteCartItemMutation,
} from "../../features/CartApi";

const CartItem = ({ cart }) => {
  const { currentLoggedUser } = useAuthContext();
  const [addToCart] = useAddToCartMutation();
  const [deleteCartItem] = useDeleteCartItemMutation();

  const handleIncQuantity = () => {
    addToCart({
      userId: currentLoggedUser.id,
      item: { ...cart, quantity: cart.quantity + 1 },
    });
  };
  const handleDecQuantity = () => {
    addToCart({
      userId: currentLoggedUser.id,
      item: { ...cart, quantity: cart.quantity - 1 },
    });
  };
  const handleDeleteItem = () => {
    deleteCartItem({ userId: currentLoggedUser?.id, cartItemId: cart.id });
  };
  return (
    <tr className="border-t border-gray-200">
      <td className="p-4 flex gap-4 items-center">
        <button
          onClick={handleDeleteItem}
          className="text-gray-400 hover:text-red-500"
        >
          <IoIosCloseCircleOutline />
        </button>
        <img
          src={cart.imageUrl}
          alt="Product"
          className="w-20 h-20 object-cover"
        />
        <div>
          <p className="font-semibold text-sm">
            {cart.title} - {cart.selectedColor}
          </p>
          <p className="text-sm text-gray-500">Size: {cart.selectedSize}</p>
        </div>
      </td>
      <td className="p-4 text-sm">${cart.price}</td>
      <td className="p-4">
        <div className="flex items-center gap-2 border w-fit px-2 py-1">
          <button onClick={handleDecQuantity} className="text-lg font-semibold">
            -
          </button>
          <span className="w-6 text-center">{cart.quantity}</span>
          <button onClick={handleIncQuantity} className="text-lg font-semibold">
            +
          </button>
        </div>
      </td>
      <td className="p-4 text-sm">${cart.price * cart.quantity}</td>
    </tr>
  );
};

export default CartItem;
