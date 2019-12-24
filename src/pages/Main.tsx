import * as React from "react";
import {useEffect, useState} from "react";
import CardMessageHolder from "../atoms/CardMessageHolder";
import {TEXT_BUTTON_BLUE} from "../common/colors";
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {IRentElement} from "../common/types/IRentElement";
import CardTextButton from "../templates/CardTextButton";
import DefaultTemplate from "../templates/DefaultTemplate";
import MainRentListCard from "../templates/main/MainRentListCard";
import SearchComponent from "../templates/SearchComponent";
import TitledCard from "../templates/TitledCard";

const Main = () => {
    // @ts-ignore
    const [isLoggedIn, logIn] = useState(true);
    const [rents, setRents] = useState<IRentElement[]>([]);

    useEffect(() => {
        setRentsFromServer();
    }, []);

    const setRentsFromServer = () => {
        rentHistoryController.findRentListByUserId(12)
            .then((list: any) => {
                setRents(list);
            }).catch((e: any) => {
            // tslint:disable-next-line:no-console
            console.log(e.response.data);
        });
    };

    return (
        <DefaultTemplate title='대시보드' loggedIn={isLoggedIn}
                         profileIcon='visible'
                         imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'>
            <SearchComponent isSearchPage={false}/>
            <MainRentListCard loggedIn={isLoggedIn} rents={rents}/>
            <TitledCard title='추천도서' elevation={true}>
                <CardMessageHolder>서비스 준비 중입니다.</CardMessageHolder>
                <CardTextButton cursor='pointer' color={TEXT_BUTTON_BLUE} to='/recommends'>
                    더보기
                </CardTextButton>
            </TitledCard>
        </DefaultTemplate>
    )
};

export default Main;