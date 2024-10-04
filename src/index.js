import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import FavpritePage from './pages/FavpritePage';
import LoginPage from './pages/LoginPage';

import AuthenticationPage from './pages/AuthenticationPage';
import ErrorPage from './pages/ErrorPage';
import MainFilmPage from './pages/MainFilmPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainFilmPage/>,
      },
      {
        path: "/favorite",
        element: <FavpritePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/authentication",
        element: <AuthenticationPage />,
      },

    ]
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";
// import Root from "./Routes/Root";
// import ErrorPage from "./ErrorPage";
// import Contact from "./Routes/Contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "contacts/:contactId",
//     element: <Contact />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );