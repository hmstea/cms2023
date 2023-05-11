import LoginButton from "components/ui/LoginButton";
import useLoginResult from "../../hooks/useLoginResult";
import {Navigate} from "react-router-dom";
import {useAuthContext} from "../../context/AuthContext";
import {FcGoogle} from  'react-icons/fc';
import {BsGithub} from 'react-icons/bs';

function Login() {
    const rtnUrl = useLoginResult();
    const auth = useAuthContext();
    if (rtnUrl == null) return (<div>loading....</div>);
    if (rtnUrl !== "") return (<Navigate to={rtnUrl} replace/>);

    return (
        <div className='flex-col'>
            <LoginButton login={() => {
                auth?.login('google')
            }} text='google' icon={<FcGoogle/>}/>
            <LoginButton login={() => {
                auth?.login('github')
            }} text='github' icon={<BsGithub/>}/>
        </div>
    );
}

export default Login;