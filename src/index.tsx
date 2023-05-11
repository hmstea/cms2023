import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import App from "./App";
import AuthPage from "./pages/AuthPage";
import LoginPage from "./pages/LoginPage";
import EventPage from "./pages/EventPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {index: true, path: '/', element: <HomePage/>},
            {path: '/event', element: (<AuthPage><EventPage/></AuthPage>)},
            {path: '/login', element: <LoginPage/>}
        ]
    }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
