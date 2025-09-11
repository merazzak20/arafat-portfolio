import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import router from "./Routes/router.jsx";
import { RouterProvider } from "react-router";
// import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <Toaster position="bottom-center" reverseOrder={false} /> */}
  </StrictMode>
);
