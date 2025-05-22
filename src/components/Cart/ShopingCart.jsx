import { useAuthContext } from "../../context/AuthContext";
import { useGetCartItemsQuery } from "../../features/CartApi";
import CartItem from "./CartItem";

const ShopingCart = () => {
  const { currentLoggedUser } = useAuthContext();
  const { isLoading, isError, error, data } = useGetCartItemsQuery(
    currentLoggedUser?.id,
    {
      skip: !currentLoggedUser?.id,
    }
  );
  const subTotal = data?.reduce(
    (acc, cart) => acc + cart.price * cart.quantity,
    0
  );
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Cart Table */}
      <div className="flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200">
            <thead className="bg-pink-100">
              <tr className="text-gray-700 text-sm">
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              )}
              {isError && (
                <tr>
                  <td colSpan="4" className="text-center text-red-500 py-4">
                    Something went wrong: {error.message}
                  </td>
                </tr>
              )}
              {!isLoading && !isError && data && data.length > 0
                ? data.map((cart) => <CartItem key={cart.id} cart={cart} />)
                : !isLoading &&
                  !isError &&
                  data && (
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        Your cart is empty.
                      </td>
                    </tr>
                  )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cart Totals */}
      <div className="w-full lg:w-1/3 border border-gray-200 bg-white h-fit">
        <h3 className="font-semibold mb-4 border-b pb-2 bg-pink-100 p-6">
          Cart totals
        </h3>
        <div className="flex justify-between py-2 text-sm p-6">
          <span>Subtotal</span>
          <span>{subTotal?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2 text-sm border-b p-6">
          <span>Total</span>
          <span>$36.00</span>
        </div>
        <div className="mt-4 text-sm p-6">
          <p className="mb-2">Have a coupon?</p>
          <button className="bg-black text-white w-full py-2 hover:bg-gray-800">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
