// firebase Authentication
import { useAuthState } from 'react-firebase-hooks/auth';
// imorted firebase file
import { auth } from '../../firebase';
// React router dom library
import { Navigate ,Outlet } from 'react-router-dom';
// React toastifu library
//import {toast} from "react-toastify"

const PrivateRoute = () => {
    const [user, loading, error] = useAuthState(auth);

    if (loading){
        return <p>Loading...</p>;
    }
    if (!user || error) {
        //toast.error("Please Signup or Login");
        return <Navigate to="/" replace></Navigate>;
    }
    return <Outlet />;

};

export default PrivateRoute;