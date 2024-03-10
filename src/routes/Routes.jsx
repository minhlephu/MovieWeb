import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, DetailPage, BookTicket } from "../pages/index";
import pathRoute from "../util/pathRoute";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import LayoutAdmin from "../layouts/AdminLayout/LayoutAdmin";

const router = createBrowserRouter([
  {
    path: pathRoute.HOME,
    element: <HomePage />,
  },
  {
    path: pathRoute.DETAIL,
    element: <DetailPage />,
  },
  {
    path: pathRoute.SIGNIN,
    element: <LayoutAuthentication></LayoutAuthentication>,
  },
  {
    path: pathRoute.ADMIN,
    element: <LayoutAdmin></LayoutAdmin>,
  },
  {
    path: pathRoute.BOOKTICKETS,
    element: <BookTicket />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
