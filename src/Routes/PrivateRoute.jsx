import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router';
import LoadingSpinner from '../firebase/components/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;