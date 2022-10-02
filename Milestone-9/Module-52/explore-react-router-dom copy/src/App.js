import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";
import Posts from "./components/Posts/Posts";
import Products from "./components/Products/Products";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: '/products',
      element: <Products/>
    },
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/home',
          element: <Home/>
        },
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/friends',
          element: <Friends/>,
          loader: async ()=> fetch(`https://jsonplaceholder.typicode.com/users`)
        },
        {
          path:'/friend/:friendId',
          loader: async ({params:{friendId}})=> fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`),
          element: <FriendDetails/>
        },
       {
        path:'/posts',
        element: <Posts/>,
        loader: async()=> fetch(`https://jsonplaceholder.typicode.com/posts`)
       },
       {
        path:`/post/:postId`,
        loader: async({params:{postId}}) => fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        element:<PostDetails/>
       }
      ]
    },
    {
      path:'*',
      element: <div>Not found !!!!</div>
    }
  ]);

  
  return (<div className="App">
    <RouterProvider router={router}/>
  </div>);
}

export default App;
