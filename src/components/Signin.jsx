import React, {useState} from 'react';
import Logo from "./Logo";
import Navigator from "./Navigator";
import Footer from "./Footer";
import axios from "axios";
import { createBrowserHistory } from "history";
function Signin(props) {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorss, setErrorss] = React.useState({errors: {}});
    const history = createBrowserHistory();
    const handleChangeRoute = () => {
        history.push('/');
        window.location.reload();
    };

    const validate = () => {

        const errors = {};
        if (username.trim() === '') {
            errors.username = 'Username is required!';
        }
        if (password.trim() === '') {
            errors.password = 'Password is required!';
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
            url: 'https://at.usermd.net/api/user/auth',
            data: {
                login: username,
                password: password
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.token);
            handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.password = 'Given username doesn\'t exists or password is wrong!';
            setErrorss({ errors: errors || {} });
            console.log(error);
        });
    };

    return (
        <div style={{width: '1000px', margin: 'auto'}}>
            <Logo/>
            <Navigator/>
            <form onSubmit={handleSubmit}>
            <div id="id" className="p-5">
                <div className="rounded-4 p-3" style={{width: 500, margin: 'auto', backgroundColor: '#7fbfff'}}>
                    <div className="text-black fs-5" style={{width: 300, margin: 'auto',}}>
                        <p className="fs-3 text-center fw-bold" >Logowanie</p>
                        <div className="form-body">
                            <div className="login">
                                <label className="form__label" htmlFor="login" >Login: </label>
                                <input className="form-control" type="text"  id="login" onChange={(e) => setUsername(e.target.value)} />
                                {errorss.errors.username &&
                                    <div className="alert alert-danger">{errorss.errors.username}</div>}
                            </div>
                            <div className="password">
                                <label className="form__label" htmlFor="password">Hasło </label>
                                <input className="form-control" type="password" id="password"  onChange={(e) => setPassword(e.target.value)}/>
                                {errorss.errors.password &&
                                    <div className="alert alert-danger">{errorss.errors.password}</div>}
                            </div>

                        </div>
                        <div className="footer" style={{textAlign: 'center', marginTop: 30, marginBottom: 20}}>
                            <button type="submit" className="btn btn-primary">Zaloguj się</button>
                        </div>
                    </div>

                </div>
            </div>
            </form>
            <Footer/>

        </div>
    )
}

export default Signin;
