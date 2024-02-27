import React from "react";
import ReactDOM from "react-dom/client";
import {
  Home,
  About,
  Post,
  Contact,
  Publish,
  Signin,
  Signup,
  Posts,
} from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Notfound from "./pages/notFound/NotFound";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blogs",
    element: <Posts />,
  },
  {
    path: `/post`,
    element: <Post />,
  },
  {
    path: "/publish",
    element: <Publish />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
