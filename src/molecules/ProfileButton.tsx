import * as React from "react";
import {CSSProperties} from "react";
import NotLoginIcon from '../atoms/NotLoginIcon';

const iconStyle: CSSProperties = {
    height: '55px',
    width: '55px',
};

const ProfileButton = () => {
    const profileButtonClickHandler = (e: any) => {
        e.preventDefault();
        alert("profile button clicked")
    };

    return (
        <div className='profileIcon' onClick={profileButtonClickHandler} style={iconStyle}>
            <NotLoginIcon width='55px' height='55px'/>
        </div>
    );
};

export default ProfileButton;