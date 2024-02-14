import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, NavLink, Routes, Route} from 'react-router-dom';
import {HotelList} from './HotelList.js';
import {HotelSingle} from './HotelSingle.js';
import {HotelModify} from './HotelModify.js';
import {HotelCreate} from './HotelCreate.js';
import {HotelDelete} from './HotelDelete.js';
import { LoginPage } from './LoginPage.js';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-start">
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link">
                <span className="nav-link">Hotel</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/uj-Hotel`} className="nav-link">
                <span className="nav-link">Hotel hozzáadása</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/LoginPage`} className="nav-link">
                <span className="nav-link">Bejelentkezés</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HotelList/>}/>
        <Route path="/Hotel/:HotelId" element={<HotelSingle/>}/>
        <Route path="/uj-Hotel" element={<HotelCreate/>}/>
        <Route path="/mod-Hotel/:HotelId" element={ <HotelModify /> } />
        <Route path="/delete-Hotel/:HotelId" element={ <HotelDelete /> } />
        <Route path='/LoginPage' element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
