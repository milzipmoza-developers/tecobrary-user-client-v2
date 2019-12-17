import * as React from "react";
import {useEffect, useState} from "react";
import * as RentHistoryController from '../common/controller/RentHistoryController';
import {RentHistoryProps} from "../organisms/renthistory/RentHistoryProps";
import RentHistoryList from "../organisms/RentHistoryList";
import DefaultTemplate from "../templates/DefaultTemplate";

const RentHistory = () => {
    const [rentHistories, setRentHistories] = useState<RentHistoryProps[]>([]);
    // @ts-ignore
    const [page, setPage] = useState(1);

    useEffect(() => {
        setRentHistories(RentHistoryController.findRentHistoriesByUserId(1, page, 10));
    }, [page]);

    return (
        <DefaultTemplate title='대여 기록' loggedIn={true} profileIcon='visible'>
            <div style={{height: '3vh'}}/>
            <RentHistoryList rentHistories={rentHistories}/>
        </DefaultTemplate>
    );
};

export default RentHistory;