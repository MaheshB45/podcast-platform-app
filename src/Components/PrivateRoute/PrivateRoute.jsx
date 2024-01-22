// firebase Authentication
import { useAuthState } from 'react-firebase-hooks/auth';
// imorted firebase file
import { auth } from '../../firebase';
// React router dom library
import { Navigate ,Outlet } from 'react-router-dom';

import Loader from '../Common Components/Loader/Loader';
// React toastifu library
//import {toast} from "react-toastify"

const PrivateRoute = () => {
    const [user, loading, error] = useAuthState(auth);

    if (loading){
        return <Loader />;
    }
    else if (!user || error) {
        //toast.error("Please Signup or Login");
        return <Navigate to="/" replace />;
    } else {
        return <Outlet />;
    }
};

export default PrivateRoute;