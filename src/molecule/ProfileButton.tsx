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
    marginTop: '8px',
    width: 'fit-content',
};

const ProfileButton = ({loggedIn, imgUrl}: any) => {
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
            <UserIcon imgUrl={imgUrl} width='55px' height='55px'/>
        </div>
    );

    return (
        <div className='profileButton' style={buttonStyle}>
            {(loggedIn || imgUrl) ? userButton : profileButton}
        </div>
    );
};

export default ProfileButton;