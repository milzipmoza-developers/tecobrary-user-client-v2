import * as React from "react";
import {TEXT_BUTTON_RED} from "../common/colors";
import {IUserInfo} from "../common/types/IUserInfo";
import VerifiedUserElement from "../molecules/VerifiedUserElement";
import CardTextButton from "./CardTextButton";
import TitledCard from "./TitledCard";
import UserInfoComponent from "./UserInfoComponent";

interface IProps {
    user: IUserInfo | null;
    logoutButtonHandler: any;
}

const MyPageUserInfoCard = ({user, logoutButtonHandler}: IProps) => {
    return (
        <TitledCard elevation={true}>
            <UserInfoComponent
                name={user ? user.name : ''}
                email={user ? user.email : ''}
                avatarUrl={user ? user.avatarUrl : ''}/>
            <VerifiedUserElement authorization={user ? user.authorization : ''}/>
            <CardTextButton onClick={logoutButtonHandler} cursor='pointer' color={TEXT_BUTTON_RED}>
                로그아웃
            </CardTextButton>
        </TitledCard>
    )
};

export default MyPageUserInfoCard;