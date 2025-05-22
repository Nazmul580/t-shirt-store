const Checkout = () => {
  return (
    <div className="p-4 md:p-10 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">2. Checkout Details</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Form Section */}
        <div className="flex-1">
          {/* Customer Info */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Customer information</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border px-4 py-2 mb-4"
            />
          </div>

          {/* Billing Info */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Billing details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border px-4 py-2"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border px-4 py-2"
              />
              <input
                type="text"
                placeholder="Company name"
                className="border px-4 py-2 md:col-span-2"
              />
              <select className="border px-4 py-2 md:col-span-2">
                <option value="">Bangladesh</option>
                <option value="india">India</option>
              </select>
              <input
                type="text"
                placeholder="House no"
                className="border px-4 py-2"
              />
              <input
                type="text"
                placeholder="Road"
                className="border px-4 py-2"
              />
              <input
                type="text"
                placeholder="District"
                className="border px-4 py-2"
              />
              <input
                type="text"
                placeholder="Postcode"
                className="border px-4 py-2"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="border px-4 py-2 md:col-span-2"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">
              Additional information
            </h3>
            <textarea
              rows={3}
              placeholder="Notes about your order, e.g. special notes for delivery..."
              className="w-full border px-4 py-2"
            />
          </div>

          {/* Payment */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Payment</h3>
            <p className="text-sm bg-gray-100 p-4 border text-gray-600">
              Sorry, it seems that there are no available payment methods.
              Please contact us if you require assistance or wish to make
              alternate arrangements.
            </p>
          </div>

          {/* Order Button */}
          <button className="w-full bg-black text-white py-3 text-center font-medium hover:bg-gray-800">
            Place Order $36.00
          </button>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3 border border-gray-200 p-6 bg-white h-fit">
          <h3 className="font-semibold mb-4 border-b pb-2 text-gray-700">
            Your order
          </h3>
          <div className="flex justify-between py-2 text-sm">
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-3">
              <img
                src="https://via.placeholder.com/60"
                alt="Product"
                className="w-12 h-12 object-cover"
              />
              <p className="text-sm">T-Shirt Orange × 1</p>
            </div>
            <span>$36.00</span>
          </div>
          <div className="flex justify-between py-2 text-sm border-t mt-2 font-semibold">
            <span>Total</span>
            <span>$36.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
