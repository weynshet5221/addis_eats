import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Menu from "./menu/Menu";
import DishDetail from "./pages/DishDetail";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Favorites from "./favorites/Favorites";
import Orders from "./orders/Orders";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import RequireAuth from "./auth/RequireAuth";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminMenu from "./admin/AdminMenu";
import AdminOrders from "./admin/AdminOrders";
import AdminOrderDetails from "./admin/AdminOrderDetails";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="menu/:id" element={<DishDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="orders" element={<Orders />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />

          <Route element={<RequireAuth />}>
            <Route path="checkout" element={<Checkout />} />
          </Route>

          <Route
            path="order-confirmation/:id"
            element={<OrderConfirmation />}
          />

          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/menu" element={<AdminMenu />} />
          <Route path="admin/orders" element={<AdminOrders />} />
          <Route
            path="admin/orders/:id"
            element={<AdminOrderDetails />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;