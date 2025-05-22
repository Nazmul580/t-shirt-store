import { Link, Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <div className="flex">
        <aside className="bg-purple-50 basis-1/12 sm:basis-3/12 px-10">
          <div></div>
          <div>
            <ul>
              <li className="capitalize font-semibold">
                <Link to={"/admin_dashboard/"}>dashboard</Link>
              </li>
              <li>
                <Link to={"/admin_dashboard/product"}>Products</Link>
              </li>
              <li>
                <Link to={"/admin_dashboard/users"}>Users</Link>
              </li>
              <li>
                <Link to={"/admin_dashboard/settings"}>Settings</Link>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        </aside>
        <div className="bg-pink-300 basis-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
