import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPages from "../Pages/Error/ErrorPages";
import Homes from "../Pages/Home/Homes";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppsDetails from "../Components/AppsDetails/AppsDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPages />,
    children: [
      {
        index: true,
        Component: Homes,
        loader: async () => {
          const res = await fetch("appData.json");
          return res.json();
        },
      },
      {
        path: "/apps",
        Component: Apps,
        loader: async () => {
          const res = await fetch("appData.json");
          return res.json();
        },
      },
      {
        path: "/appDetails/:id",
        Component: AppsDetails,
        loader: async () => {
          const res = await fetch("appData.json");
          return res.json();
        },
      },
      {
        path: "/install",
        Component: Installation,
        loader: async () => {
          const res = await fetch("appData.json");
          return res.json();
        },
      },
    ],
  },
]);
export default routes;
