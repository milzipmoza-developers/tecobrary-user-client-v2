import * as React from "react";
import CardMessageHolder from "../atoms/CardMessageHolder";
import {TEXT_BUTTON_BLUE} from "../common/colors";
import CardTextButton from "./CardTextButton";
import TitledCard from "./TitledCard";

const MainRecommendCard = () => (
    <TitledCard title='추천도서' elevation={true}>
        <CardMessageHolder>서비스 준비 중입니다.</CardMessageHolder>
        <CardTextButton cursor='pointer' color={TEXT_BUTTON_BLUE} to='/recommends'>
            더보기
        </CardTextButton>
    </TitledCard>
);

export default MainRecommendCard;