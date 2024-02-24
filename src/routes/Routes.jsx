import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomePage, DetailPage} from "../pages/index"
import pathRoute from '../util/pathRoute'


const router = createBrowserRouter([
  {
    path: pathRoute.HOME,
    element: <HomePage/>
  },
  {
    path: pathRoute.DETAIL,
    element: <DetailPage/>
  }
])

const Routes = () => (
  <RouterProvider router={router} />
)

export default Routes