import { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { useParams } from "react-router-dom";
import AddToCartBtn from "../components/AddToCartBtn";
import { useGetProductQuery } from "../features/ProductApi";

const ProductDetails = () => {
  const { productId } = useParams();
  const { data, isLoading, error } = useGetProductQuery(productId);
  console.log("🚀 ~ ProductDetails ~ data:", data);

  const [thum, setThum] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(false);

  const handleClearSelect = () => {
    setSelectedColor(null);
    setSelectedSize(null);
  };

  useEffect(() => {
    if (data?.imageUrl?.length > 0) {
      setThum(data.imageUrl[0]);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-10 my-10">
        {/* image section  */}
        <div>
          <img className="w-full" src={thum} alt={data?.title} />
          <div className="grid grid-cols-4 bg-red-50 mt-5 gap-2">
            {data?.imageUrl?.map((url, i) => (
              <img
                className="cursor-pointer"
                onClick={() => setThum(url)}
                key={i}
                src={url}
                alt={data?.title}
              />
            ))}
          </div>
        </div>
        {/* details section  */}
        <div className="">
          <span className="uppercase text-gray-500 font-semibold text-xs md:text-sm mb-5">
            {data?.category}
          </span>

          <h2 className=" capitalize text-3xl font-bold my-3 text-gray-900">
            {data?.title}
          </h2>
          <div className="flex">
            <p className="flex items-center text-lg font-bold text-gray-900">
              <TbCurrencyTaka className="text-lg" />
              {data.price}.00
            </p>
            <span className="font-bold text-lg text-gray-400 ml-1"> -</span>
            <p className="flex items-center text-lg font-bold text-gray-900 line-through">
              <TbCurrencyTaka className="text-lg" />
              {Number(data.price) + 100}.00
            </p>
          </div>
          <div className="flex gap-2 my-3">
            {data?.colors?.map((color, i) => (
              <div
                key={i}
                onClick={() => setSelectedColor(color)}
                className={`w-9 h-9  flex items-center justify-center cursor-pointer
        transition-all duration-150
        ${selectedColor === color ? "border-black border-[1px]" : ""}`}
              >
                <div
                  className="w-8 h-8 border-[1px] border-gray-300"
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex gap-1 mt-3 mb-2">
            {data?.sizes?.map((size, i) => (
              <span
                key={i}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border-[1px] cursor-pointer rounded 
        ${
          selectedSize === size
            ? "border-gray-800 text-gray-800"
            : "border-gray-300 text-gray-400"
        }`}
              >
                {size}
              </span>
            ))}
          </div>
          {(selectedColor || selectedSize) && (
            <button
              onClick={handleClearSelect}
              className="block px-3 py-1 text-gray-400 text-sx md:text-sm mb-5 uppercase"
            >
              Clear
            </button>
          )}

          <hr />
          <p className="flex items-center text-lg font-bold text-gray-900 my-3">
            <TbCurrencyTaka className="text-lg" />
            76.00
          </p>
          <span
            className={`text-sm md:text-base font-semibold capitalize block my-2 px-2 py-1 rounded 
                          ${
                            data?.stock === 0
                              ? "text-red-600"
                              : "text-green-600 "
                          }`}
          >
            {data?.stock === 0 ? "Stock Out" : "Available"}
          </span>

          <div className="flex items-center gap-10 my-3">
            <div className="flex ">
              <button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
                className="disabled:cursor-not-allowed px-5 py-1 border-[1px] border-r-0 border-gray-300 cursor-pointer hover:bg-pink-50"
              >
                -
              </button>
              <button className="px-5 py-1 border-[1px] border-gray-300 ">
                {quantity}
              </button>
              <button
                disabled={quantity === data?.stock}
                onClick={() => setQuantity(quantity + 1)}
                className="px-5 py-1 border-[1px] border-l-0 border-gray-300 cursor-pointer hover:bg-pink-50"
              >
                +
              </button>
            </div>
            <AddToCartBtn
              product={{ id: productId, ...data }}
              color={selectedColor}
              size={selectedSize}
              quantity={quantity}
              disabled={!selectedColor || !selectedSize}
            />
          </div>
          <hr />
          <div className="flex items-center gap-4 text-gray-500 font-semibold pt-3 pb-5">
            <span>SKU: N/A</span>
            <span>
              Category:{" "}
              <span className="text-black capitalize">{data?.category}</span>
            </span>
          </div>
          <hr />
          <div
            onClick={() => setShowDescription(!showDescription)}
            className="flex items-center justify-between py-3 text-xl font-bold cursor-pointer"
          >
            <h5>Description </h5>
            <h5>{showDescription ? "-" : "+"}</h5>
          </div>
          <hr />
          {showDescription && (
            <div className="py-4 transition-all duration-300">
              <p>{data?.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
