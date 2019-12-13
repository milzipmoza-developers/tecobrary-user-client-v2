import {CSSProperties} from "react";
import * as React from "react";
import UserIcon from "../atoms/UserIcon";

const iconStyle: CSSProperties = {
    height: '55px',
    width: '55px',
};

const UserButton = ({imgUrl}: any) => {
    const userButtonClickHandler = (e: any) => {
        e.preventDefault();
        alert("user button clicked")
    };

    return (
        <div className='userIcon' onClick={userButtonClickHandler} style={iconStyle}>
            <UserIcon imgUrl={imgUrl} width='55px' height='55px'/>
        </div>
    );
};

export default UserButton;