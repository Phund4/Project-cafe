import Menu from '../pages/Menu.jsx'
import MainPage from '../pages/MainPage.jsx';
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
]);

function MyRouter() {
    return (<>
        <RouterProvider router={router} />
    </>);
}

export default MyRouter;