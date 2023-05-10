import 'App.css';
import { Outlet } from 'react-router-dom';

import {AuthProvider} from "./context/AuthContext";


function App() {
  return (
      <AuthProvider>
        <div className='m-10'>
          <Outlet/>
        </div>
      </AuthProvider>
  );
}

export default App;
