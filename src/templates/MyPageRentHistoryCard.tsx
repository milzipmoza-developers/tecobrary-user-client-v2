import * as React from "react";
import {TEXT_BUTTON_BLUE} from "../common/colors";
import RentHistoryList from "../organisms/RentHistoryList";
import CardTextLinkButton from "./CardTextLinkButton";
import TitledCard from "./TitledCard";

const RENT_HISTORY_CARD_TITLE = '대여 기록';

interface IProps {
    rentHistories: any;
}

const MyPageRentHistoryCard = ({rentHistories}: IProps) => {
    return (
        <TitledCard title={RENT_HISTORY_CARD_TITLE} elevation={true}>
            <RentHistoryList rentHistories={rentHistories}/>
            <CardTextLinkButton to='/histories' cursor='pointer' color={TEXT_BUTTON_BLUE}>
                더보기
            </CardTextLinkButton>
        </TitledCard>
    );
};

export default MyPageRentHistoryCard;