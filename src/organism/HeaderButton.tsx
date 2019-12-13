import {CSSProperties} from "react";
import * as React from "react";
import ProfileButton from "../molecule/ProfileButton";
import UserButton from "../molecule/UserButton";

const buttonStyle: CSSProperties = {
    borderRadius: '50%',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    marginTop: '8px',
    width: 'fit-content',
};

const HeaderButton = ({loggedIn, imgUrl}: any) => {
    return (
        <div className='profileButton' style={buttonStyle}>
            {(imgUrl && loggedIn) ? <UserButton imgUrl={imgUrl}/> : <ProfileButton/>}
        </div>
    );
};

export default HeaderButton;