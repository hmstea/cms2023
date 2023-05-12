import Login from "../components/login/Login";

function LoginPage() {

    return (
        <section className='text-center h-full flex-col'>
            <h1 className='font-bold text-5xl'>Login</h1>
            <div className='mt-20'>
                <Login/>
            </div>
        </section>
    );
}

export default LoginPage;