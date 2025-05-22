/* eslint-disable react/prop-types */
import { useAuthContext } from "../context/AuthContext";
import {
  useAddToCartMutation,
  useGetCartItemsQuery,
} from "../features/CartApi";

const AddToCartBtn = ({ product, quantity, color, size, disabled }) => {
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const { currentLoggedUser } = useAuthContext();
  const { data: cartItems = [] } = useGetCartItemsQuery(currentLoggedUser?.id);

  const handleClick = async () => {
    if (!currentLoggedUser?.id) return;

    const existingItem = cartItems.find(
      (item) =>
        item.productId === product.id &&
        item.selectedColor === color &&
        item.selectedSize === size
    );

    const newItem = {
      productId: product.id,
      title: product.title,
      imageUrl: product.imageUrl[0],
      price: parseFloat(product.price),
      selectedSize: size,
      selectedColor: color,
      quantity: existingItem ? existingItem.quantity + quantity : quantity,
    };

    try {
      await addToCart({
        userId: currentLoggedUser.id,
        item: newItem,
      }).unwrap();
    } catch (error) {
      console.error("Add to cart failed:", error);
    }
  };

  return (
    <button
      disabled={disabled || isLoading}
      onClick={handleClick}
      className="disabled:cursor-not-allowed disabled:bg-gray-400 px-5 py-2 text-sm md:text-base font-semibold bg-gray-900 text-white hover:text-gray-300"
    >
      {isLoading ? "Adding..." : "Add To Cart"}
    </button>
  );
};

export default AddToCartBtn;
