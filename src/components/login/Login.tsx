import LoginButton from "components/ui/LoginButton";
import useLoginResult from "../../hooks/useLoginResult";
import {Navigate} from "react-router-dom";
import {useAuthContext} from "../../context/AuthContext";

function Login() {
    const rtnUrl = useLoginResult();
    const auth = useAuthContext();
    if (rtnUrl == null) return (<div>loading....</div>);
    if (rtnUrl !== "") return (<Navigate to={rtnUrl} replace/>);

    return (
        <div>
            <LoginButton login={() => {
                auth?.login('google')
            }} text='google'/>
            <LoginButton login={() => {
                auth?.login('github')
            }} text='github'/>
        </div>
    );
}

export default Login;