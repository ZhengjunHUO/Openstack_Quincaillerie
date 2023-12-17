import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "./pages/Root";
import { EventsLayout } from "./pages/EventsRoot";

import { HomePage } from "./pages/Home";
import { EventsPage, EventsLoader } from "./pages/Events";
import { EventDetailPage } from "./pages/EventDetail";
import { NewEventPage } from "./pages/NewEvent";
import { EditEventPage } from "./pages/EditEvent";
import { ErrorPage } from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: EventsLoader,
          },
          { path: "new", element: <NewEventPage /> },
          { path: ":id", element: <EventDetailPage /> },
          { path: ":id/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
