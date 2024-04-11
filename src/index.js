import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";
import { ConfigProvider, theme } from "antd";
import Sponser from "./routes/Sponser";
import Tutorials from "./routes/Tutorials";
import Tutorial from "./routes/Tutorial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/tutorials",
        element: <Tutorials />,
        errorElement: <ErrorPage />,
      },
      {
        path: "tutorials/:tutorialID",
        element: <Tutorial />,
      },
      {
        path: "sponser",
        element: <Sponser />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Layout: {
            headerBg: "#0A0A0B",
            colorText: "#FFFFFF",
            bodyBg: "rgb(29, 29, 32)",
          },
        },
        token: {
          colorPrimary: "#F76C6C",
          colorBgContainer: "#343436",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
