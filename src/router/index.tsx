import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../views/home";
import Detail from "../views/detail"
const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: "/",
    element: <Navigate to='/home'></Navigate>
  },
]);
export default router