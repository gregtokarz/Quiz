import {Link, Navigate} from "react-router-dom";
import Search from "./Search";
import React from "react";
import App from "../App";
import {decodeToken, isExpired} from "react-jwt";
import Signup from "./Signup";
import {createBrowserHistory} from "history";
import axios from "axios";

function Navigator() {
    const history= createBrowserHistory();
    const handleLogout = () => {
        let token;
        token =localStorage.getItem('token');
        const user = decodeToken(token);
        axios({
            method: 'delete',
            url: 'https://at.usermd.net/api/user/logout/'+user.userId,
            data: {
                userId: user.userId
            }
        })

        localStorage.removeItem('token');
        history.push('/');
        window.location.reload();
    };

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary" style={{backgroundColor: '#7fbfff'}}>
        <div className="collapse navbar-collapse "  id="navbarText">
            <ul className="navbar-nav mr-auto ">
                <li className="nav-item">
                    <Link to="/" relative="path" className="nav-link fs-4 fw-bold border-3 border-end border-danger">Home</Link>
                </li>
                {isExpired(localStorage.getItem('token')) &&<li className="nav-item">
                    <Link to="../signin" relative="path" className="nav-link fs-4 fw-bold border-3 border-end border-danger">Logowanie</Link>
                </li> }
                {isExpired(localStorage.getItem('token')) &&<li className="nav-item">
                    <Link to="../signup" relative="path" className="nav-link fs-4 fw-bold ">Rejestracja</Link>
                </li> }
                {!(isExpired(localStorage.getItem('token'))) && <li className="nav-item">
                    <Link to="../add" relative="path" className="nav-link fs-4 fw-bold border-3 border-end border-danger">Dodaj film</Link>
                </li>}
                {!(isExpired(localStorage.getItem('token'))) && <li className="nav-item">
                    <Link to="/" relative="path" className="nav-link fs-4 fw-bold" onClick={() => handleLogout()}>Logout</Link>
                </li>}

            </ul>
        </div>
        <Search/>
    </nav>)
}

export default Navigator;
