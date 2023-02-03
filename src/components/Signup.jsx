import React, {useState} from 'react';
import Footer from "./Footer";
import Logo from "./Logo";
import Navigator from "./Navigator";
import { createBrowserHistory } from "history";
import axios from "axios";


function Signup(props){
    const history= createBrowserHistory();
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [errorss, setErrorss] = React.useState({errors: {}});
    const handleChangeRoute = () => {
        alert("Konto zostało dodane pomyślnie")
        history.push('/signin');
        window.location.reload();
    };

    const validate = () => {

        const errors = {};
        if (username.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (email.trim() === '') {
            errors.email = 'Email is required!';
        }
        if (password.trim() === '') {
            errors.password = 'Password is required!';
        }
        if (confirmPassword.trim() === '') {
            errors.confirmPassword = 'Confirm password is required!';
        }
        if (confirmPassword !==password) {
            errors.confirmPassword = 'Password are not the same!';
        }

        return Object.keys(errors).length === 0 ? null : errors;

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = validate();
        setErrorss({ errors: errors || {} })
        if (errors) return;


        axios({
            method: 'post',
            url: 'https://at.usermd.net/api/user/create',
            data: {
                name: username,
                email: email,
                password: password
            }
        }).then((response) => {
            handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.password = 'Given username doesn\'t exists or password is wrong!';
            console.log(error);
    })}

    return (
        <div style={{width: '1000px', margin: 'auto'}}>
            <Logo/>
            <Navigator/>
            <form onSubmit={handleSubmit}>
            <div id="id" className="p-5">
                <div className="rounded-4 p-3" style={{width: 500, margin: 'auto', backgroundColor: '#7fbfff'}}>
                    <div className="text-black fs-5" style={{width: 300, margin: 'auto',}}>
                        <p className="fs-3 text-center fw-bold">Rejestracja</p>
                        <div className="form-body">
                            <div className="lastname">
                                <label className="form__label" for="lastName">Login </label>
                                <input className="form-control" type="text" id="lastName" onChange={(e) => setUsername(e.target.value)}/>
                                {errorss.errors.username &&
                                    <div className="alert alert-danger">{errorss.errors.username}</div>}
                            </div>
                            <div className="email">
                                <label className="form__label" for="email">E-mail </label>
                                <input className="form-control" type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                                {errorss.errors.email &&
                                    <div className="alert alert-danger">{errorss.errors.email}</div>}
                            </div>
                            <div className="password">
                                <label className="form__label" for="password">Hasło </label>
                                <input className="form-control" type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                                {errorss.errors.password &&
                                    <div className="alert alert-danger">{errorss.errors.password}</div>}
                            </div>
                            <div className="confirm-password">
                                <label className="form__label" for="confirmPassword">Potwierdź hasło </label>
                                <input className="form-control" type="password" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
                                {errorss.errors.confirmPassword &&
                                  <div className="alert alert-danger">{errorss.errors.confirmPassword}</div>}
                            </div>

                        </div>
                        <div className="footer" style={{textAlign: 'center', marginTop: 30, marginBottom: 20}}>
                            <button type="submit" className="btn btn-primary">Zarejestruj się</button>
                        </div>
                    </div>

                </div>
            </div>
            </form>
                <Footer/>

        </div>
    )
}
export default Signup;
