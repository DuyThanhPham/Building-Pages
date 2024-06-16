import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Layout/Footer/index.tsx";
import Building from "./container/building/index.tsx";
import Home from "./container/home/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "building/:buildingId",
    element: <Building/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
