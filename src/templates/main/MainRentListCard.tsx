import * as React from "react";
import {TEXT_BUTTON_BLUE} from "../../common/colors";
import {IRentElement} from "../../common/types/IRentElement";
import MainCardRentList from "../../organisms/main/MainCardRentList";
import CardTextButton from "../CardTextButton";
import TitledCard from "../TitledCard";

interface IProps {
    loggedIn: boolean;
    rents: IRentElement[];
}

const MainRentListCard = ({rents, loggedIn}: IProps) => {
    const Card = () => (
        <TitledCard title='대여현황' elevation={true}>
            <MainCardRentList rents={rents}/>
            <CardTextButton cursor='pointer' color={TEXT_BUTTON_BLUE} to='/rentlists'>
                더보기
            </CardTextButton>
        </TitledCard>
    );

    return (
        <div>
            {loggedIn && rents.length !== 0 ? <Card/> : null}
        </div>
    );
};

export default MainRentListCard;