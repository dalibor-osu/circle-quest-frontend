import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import App from './Pages/App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
  },
]);


root.render(
    <RouterProvider router={router} fallbackElement={<App />}></RouterProvider>
);

