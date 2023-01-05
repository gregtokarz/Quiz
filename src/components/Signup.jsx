import React, {useState} from 'react';

function Signup() {
    return (
        <div class="text-black fw-bold fs-4" style={{width: 500, margin: 'auto', marginTop: 100 }}>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">Imię i nazwisko </label>
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
                    <input class="form-control" type="password" id="confirmPassword" placeholder="Potwierdź hasło"/>
                </div>
            </div>
            <div class="footer" style={{marginLeft: 'auto'}}>
                <button type="submit"  class="btn btn-primary">Register</button>
            </div>
        </div>
    )
}

export default Signup;
