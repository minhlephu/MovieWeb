import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomePage,
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
    children: [
      {
        path: "movie-manage",
        element: <MovieManage></MovieManage>,
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
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
