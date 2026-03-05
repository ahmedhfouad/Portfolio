import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ProjectCymatics from "./pages/ProjectCymatics";
import ProjectOrbit from "./pages/ProjectOrbit";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects/cymatics-resonance",
    Component: ProjectCymatics,
  },
  {
    path: "/projects/orbit-lighting",
    Component: ProjectOrbit,
  },
  {
    path: "/about",
    Component: About,
  },
]);
