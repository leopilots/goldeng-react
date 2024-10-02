import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navegation from './components/navegation.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import CompShowUser from './components/user/ShowUsers.js';
import CompCreateUser from './components/user/CreateUser.js';
import CompEditUser from './components/user/EditUser.js';

import './App.css';

function App() {
    return (
        <div className="App">
            <Navegation />
            <Header />
            
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <CompShowUser />} />
                    <Route path='/create' element={ <CompCreateUser />} />
                    <Route path='/edit/:id' element={ <CompEditUser />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;
