import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
 import { Buying } from "./pages/Buying";
import AppLayout from "./components/Layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { Renting } from "./pages/Renting";
import { Selling } from "./pages/Selling";
const App = () => { 
  const router = createBrowserRouter([
   {
     path: "/",
     element: <AppLayout />,
     errorElement :<ErrorPage />,
     children:[
      {
        path: "/",
        element: <Home />
      }
      ,
      {
        path: "/about",
        element: <About />
      }
      ,
      {
        path: "/buying",
        element: <Buying />
      }
      ,
      {
        path: "/renting",
        element: <Renting />
      }
      ,
      {
        path: "/selling",
        element: <Selling />
      }
      ,
      {
        path: "/contact",
        element: <Contact />
      }
     ]
   },

  ]);
  
  return <RouterProvider router ={router} />
};

export default App;

