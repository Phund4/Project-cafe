import Menu from "../pages/Menu.jsx";
import MainPage from "../pages/MainPage.jsx";
import Profile from "../pages/Profile.jsx";
import Login from "../pages/Login.jsx";
import LoginError from "../pages/LoginError.jsx";
import PizzaPage from "../pages/PizzaPage.jsx";
import BurgerPage from "../pages/BurgerPage.jsx";
import BeerPage from "../pages/BeerPage.jsx";
import Authorization from "../pages/Authorization.jsx";
import Password from "../pages/Password.jsx";
import Email from "../pages/Email.jsx";
import Code from "../pages/Code.jsx";
import StartMob from "../pages/StartMob.jsx";
import About from "../pages/About.jsx";
import Contacts from "../pages/Contacts.jsx";
import Stocks from "../pages/Stocks.jsx";
const MainPageStocks = document.getElementById("mainpage-content-stocks");
const MainPageAbout = document.getElementById("mainpage-content-about");
const MainPageContacts = document.getElementById(".mainpage-content-contacts");

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/menu/",
    element: <Menu />,
  },
  {
    path: "mainpage/",
    element: <MainPage />,
  },
  {
    path: "mainpage#stocks",
    element: MainPageStocks,
  },
  {
    path: "mainpage#about",
    element: MainPageAbout,
  },
  {
    path: "mainpage#contacts",
    element: MainPageContacts,
  },
  {
    path: "profile/",
    element: <Profile />,
  },
  {
    path: "login/",
    element: <Login />,
  },
  {
    path: "login/error",
    element: <LoginError />,
  },
  {
    path: "pizzapage/",
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
  {
    path: "/authorization/",
    element: <Authorization />,
  },
  {
    path: "/password/",
    element: <Password />,
  },
  {
    path: "/email/",
    element: <Email />,
  },
  {
    path: "/code/",
    element: <Code />,
  },
  {
    path: "/",
    element: <StartMob />,
  },
  {
    path: "/about/",
    element: <About />,
  },
  {
    path: "/contacts/",
    element: <Contacts />,
  },
  {
    path: "/stocks/",
    element: <Stocks />,
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
