import {useAuthContext} from "../context/AuthContext";
import {Navigate, useLocation} from "react-router-dom";
function AuthPage({children}: {children: JSX.Element}) {
    const {pathname} = useLocation();
    const auth = useAuthContext();
    if(auth?.user === null) return (<div>loading!!!</div>);
    if(auth?.user === undefined || auth.user?.uid === undefined || auth.user.uid === '') return (<Navigate to={`/login?rtnUrl=${pathname}`} state={{'from':pathname}} replace/>)
    return children;
}

export default AuthPage;