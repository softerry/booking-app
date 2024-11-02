import {createBrowserRouter} from 'react-router-dom';
import {Login} from "./components/login";
import {Signup} from "./components/signup";

export const router = createBrowserRouter([
    {path: "/", element: <App/>}
])