import {createBrowserRouter} from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Home from './home';

export const router = createBrowserRouter([
    {path: "/", element:<Home/>},
    {path: "/login", element:<Login/>},
    {path: "/signup", element:<Signup/>}
]);