import './App.css';
import Logo from './components/Logo'
import Search from './components/Search'
import Film from './components/Film'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./components/Footer";
import React from "react";
import description from "./components/Description";


function App() {
    return (
        <div id='ba' style={{width: '1000px', margin: 'auto', border: ''}}>
            <div>
                <Logo/>
                <nav className="navbar navbar-expand-lg navbar-light bg-light border">

                    <div className="collapse navbar-collapse font-weight-bold" id="navbarText">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item active rounded ">
                                <a className="nav-link " href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="signin">Logowanie</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="signup">Rejestracja</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="add">Dodaj film</a>
                            </li>
                        </ul>
                    </div>
                    <Search/>
                </nav>


            </div>
            <div class="bg-light">
                <div className="d-flex flex-row justify-content-center bd-highlight ">
                    <div className="p-2 bd-highlight"><Film/></div>
                    <div className="p-2 bd-highlight"><Film/></div>
                    <div className="p-2 bd-highlight"><Film/></div>
                </div>
                <div className="d-flex flex-row justify-content-center bd-highlight ">
                    <div className="p-2 bd-highlight"><Film/></div>
                    <div className="p-2 bd-highlight"><Film/></div>
                </div>
            </div>

            <Footer/>

        </div>
    );
}

export default App;
