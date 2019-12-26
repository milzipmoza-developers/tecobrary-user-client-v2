import * as React from "react";
import {useEffect, useState} from "react";
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {IRentElement} from "../common/types/IRentElement";
import DefaultTemplate from "../templates/DefaultTemplate";
import MainRentListCard from "../templates/main/MainRentListCard";
import MainRecommendCard from "../templates/MainRecommendCard";
import SearchComponent from "../templates/SearchComponent";

interface IProps {
    state: any;
    isLoggedIn: any,
    user: any,
}

const Main = ({isLoggedIn, user}: IProps) => {
    const [rents, setRents] = useState<IRentElement[]>([]);

    useEffect(() => {
        setRentsFromServer();
    }, []);

    const setRentsFromServer = () => {
        if (isLoggedIn) {
            rentHistoryController
                .findRentListByUserId(user.id)
                .then((list: any) => {
                    setRents(list);
                })
                .catch((e: any) => {
                    // tslint:disable-next-line:no-console
                    console.log(e.response.data);
                });
        }
    };

    return (
        <DefaultTemplate title='대시보드' loggedIn={isLoggedIn}
                         profileIcon='visible'
                         imgUrl={user ? user.avatarUrl : null}>
            <SearchComponent isSearchPage={false}/>
            <MainRentListCard loggedIn={isLoggedIn ? isLoggedIn : false} rents={rents}/>
            <MainRecommendCard/>
        </DefaultTemplate>
    )
};

export default Main;