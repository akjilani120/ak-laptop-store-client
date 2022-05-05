import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

function RequireAuth({ children }) {
    const [user, loading] =useAuthState(auth)
    let location = useLocation();
    if(loading){
        return <div className="d-flex justify-content-center align-items-center">
              <Spinner animation="border" variant="warning" />
        </div>
    }
    if (!user) {
     
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(!user.emailVerified){
        return <div>
            <h3 className="text-danger">Your email not verify </h3>
            <h3 className="text-success">Please your email now</h3>
        </div>
    }
   
    return children;
  }
 
  export default RequireAuth;