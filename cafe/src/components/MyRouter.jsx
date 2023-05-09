import Menu from "../pages/Menu.jsx";
import MainPage from "../pages/MainPage.jsx";
import PizzaPage from "../pages/PizzaPage.jsx";
import BurgerPage from "../pages/BurgerPage.jsx";
import BeerPage from "../pages/BeerPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "mainpage/",
    element: <MainPage />,
  },
  {
    path: "/pizzapage/",
    element: <PizzaPage />,
  },
  {
    path: "/burgerpage/",
    element: <BurgerPage />,
  },
  {
    path: "/beerpage/",
    element: <BeerPage />,
  },
]);

function MyRouter() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default MyRouter;
