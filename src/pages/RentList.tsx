import * as React from "react";
import {useEffect, useState} from "react";
import Divider from "../atoms/Divider";
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {IRentElement} from "../common/types/IRentElement";
import RentListBody from "../organisms/rentlist/RentListBody";
import RentListHeader from "../organisms/rentlist/RentListHeader";
import DefaultTemplate from "../templates/DefaultTemplate";
import './css/rentlist.css';

const RentList = ({isLoggedIn, user, token}: any) => {
    const [rents, setRents] = useState<IRentElement[]>([]);

    useEffect(() => {
        setRentsFromServer();
    }, []);

    const setRentsFromServer = () => {
        if (isLoggedIn && user && token) {
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

    const returnButtonHandler = (id: number) => async (e: any) => {
        if (user) {
            e.preventDefault();
            try {
                const data = await rentHistoryController.returnBook(user.id, id);
                // tslint:disable-next-line:no-console
                console.log(data.message);
                // tslint:disable-next-line:no-console
                console.log(data.returnInfo);
                setRentsFromServer();
            } catch (e) {
                // tslint:disable-next-line:no-console
                console.log(e.response.data);
            }
        }
    };

    return (
        <DefaultTemplate title='대여 현황' loggedIn={isLoggedIn}
                         profileIcon='visible'
                         imgUrl={user ? user.avatarUrl : undefined}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <RentListHeader/>
                <Divider/>
                <RentListBody rents={rents} returnButtonHandler={returnButtonHandler}/>
            </div>
        </DefaultTemplate>
    );
};

export default RentList;