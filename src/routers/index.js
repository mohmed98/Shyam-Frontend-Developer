import { createBrowserRouter } from "react-router-dom";
import DashboardContainer from "../modules/dashboard/container";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardContainer />,
  },
]);
