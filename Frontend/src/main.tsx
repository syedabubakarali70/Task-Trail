import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/components/Providers/themeProvider.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Attendance,
  DashBoard,
  Departments,
  ForgetPassword,
  LeaveRequests,
  Login,
  NotFound,
  Notifications,
  Profile,
  SignUp,
  Tasks,
  Task,
  Projects,
  Project,
} from "@/Pages";
import { taskLoader } from "./Pages/Tasks/Task/Task";
import { store } from "@/store";
import { Provider as ReduxProvider } from "react-redux";
import { projectLoader } from "./Pages/Projects/Project";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "profile/:profileId",
        element: <Profile />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "attendance",
        element: <Attendance />,
      },
      {
        path: "departments",
        element: <Departments />,
      },

      {
        path: "forgetpassword",
        element: <ForgetPassword />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "leaverequests",
        element: <LeaveRequests />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "tasks/:taskId",
        element: <Task />,
        loader: taskLoader,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:projectId",
        element: <Project />,
        loader: projectLoader,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </ThemeProvider>
  </StrictMode>
);
