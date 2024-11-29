import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
// import TotalProduct from "./components/TotalProduct";  // Import TotalProduct component
// import PendingOrder from "./components/PendingOrder";  // Import PendingOrder component
// import RejectedOrder from "./components/RejectedOrder"; // Import RejectedOrder component
// import DailySale from "./components/DailySale";        // Import DailySale component
// import AddShop from "./components/AddShop";            // Import AddShop component
// import TotalShops from "./components/TotalShops";      // Import TotalShops component

// import AddProduct from "./components/AddProduct";      // Import AddProduct component


import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AddShopDeliveryBoy from "./pages/AddShopDeliveryBoy";
import AddShop from "./pages/AddShop";
import AddDeliveryBoy from "./pages/AddDeliveryBoy";
import TotalOrders from "./pages/TotalOrders";
import AdvancedLoginPage from "./pages/AdvancedLoginPage";
import AddProduct from "./pages/AddProduct";
import NewOrder from "./pages/NewOrder";
// import AddDeliveryBoy from "./pages/AddDeliveryBoy";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Header/>
        <Routes>
          
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="/new-order" element={<NewOrder />} />
    {/*       <Route path="/total-product" element={<TotalProduct />} />
          <Route path="/pending-order" element={<PendingOrder />} />
          <Route path="/rejected-order" element={<RejectedOrder />} />
          <Route path="/daily-sale" element={<DailySale />} />*/}
          {/* <Route path="/add-product" element={<AddProduct />} />  */}
         
          {/* <Route path="/total-shops" element={<TotalShops />} /> */}
          <Route path="/profile" element={<AdvancedLoginPage />} />
          <Route path="/add-product" element={<AddProduct />} />



          <Route path="/total-orders" element={<TotalOrders />} />

          <Route path="/add-shop" element={<AddShop />} />
          <Route path="/add-delivery-boy" element={<AddDeliveryBoy />} />

          {/* <Route path="/add-delivery-boy" element={<AddDeliveryBoy />} /> */}



        </Routes>
      </Router>
    </div>
  );
}

export default App;
