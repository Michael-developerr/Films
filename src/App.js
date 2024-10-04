
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';


function App() {
    return (
        <div className="App">
            <  Header />
            <div className='container'>
                < Outlet />
            </div>
        </div>
    );
}

export default App;
