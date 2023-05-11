type Props = {
    login:()=>void;
    text: string;
}

function LoginButton({login, text}: Props) {

    return (
        <button onClick={login}>{text}</button>
    );
}

export default LoginButton;