import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { WalletProvider } from "./utils/walletContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Profile from "./components/profile.tsx";
import HomePage from "./pages/homepage.tsx";
import CreatorPage from "./pages/creatorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/creator/:id",
        element: <CreatorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <WalletProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
    ,
  </WalletProvider>
);
