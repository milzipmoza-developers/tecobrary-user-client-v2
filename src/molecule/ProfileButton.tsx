import {CSSProperties} from "react";
import * as React from 'react';
import NotLoginIcon from '../atom/NotLoginIcon';
import UserIcon from "../atom/UserIcon";

const iconStyle: CSSProperties = {
    height: '55px',
    width: '55px',
};

const buttonStyle: CSSProperties = {
    borderRadius: '50%',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    width: 'fit-content',
};

const ProfileButton = ({loggedIn}: any) => {
    const profileButtonClickHandler = (e: any) => {
        e.preventDefault();
        alert("profile button clicked")
    };

    const userButtonClickHandler = (e: any) => {
        e.preventDefalut();
        alert("user button clicked")
    };

    const profileButton = (
        <div className='profileIcon' onClick={profileButtonClickHandler} style={iconStyle}>
            <NotLoginIcon width='55px' height='55px'/>
        </div>
    );

    const userButton = (
        <div className='userIcon' onClick={userButtonClickHandler} style={iconStyle}>
            <UserIcon imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4.png' width='55px' height='55px'/>
        </div>
    );

    return (
        <div className='profileButton' style={buttonStyle}>
            {loggedIn ? userButton : profileButton}
        </div>
    );
};

export default ProfileButton;