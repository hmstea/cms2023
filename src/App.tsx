import 'App.css';
import {Outlet} from 'react-router-dom';

import {AuthProvider} from "./context/AuthContext";
import NavBar from "./components/NavBar";


function App() {
    return (
        <AuthProvider>
            <div className='m-10 h-full'>
                <NavBar/>
                <Outlet/>
            </div>
        </AuthProvider>
    );
}

export default App;
