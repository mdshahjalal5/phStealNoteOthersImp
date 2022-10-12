import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Phone from './components/Phone';
import Main from './layouts/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children:[
        {
          path:'/',
          element: <Home/>,
          loader: ()=> fetch(`http://localhost:15000/phones`)
        },
        {
          path: 'phone/:phoneId',
          element: <Phone/>,
          loader: ({params})=> fetch(`http://localhost:15000/phones/${params.phoneId}`)
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
