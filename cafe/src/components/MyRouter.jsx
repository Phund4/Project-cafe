import Menu from '../pages/Menu.jsx'
import MainPage from '../pages/MainPage.jsx';
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
]);

function MyRouter() {
    return (<>
        <RouterProvider router={router} />
    </>);
}

export default MyRouter;