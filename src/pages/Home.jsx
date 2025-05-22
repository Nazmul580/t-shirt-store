import React from "react";
import Product from "../components/Product";
import { useGetProductsQuery } from "../features/ProductApi";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  const featuresProducts = data
    ?.filter((product) => {
      return product.freatureProduct === true;
    })
    .slice(0, 4);

  const onSaleProduct = data
    ?.filter((product) => product.discount > 0)
    .slice(0, 4);
  return (
    <>
      {/* hero section start here  */}
      <section className="pb-5">
        <div className="container mx-auto flex flex-col sm:flex-row bg-pink-100">
          <div className="w-full flex flex-col items-center sm:items-start py-20 sm:py-0 justify-center  px-5">
            <h2 className="font-bold text-3xl lg:text-6xl">
              Slick. Modern. Awesome.
            </h2>
            <button className="capitalize bg-black text-white px-7 py-3 w-fit mt-10 hover:text-purple-100 transition">
              shop collection
            </button>
          </div>
          <div className=" w-full relative ">
            <img src="./public/hero.png" alt="" className="z-10 relative" />
            <div className="absolute w-60 h-60 rounded-full bg-white bottom-0 lg:bottom-20 left-5 "></div>
            <div className="absolute w-10/12 h-2/3 rounded-full bg-white top-16 right-5 "></div>
          </div>
        </div>
      </section>
      {/* hero section end here  */}

      {/* feature product section start here  */}
      <section className="py-10">
        <div className="container mx-auto">
          <h5 className="text-center text-gray-400 text-base mb-2">
            summer collection
          </h5>
          <h2 className="text-center text-4xl font-bold capitalize mb-5">
            Popular T-Shirts
          </h2>
          <div className="py-5">
            {data && <Product product={featuresProducts} />}
          </div>
        </div>
      </section>
      {/* feature product section end here  */}

      {/* base collection section start here  */}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="">
              <div className="mb-5">
                <img
                  src="./public/collection-02.jpg"
                  alt="collection-image"
                  className="w-full"
                />
              </div>
              <h5 className="text-gray-500 text-sm text-center mb-3">Man</h5>
              <h2 className="text-center text-4xl capitalize font-bold">
                The base collection - Ideal <br /> every day.
              </h2>
              <div className="flex justify-center py-5">
                <Link to={"/shop/man"}>
                  <button className="bg-gray-950 text-white font-semibold px-6 py-2">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="aspect-w-4 aspect-h-3 sm:aspect-h-4">
                <img
                  src="./public/collection-01.jpg"
                  alt="collection-image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* base collection section end here  */}

      {/* new collection section start here  */}
      <section>
        <div className="container mx-auto ">
          <div className="bg-[url('./public/collection.jpg')] bg-cover bg-fixed">
            <div className=" w-full min-h-screen flex flex-col justify-center items-center bg-black bg-opacity-25">
              <h5 className="text-white ">New Collection</h5>
              <h2 className="text-white text-4xl font-bold py-5">
                Be different in your own way!
              </h2>
              <h3 className="text-white text-3xl font-bold">
                Find your unique style.
              </h3>
              <Link to={"/shop"}>
                <button className="capitalize bg-black text-white px-7 py-3 w-fit mt-10 hover:text-purple-100 transition">
                  shop collection
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* new collection section end here  */}

      {/* summer collection section start here  */}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse sm:flex-row sm:mt-20 mb-10 ">
            <div className="xl:w-full h-full sm:bg-pink-100">
              <img
                src="./public/collection-03.jpg"
                alt=""
                className="sm:ml-5 sm:-mt-10 sm:mb-10 w-full sm:w-auto "
              />
            </div>
            <div className="  relative py-32 sm:py-0">
              <div className="flex flex-col justify-center w-full h-full pl-10 xl:pl-0 xl:-ml-16">
                <h5 className="text-gray-600">Women</h5>
                <h2 className="text-black text-4xl font-bold py-5">
                  Spring Summer Collection
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id
                  leo tempor, congue justo at, lobortis orci. Aliquam venenatis
                  dui lectus, eu convallis turpis convallis et. Pellentesque.
                </p>
                <Link to={"/shop/women"}>
                  <button className="capitalize bg-black text-white px-7 py-3 w-fit mt-10 hover:text-purple-100 transition">
                    See Whole Collection
                  </button>
                </Link>
              </div>
              <div className="absolute inset-0 w-1/2  h-full bg-pink-100 -z-10 sm:hidden "></div>
            </div>
          </div>
        </div>
      </section>
      {/* summer collection section end here  */}

      {/* on sale section start here  */}
      <section className="py-10">
        <h5 className="text-center text-gray-400 text-base mb-2">
          summer collection
        </h5>
        <h2 className="text-center text-4xl font-bold capitalize mb-5">
          On Sale T-Shirts
        </h2>
        <div className="py-5">
          <Product product={onSaleProduct} />
        </div>
      </section>
      {/* on sale section end here  */}

      <section className="py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <Link to={"/shop/man"}>
              <div className="w-full h-full relative">
                <img src="./public/cat-men.jpg" alt="" className="w-full" />
                <div className="absolute bottom-5 left-5 right-5 bg-gray-100 py-2 z-10">
                  <h6 className="text-center font-bold uppercase">men</h6>
                  <p className="text-center text-xs text-gray-500 font-semibold uppercase">
                    10 Products
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"/shop/women"}>
              <div className="w-full h-full relative">
                <img src="./public/cat-women.jpg" alt="" className="w-full" />
                <div className="absolute bottom-5 left-5 right-5 bg-gray-100 py-2 z-10">
                  <h6 className="text-center font-bold uppercase">women</h6>
                  <p className="text-center text-xs text-gray-500 font-semibold uppercase">
                    10 Products
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
