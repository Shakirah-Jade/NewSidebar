import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import FileShare from "./routes/FileShare";
import Home from "./routes/Home";
import Inbox from "./routes/Inbox";
import Sent from "./routes/Sent";
import Drafts from "./routes/Drafts";
import Navbar from "./components/Navbar";
import "./App.css";
import Archieve from "./routes/Archieve";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppLayout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/reports" element={<Reports />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "fileshare",
        element: <FileShare />,
      },
      {
        path: "inbox",
        element: <Inbox />,
      },
      // {
      //   path: "sent",
      //   element: <Sent />,
      // },
      {
        path: "drafts",
        element: <Drafts />,
      },
      {
        path: "archieve",
        element: <Archieve />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
