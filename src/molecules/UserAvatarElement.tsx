import * as React from "react";
import {CSSProperties} from "react";
import UserIcon from "../atoms/UserIcon";

const SQUARE_SIDE = '55px';

interface IProps {
    imgUrl: string;
}

const iconStyle: CSSProperties = {
    height: SQUARE_SIDE,
    width: SQUARE_SIDE,
};

const UserAvatarElement = ({imgUrl}: IProps) => (
    <div style={iconStyle}>
        <UserIcon imgUrl={imgUrl} width={SQUARE_SIDE} height={SQUARE_SIDE}/>
    </div>
);

export default UserAvatarElement;