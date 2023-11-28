import "./App.css";
import "./style.scss"
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Single from "./pages/Single.jsx";
import Login from "./pages/Login.jsx";
import Write from "./pages/write.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/single",
        element: <Single />,
      },
      {
        path: "/post/:id",
        element: <Write />,
      }
    ]
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

]);



function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}



export default App;
