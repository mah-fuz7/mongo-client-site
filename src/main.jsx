import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App';
import Card from './Components/Card';
import UpdateUserData from './Pages/UpdateUserData';

const router = createBrowserRouter([
  {
    path: "/",
   Component:App
  },
  {
    path:'/users',
    Component:Card
  },
  {
    path:'users/:id',
    loader: ({params})=>fetch(`http://localhost:3000/users/${params.id}`),
    Component:UpdateUserData,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
