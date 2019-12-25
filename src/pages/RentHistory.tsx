import * as React from "react";
import {useEffect, useState} from "react";
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {RentHistoryProps} from "../organisms/renthistory/RentHistoryProps";
import RentHistoryList from "../organisms/RentHistoryList";
import DefaultTemplate from "../templates/DefaultTemplate";

const RentHistory = () => {
    const [rentHistories, setRentHistories] = useState<RentHistoryProps[]>([]);

    useEffect(() => {
        setRentHistoriesFromServer();
    }, []);

    const setRentHistoriesFromServer = () => {
        rentHistoryController
            .findReturnListByUserId(1)
            .then((response: any) => {
                setRentHistories(response);
            }).catch((e) => {
                // tslint:disable-next-line:no-console
                console.log(e.response.data.message);
            })
    };

    return (
        <DefaultTemplate title='대여 기록' loggedIn={true} profileIcon='visible'>
            <div style={{height: '3vh'}}/>
            <RentHistoryList rentHistories={rentHistories}/>
        </DefaultTemplate>
    );
};

export default RentHistory;