import Menu from '../pages/Menu.jsx';
import MainPage from '../pages/MainPage.jsx';
import Profile from '../pages/Profile.jsx';
import Login from '../pages/Login.jsx';
import LoginError from '../pages/LoginError.jsx'
const MainPageStocks = document.getElementById('mainpage-content-stocks');
const MainPageAbout = document.getElementById('mainpage-content-about');
const MainPageContacts = document.getElementById('.mainpage-content-contacts');

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu/>,
    },
    {
        path: "mainpage/",
        element: <MainPage />,
    },
    {
        path: 'mainpage#stocks',
        element: MainPageStocks,
    },
    {
        path: 'mainpage#about',
        element: MainPageAbout,
    },
    {
        path: 'mainpage#contacts',
        element: MainPageContacts,
    },
    {
        path: 'profile/',
        element: <Profile/>,
    },
    {
        path: 'login/',
        element: <Login/>,
    },
    {
        path: 'login/error',
        element: <LoginError/>
    }
]);

function MyRouter() {
    return (<>
        <RouterProvider router={router} />
    </>);
}

export default MyRouter;