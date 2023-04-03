import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Register from '../pages/register';
import Payment from '../pages/payment';

class App extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">RPT Payment Kiosk</a>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse" id="navbarColor01">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Menu</a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/">Home</Link>
                                        <Link className="dropdown-item" to="/about">About</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/register">Register</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/about' element={< About />}></Route>
                    <Route exact path='/register' element={< Register />}></Route>
                    <Route exact path='/payment' element={< Payment />}></Route>
                </Routes>
            </Router>
        );
    }
}
 
export default App;