import * as React from "react";
import {CSSProperties} from "react";
import NotLoginIcon from '../atoms/NotLoginIcon';

const iconStyle: CSSProperties = {
    height: '55px',
    width: '55px',
};

const LoginButton = () => {
    const loginButtonClickHandler = (e: any) => {
        e.preventDefault();
        alert("login button clicked")
    };

    return (
        <div className='loginIcon' onClick={loginButtonClickHandler} style={iconStyle}>
            <NotLoginIcon width='55px' height='55px'/>
        </div>
    );
};

export default LoginButton;