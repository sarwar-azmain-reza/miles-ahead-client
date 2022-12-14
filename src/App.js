import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Checkout from './Component/Checkout/Checkout';
import CourseDetails from './Component/CourseDetails/CourseDetails';
import Courses from './Component/Courses/Courses';
import FAQ from './Component/FAQ/FAQ';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import Register from './Component/Register/Register';
import Main from './Layout/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/courses',
          loader:()=> fetch('https://miles-ahead-server.vercel.app/courses'),
          element: <Courses></Courses>
        },
        {
          path:'/courses/:courseId',
          loader:({params})=> fetch(`https://miles-ahead-server.vercel.app/courses/${params.courseId}`),
          element: <CourseDetails></CourseDetails>
        },
        {
          path:'/weblog',
          loader: ()=> fetch('https://miles-ahead-server.vercel.app/blogs'),
          element: <Blog></Blog>
        },
        {
          path:'/faq',
          element: <FAQ></FAQ>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/checkout/:courseId',
          loader:({params})=> fetch(`https://miles-ahead-server.vercel.app/courses/${params.courseId}`),
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
        },
      ]
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }
  ])

  return (
    <div className= " ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
