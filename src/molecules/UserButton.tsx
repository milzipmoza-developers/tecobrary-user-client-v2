import {CSSProperties} from "react";
import * as React from "react";
import {Link} from "react-router-dom";
import UserIcon from "../atoms/UserIcon";

const iconStyle: CSSProperties = {
    height: '55px',
    width: '55px',
};

const UserButton = ({imgUrl}: any) => (
    <Link to='/mypage'>
        <div className='userIcon' style={iconStyle}>
            <UserIcon imgUrl={imgUrl} width='55px' height='55px'/>
        </div>
    </Link>
);

export default UserButton;