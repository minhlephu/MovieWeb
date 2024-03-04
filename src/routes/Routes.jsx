import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, DetailPage } from "../pages/index";
import pathRoute from "../util/pathRoute";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import LayoutAdmin from "../layouts/AdminLayout/LayoutAdmin";
import MovieManage from "../pages/Admin/Movie/MovieManage";
import MovieAddNew from "../pages/Admin/Movie/MovieAddNew";

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
    children:[{
      path:"movieManage",
      element:<MovieManage></MovieManage>
    },{
      path:"add-movie",
      element:<MovieAddNew/>
    }
    ]
  },
  
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
