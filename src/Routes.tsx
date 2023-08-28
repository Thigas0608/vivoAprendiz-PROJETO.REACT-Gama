import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import ServicoDetalhe from "./pages/ServicoDetalhe";
import Servico from "./pages/Servico";
import Relatorios from "./pages/Relatorios";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/servicoDetalhe",
      element: <ServicoDetalhe/>,
    },

    {
      path: "/servico",
      element: <Servico/>,
    },

    {
      path: "/relatorios",
      element: <Relatorios/>,
    },

  ]);

  return <RouterProvider router={routes} />;
}
