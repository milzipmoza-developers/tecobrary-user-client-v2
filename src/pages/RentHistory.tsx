import * as React from "react";
import {useEffect, useState} from "react";
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {ILoginInfo} from "../common/types/ILoginInfo";
import {RentHistoryProps} from "../organisms/renthistory/RentHistoryProps";
import RentHistoryList from "../organisms/RentHistoryList";
import DefaultTemplate from "../templates/DefaultTemplate";

const RentHistory = ({isLoggedIn, user, token}: ILoginInfo) => {
    const [rentHistories, setRentHistories] = useState<RentHistoryProps[]>([]);

    useEffect(() => {
        setRentHistoriesFromServer();
    }, []);

    const setRentHistoriesFromServer = () => {
        if (isLoggedIn && user && token) {
            rentHistoryController
                .findReturnListByUserId(user.id)
                .then((response: any) => {
                    setRentHistories(response);
                })
                .catch((e) => {
                    // tslint:disable-next-line:no-console
                    console.log(e.response.data.message);
                })
        }
    };

    return (
        <DefaultTemplate title='대여 기록' loggedIn={isLoggedIn} profileIcon='visible'
                         imgUrl={user ? user.avatarUrl : undefined}>
            <div style={{height: '3vh'}}/>
            <RentHistoryList rentHistories={rentHistories}/>
        </DefaultTemplate>
    );
};

export default RentHistory;