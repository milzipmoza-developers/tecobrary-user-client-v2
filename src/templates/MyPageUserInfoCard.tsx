import * as React from "react";
import {useHistory} from 'react-router-dom';
import {TEXT_BUTTON_RED} from "../common/colors";
import VerifiedUserElement from "../molecules/VerifiedUserElement";
import CardTextButton from "./CardTextButton";
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
    const history = useHistory();

    const logoutButtonHandler = () => {
        // TODO: REMOVE USER INFO
        history.push('/');
    };

    return (
        <TitledCard elevation={true}>
            <UserInfoComponent
                name={props.name}
                email={props.email}
                avatarUrl={props.avatarUrl}/>
            <VerifiedUserElement verified={props.verified} numeric={props.numeric}/>
            <CardTextButton onClick={logoutButtonHandler} cursor='pointer' color={TEXT_BUTTON_RED}>
                로그아웃
            </CardTextButton>
        </TitledCard>
    )
};

export default MyPageUserInfoCard;