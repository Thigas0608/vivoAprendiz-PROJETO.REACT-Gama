import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import ServicoDetalhe from "./pages/ServicoDetalhe";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/servicos",
      element: <ServicoDetalhe />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
