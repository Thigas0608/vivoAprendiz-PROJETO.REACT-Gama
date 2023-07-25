import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
