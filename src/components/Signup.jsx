import React, {useState} from 'react';
import Footer from "./Footer";
import Logo from "./Logo";
import Navigator from "./Navigator";

function Signup() {
    return (
        <div style={{width: '1000px', margin: 'auto'}}>
            <Logo/>
            <Navigator/>
            <div id="id" className="p-5">
                <div className="rounded-4 p-3" style={{width: 500, margin: 'auto', backgroundColor: '#7fbfff'}}>
                    <div className="text-black fs-5" style={{width: 300, margin: 'auto',}}>
                        <p className="fs-3 text-center fw-bold">Rejestracja</p>
                        <div className="form-body">
                            <div className="username">
                                <label className="form__label rounded-top-1" for="firstName">Imię i nazwisko </label>
                                <input class="form-control" type="text" id="firstName" placeholder="Imię i nazwisko"/>
                            </div>
                            <div className="lastname">
                                <label className="form__label" for="lastName">Login: </label>
                                <input class="form-control" type="text" name="" id="lastName" placeholder="login"/>
                            </div>
                            <div className="email">
                                <label className="form__label" for="email">E-mail </label>
                                <input class="form-control" type="email" id="email" placeholder="Email"/>
                            </div>
                            <div className="password">
                                <label className="form__label" for="password">Hasło </label>
                                <input class="form-control" type="password" id="password" placeholder="Hasło"/>
                            </div>
                            <div className="confirm-password">
                                <label className="form__label" for="confirmPassword">Potwierdź hasło </label>
                                <input class="form-control" type="password" id="confirmPassword"
                                       placeholder="Potwierdź hasło"/>
                            </div>

                        </div>
                        <div className="footer" style={{textAlign: 'center', marginTop: 30, marginBottom: 20}}>
                            <button type="submit" className="btn btn-primary">Zarejestruj się</button>
                        </div>
                    </div>

                </div>
            </div>
                <Footer/>

        </div>
    )
}

export default Signup;
