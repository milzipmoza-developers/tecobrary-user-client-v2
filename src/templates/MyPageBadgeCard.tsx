import * as React from "react";
import CardMessageHolder from "../atoms/CardMessageHolder";
import {TEXT_BUTTON_BLUE} from "../common/colors";
import CardTextButton from "./CardTextButton";
import TitledCard from "./TitledCard";

const MyPageBadgeCard = () => {
    return (
        <TitledCard title='나의 뱃지' elevation={true}>
            <CardMessageHolder>서비스 준비중 입니다.</CardMessageHolder>
            <CardTextButton to='/' cursor='pointer' color={TEXT_BUTTON_BLUE}>
                더보기
            </CardTextButton>
        </TitledCard>
    );
};

export default MyPageBadgeCard;