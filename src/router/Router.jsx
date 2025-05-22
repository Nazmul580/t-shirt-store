import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "../Layout";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import AdminProtectedRoute from "../components/AdminProtectedRoute";
import UserDashboard from "../pages/dashboard//UserDashboard";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import AdminDashboardHome from "../components/AdminDashboardHome";
import AdminDashboardProduct from "../components/AdminDashboardProduct";
import AdminDashboardUsers from "../components/AdminDashboardUsers";
import AdminDashboardSettings from "../components/AdminDashboardSettings";
import ProductForm from "../components/ProductForm";
import ProductDetails from "../pages/ProductDetails";
import ScrollTop from "../components/ScrollTop";
import UserProtectedRoute from "../components/UserProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/man" element={<Home />} />
          <Route path="/shop/women" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <UserProtectedRoute>
                <Cart />
              </UserProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Register />} />
          <Route path="/shop/details/:productId" element={<ProductDetails />} />

          {/* adminDashboard routes  */}
          <Route
            path="/admin_dashboard"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<AdminDashboardHome />} />
            <Route
              path="/admin_dashboard/products"
              element={<AdminDashboardProduct />}
            />
            <Route
              path="/admin_dashboard/users"
              element={<AdminDashboardUsers />}
            />
            <Route
              path="/admin_dashboard/settings"
              element={<AdminDashboardSettings />}
            />
            <Route
              path="/admin_dashboard/add_product"
              element={<ProductForm />}
            />
          </Route>
          {/* userDashboard routes  */}
          <Route
            path="/user_dashboard"
            element={
              <UserProtectedRoute>
                <UserDashboard />
              </UserProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
