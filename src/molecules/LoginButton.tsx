import * as React from "react";
import {CSSProperties} from "react";
import {useHistory} from 'react-router-dom';
import NotLoginIcon from '../atoms/NotLoginIcon';

const iconStyle: CSSProperties = {
    height: '55px',
    width: '55px',
};

const LoginButton = () => {
    const history = useHistory();

    const loginButtonClickHandler = (e: any) => {
        e.preventDefault();
        history.push("/authenticate")
    };

    return (
        <div className='loginIcon' onClick={loginButtonClickHandler} style={iconStyle}>
            <NotLoginIcon width='55px' height='55px'/>
        </div>
    );
};

export default LoginButton;