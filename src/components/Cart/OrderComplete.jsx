const OrderComplete = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          🎉 Thank you. Your order has been received.
        </h2>
        <p className="text-gray-600">Order #12345</p>
      </div>

      {/* Order Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center text-sm mb-10">
        <div className="border p-4">
          <p className="text-gray-500">Order Number</p>
          <p className="font-medium">#12345</p>
        </div>
        <div className="border p-4">
          <p className="text-gray-500">Date</p>
          <p className="font-medium">May 22, 2025</p>
        </div>
        <div className="border p-4">
          <p className="text-gray-500">Email</p>
          <p className="font-medium">example@email.com</p>
        </div>
        <div className="border p-4">
          <p className="text-gray-500">Total</p>
          <p className="font-medium">$36.00</p>
        </div>
      </div>

      {/* Product Summary */}
      <div className="border rounded p-6">
        <h3 className="text-lg font-semibold mb-4">Order Details</h3>
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/60"
              alt="product"
              className="w-16 h-16 object-cover"
            />
            <div>
              <p className="font-medium">T-Shirt Name 10 - Orange</p>
              <p className="text-sm text-gray-500">Size: S</p>
              <p className="text-sm text-gray-500">Qty: 1</p>
            </div>
          </div>
          <p className="text-sm font-medium mt-4 md:mt-0">$36.00</p>
        </div>

        <div className="flex justify-between border-t pt-4 font-medium text-sm">
          <span>Total</span>
          <span>$36.00</span>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
