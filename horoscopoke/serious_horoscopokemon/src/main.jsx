import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom';
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Today from './pages/Today.jsx';
import Yersterday from './pages/Yersterday.jsx';
import Tomorrow from './pages/Tomorrow.jsx';
import ErrorPage from './pages/ErrorPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/About",
        element: <About />
      },

      {
        path: "/Today",
        element: <Today />
      },

      {
        path: "/Yersterday",
        element: <Yersterday />,
      },

      {
        path: "Tomorrow",
        element: <Tomorrow />,
      }
    ]
  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
