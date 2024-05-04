import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Home from './comp/Pages/Home.jsx'
import About from './comp/Pages/About.jsx'
import Contact from './comp/Pages/Contect.jsx'

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <App />,

//       children: [
//         {
//           path: "",
//           element: <Home />
//         },
//         {
//           path: "about",
//           element: <About />
//         },
//         {
//           path: "contact",
//           element: <Contact />
//         },
//       ]
//     }
//   ]
// )

//same thing like above commented 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* thsi is a wraper of all routes || sed via props to App component */}
  </React.StrictMode>,
)
