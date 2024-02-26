import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomePage, DetailPage} from "../pages/index"
import pathRoute from '../util/pathRoute'
import LayoutAuthentication from '../layouts/LayoutAuthentication'

const router = createBrowserRouter([
  {
    path: pathRoute.HOME,
    element: <HomePage/>
  },
  {
    path: pathRoute.DETAIL,
    element: <DetailPage/>
  },
  {
    path:pathRoute.SIGNIN,
    element: <LayoutAuthentication></LayoutAuthentication>
  }
])

const Routes = () => (
  <RouterProvider router={router} />
)

export default Routes