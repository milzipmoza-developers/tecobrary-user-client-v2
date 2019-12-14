import * as React from "react";
import {CSSProperties} from "react";
import UserAvatarElement from "../molecules/UserAvatarElement";

interface IProps {
    avatarUrl: string;
}

const avatarElementStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
};

const avatarStyle: CSSProperties = {
    alignSelf: 'flex-end',
    borderRadius: '50%',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.5)',
    marginTop: '8px',
    width: 'fit-content',
};

const UserAvatar = ({avatarUrl}: IProps) => (
    <div style={avatarElementStyle}>
        <div style={avatarStyle}>
            <UserAvatarElement imgUrl={avatarUrl}/>
        </div>
    </div>
);

export default UserAvatar;