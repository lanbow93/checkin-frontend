import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />} >
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />}/>
    </Route>
))

export default router