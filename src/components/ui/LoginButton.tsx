

type Props = {
    login:()=>void;
    text: string;
    icon: JSX.Element
}

function LoginButton({login, text, icon}: Props) {

    return (
        <div className='mt-3'><button className='p-4 w-[300px] text-xl'
                     onClick={login}>{icon} {text} </button></div>
    );
}

export default LoginButton;