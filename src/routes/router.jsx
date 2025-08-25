import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Pages/Home/Home/Home";
import Facilities from "../components/Pages/Facilities/Facilities";
import JoinCommunity from "../components/Pages/JoinComunity/JoinComunity";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
     children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/facilities",
        element: <Facilities/>,
      },
      {
        path: "/comunity",
        element: <JoinCommunity/>,
      },
    ],
  },
]);