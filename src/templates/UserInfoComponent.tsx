import * as React from "react";
import {CSSProperties} from "react";
import UserAvatar from "../organisms/UserAvatar";
import UserDefaultInfoTags from "../organisms/UserDefaultInfoTags";

interface IProps {
    name: string;
    email: string;
    avatarUrl: string;
}

const userInfoElementStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
};

const UserInfoComponent = ({name, email, avatarUrl}: IProps) => {
    return (
        <div style={userInfoElementStyle}>
            <UserDefaultInfoTags name={name} email={email}/>
            <UserAvatar avatarUrl={avatarUrl}/>
        </div>
    );
};

export default UserInfoComponent;