import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import App from "./App";
import Test from "./components/PlateauJeu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
