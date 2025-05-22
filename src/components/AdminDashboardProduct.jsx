import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "../features/ProductApi";
import { Link } from "react-router-dom";

const AdminDashboardProduct = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  const [removeProduct] = useRemoveProductMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <div>
        <div className="flex justify-between items-center gap-5 bg-pink-200">
          <select className="">
            <option value="">All Products</option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
            <option value="4">Category 4</option>
            <option value="5">Category 5</option>
          </select>
          <input
            type="text"
            placeholder="serach products...."
            className="w-full"
          />
          <select className="">
            <option value="">None</option>
            <option value="1">Price(highest - lowest)</option>
            <option value="2">Price(lowest - highest)</option>
            <option value="3">a-z</option>
            <option value="4">z-a</option>
          </select>
          <div className="basis-3/12 flex justify-end">
            <Link to={"/admin_dashboard/add_product"}>
              <button className="py-2 px-4 bg-green-400 rounded">
                Add Products
              </button>
            </Link>
          </div>
        </div>
        <div>
          {data?.map((product) => {
            return (
              <div key={product.id}>
                <div className="flex justify-between items-center shadow py-1 px-3 rounded-sm my-5">
                  <img
                    src={product.imageUrl[0]}
                    alt={product.title}
                    className="w-20 h-20 rounded"
                  />
                  <div>
                    <strong>Title :</strong> {product.title}
                  </div>
                  <div>
                    <strong>Price :</strong> BDT - {product.price}
                  </div>
                  <div>
                    <strong>Stock :</strong> {product.stock}
                  </div>
                  <div className="flex space-x-5">
                    <Link to={`/admin_dashboard/edit_product/${product.id}`}>
                      <button className="py-1 px-3 bg-pink-300 rounded capitalize text-sm font-semibold">
                        edite
                      </button>
                    </Link>
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="py-1 px-3 bg-red-500 rounded capitalize text-sm font-semibold"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardProduct;
