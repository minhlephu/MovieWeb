import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  BookTicket,
  DetailPage,
  MovieManage,
  CinemaManage,
  ShowManage,
  TheaterManage,
  TimeFrameManage,
  UserManage,
} from "../pages/index";
import pathRoute from "../util/pathRoute";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import LayoutAdmin from "../layouts/AdminLayout/LayoutAdmin";
import UserInfo from "../pages/UserInfo";

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
    element: <LayoutAuthentication />,
  },
  {
    path: pathRoute.ADMIN,
    element: <LayoutAdmin />,
    children: [
      {
        path: "movie-manage",
        element: <MovieManage />,
      },
      {
        path: "cinema-manage",
        element: <CinemaManage />,
      },
      {
        path: "show-manage",
        element: <ShowManage />,
      },
      {
        path: "theater-manage",
        element: <TheaterManage />,
      },
      {
        path: "timeframe-manage",
        element: <TimeFrameManage />,
      },
      {
        path: "user-manage",
        element: <UserManage />,
      },
    ],
  },
  {
    path: pathRoute.BOOKTICKETS,
    element: <BookTicket />,
  },
  {
    path: pathRoute.USERINFO,
    element: <UserInfo />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
