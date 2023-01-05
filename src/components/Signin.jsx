import React, {useState} from 'react';

function Signin() {
    return (
        <div className="text-black fw-bold fs-4" style={{width: 500, margin: 'auto', marginTop: 100}}>
            <div className="form-body">
                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Login: </label>
                    <input className="form-control" type="text" name="" id="lastName" placeholder="login"/>
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Hasło </label>
                    <input className="form-control" type="password" id="password" placeholder="Hasło"/>
                </div>
            </div>
        </div>
    )
}

export default Signin;
