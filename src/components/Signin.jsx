import React, {useState} from 'react';
import Logo from "./Logo";
import Navigator from "./Navigator";
import Footer from "./Footer";

function Signin() {
    return (
        <div style={{width: '1000px', margin: 'auto'}}>
            <Logo/>
            <Navigator/>
            <div id="id" className="p-5">
                <div className="rounded-4 p-3" style={{width: 500, margin: 'auto', backgroundColor: '#7fbfff'}}>
                    <div className="text-black fs-5" style={{width: 300, margin: 'auto',}}>
                        <p className="fs-3 text-center fw-bold">Logowanie</p>
                        <div className="form-body">
                            <div className="email">
                                <label className="form__label" htmlFor="email">E-mail </label>
                                <input className="form-control" type="email" id="email" placeholder="Email"/>
                            </div>
                            <div className="confirm-password">
                                <label className="form__label" htmlFor="confirmPassword">Potwierdź hasło </label>
                                <input className="form-control" type="password" id="confirmPassword"
                                       placeholder="Potwierdź hasło"/>
                            </div>

                        </div>
                        <div className="footer" style={{textAlign: 'center', marginTop: 30, marginBottom: 20}}>
                            <button type="submit" className="btn btn-primary">Zaloguj się</button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default Signin;
