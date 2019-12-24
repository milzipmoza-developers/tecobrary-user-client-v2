import * as React from "react";
import {useEffect, useState} from "react";
import Divider from "../atoms/Divider";
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {IRentElement} from "../common/types/IRentElement";
import RentListBody from "../molecules/rentlist/RentListBody";
import RentListHeader from "../molecules/rentlist/RentListHeader";
import DefaultTemplate from "../templates/DefaultTemplate";
import './rentlist.css';

const RentList = () => {
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

    const returnButtonHandler = (id: number) => async (e: any) => {
        e.preventDefault();
        try {
            const data = await rentHistoryController.returnBook(12, id);
            // tslint:disable-next-line:no-console
            console.log(data.message);
            // tslint:disable-next-line:no-console
            console.log(data.returnInfo);
            setRentsFromServer();
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log(e.response.data);
        }
    };

    return (
        <DefaultTemplate title='대여 현황' loggedIn={true}
                         profileIcon='visible'
                         imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <RentListHeader/>
                <Divider/>
                <RentListBody rents={rents} returnButtonHandler={returnButtonHandler}/>
            </div>
        </DefaultTemplate>
    );
};

export default RentList;