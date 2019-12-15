import * as React from "react";
import {TEXT_BUTTON_RED} from "../common/colors";
import VerifiedUserElement from "../molecules/VerifiedUserElement";
import CardTextLinkButton from "./CardTextLinkButton";
import TitledCard from "./TitledCard";
import UserInfoComponent from "./UserInfoComponent";

interface IProps {
    name: string;
    email: string;
    avatarUrl: string;
    verified: boolean;
    numeric?: number;
}

const MyPageUserInfoCard = (props: IProps) => {
    return (
        <TitledCard elevation={true}>
            <UserInfoComponent
                name={props.name}
                email={props.email}
                avatarUrl={props.avatarUrl}/>
            <VerifiedUserElement verified={props.verified} numeric={props.numeric}/>
            <CardTextLinkButton to='/histories' cursor='pointer' color={TEXT_BUTTON_RED}>
                로그아웃
            </CardTextLinkButton>
        </TitledCard>
    )
};

export default MyPageUserInfoCard;