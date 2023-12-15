import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import App from '../App'
import Landing from '../pages/Landing'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import HomePage from '../pages/HomePage'
import ForgotPassword from '../pages/ForgotPassword'
import Confirmation from '../pages/Confirmation'
import PasswordReset from '../pages/PasswordReset'
import { Logout } from '../pages/Logout'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/forgotpassword/:id" element={<PasswordReset />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path='/logout' element={<Logout />} />
        </Route>
    )
)

export default router
