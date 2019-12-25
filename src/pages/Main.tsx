import * as React from "react";
import {useEffect, useState} from "react";
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {IRentElement} from "../common/types/IRentElement";
import DefaultTemplate from "../templates/DefaultTemplate";
import MainRentListCard from "../templates/main/MainRentListCard";
import MainRecommendCard from "../templates/MainRecommendCard";
import SearchComponent from "../templates/SearchComponent";

const Main = () => {
    // @ts-ignore
    const [isLoggedIn, logIn] = useState(false);
    // @ts-ignore
    const [imgUrl, setImgUrl] = useState<any>(null);
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
                         imgUrl={imgUrl}>
            <SearchComponent isSearchPage={false}/>
            <MainRentListCard loggedIn={isLoggedIn} rents={rents}/>
            <MainRecommendCard/>
        </DefaultTemplate>
    )
};

export default Main;