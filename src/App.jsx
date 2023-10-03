import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Category, Home, Login } from "./Pages";
import { ShearedLayOut } from "./Constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShearedLayOut/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "category/:param1/",
        element: <Category />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
