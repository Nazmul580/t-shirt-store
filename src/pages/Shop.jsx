import { useSearchParams } from "react-router-dom";
import Product from "../components/Product";
import { useGetProductsQuery } from "../features/ProductApi";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const params = { ...Object.fromEntries(searchParams.entries()) };
  const Params = new URLSearchParams(searchParams);
  const category = Params.get("category") || undefined;
  const name = Params.get("name") || undefined;
  const price = Params.get("price") || undefined;
  const handleChange = (e) => {
    switch (e.target.value) {
      case "lowToHigh":
        Params.delete("name");
        Params.set("price", "asc");
        setSearchParams(Params);
        break;

      case "highToLow":
        Params.delete("name");
        Params.set("price", "desc");
        setSearchParams(Params);
        break;

      case "a-z":
        Params.delete("price");
        Params.set("name", "asc");
        setSearchParams(Params);
        break;

      case "z-a":
        Params.delete("price");
        Params.set("name", "desc");
        setSearchParams(Params);
        break;

      default:
        break;
    }
  };
  const { data, isLoading, error } = useGetProductsQuery({
    category,
    name,
    price,
  });
  return (
    <div>
      <div className="container mx-auto">
        <div>
          <div className="flex justify-between items-center my-5">
            <p className="text-gray-500">
              Showing 1-{data?.length < 8 ? data?.length : "8"} of{" "}
              {data?.length} results
            </p>
            <select
              onChange={handleChange}
              className="text-gray-500 outline-none"
            >
              <option value={""}>Default Sorting</option>
              <option value={"lowToHigh"}>Price : Lowest - Highest</option>
              <option value={"highToLow"}>Price : Highest - Lowest</option>
              <option value={"a-z"}>Name : A - Z</option>
              <option value={"z-a"}>Name : Z - A</option>
            </select>
          </div>
          <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {!isLoading && data?.length > 0 && <Product product={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
