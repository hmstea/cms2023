

type Props = {
    login:()=>void;
    text: string;
    icon: JSX.Element
}

function LoginButton({login, text, icon}: Props) {

    return (
       <button className='mb-3 p-4 w-[300px] text-2xl font-semibold flex items-center justify-center m-auto  border-2 bg-gray-50'
                                      onClick={login}><div className='mt-1.5 mr-2'>{icon}</div> {text}</button>
    );
}

export default LoginButton;