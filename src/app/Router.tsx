import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { LandingPage } from "@/pages/LandingPage";
import { LessonsPage } from "@/pages/LessonsPage";
import { TheoryPage } from "@/pages/TheoryPage";
import { PlaygroundPage } from "@/pages/PlaygroundPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ProjectBriefPage } from "@/pages/ProjectBriefPage";
import { ProjectPlaygroundPage } from "@/pages/ProjectPlaygroundPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "lessons",
        element: <LessonsPage />,
      },
      {
        path: "lesson/:slug/theory",
        element: <TheoryPage />,
      },
      {
        path: "lesson/:slug/play",
        element: <PlaygroundPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "project/:slug/brief",
        element: <ProjectBriefPage />,
      },
      {
        path: "project/:slug/play",
        element: <ProjectPlaygroundPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
