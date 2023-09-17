import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Formulaireinscription from "../src/containers/FormulairePage/Form.JSX";
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Serviceline from './components/pages/service.jsx'
// import ContactsFood from './components/pages/Contacts.jsx'
// import HistoireGenesis from './components/pages/History.jsx'
// import Accueil from './components/pages/Paccueil.jsx'
// import Serviceline from './components/pages/service.jsx'
// import ErrorPage from './errors/error-page.jsx'
import HistoireGenesis from './components/pages/History.jsx'
import ContactsFood from './components/pages/Contacts.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"Serviceline",
    element:<Serviceline/>,
  },
  {
    path:"Contacts",
    element:<ContactsFood/>,
  },
  {
    path:"à propos",
    element:<HistoireGenesis/>,
  },
  {
    path:"inscription",
    element:<Formulaireinscription/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
     <RouterProvider router={router}/>,
     {/* <App /> */}
  //  </React.StrictMode>,
)
