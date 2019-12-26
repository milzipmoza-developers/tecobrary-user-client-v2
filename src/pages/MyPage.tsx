import * as React from "react";
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {RentHistoryProps} from "../organisms/renthistory/RentHistoryProps";
import DefaultTemplate from "../templates/DefaultTemplate";
import MyPageBadgeCard from "../templates/MyPageBadgeCard";
import MyPageRentHistoryCard from "../templates/MyPageRentHistoryCard";
import MyPageUserInfoCard from "../templates/MyPageUserInfoCard";

const MyPage = ({isLoggedIn, user, token, logout}: any) => {
    const [rentHistories, setRentHistories] = useState<RentHistoryProps[]>([]);
    const history = useHistory();

    useEffect(() => {
            setRentHistoriesFromServer();
    }, []);

    const setRentHistoriesFromServer = () => {
        if (isLoggedIn && user) {
        rentHistoryController
            .findReturnListByUserId(user.id)
            .then((response: any) => {
                setRentHistories(response);
            })
            .catch((e) => {
                // tslint:disable-next-line:no-console
                console.log(e.response.data.message);
            });
        }
    };

    const logoutButtonHandler = () => {
        logout();
        history.push('/');
    };

    return (
        <DefaultTemplate title='마이페이지' loggedIn={isLoggedIn} profileIcon='hidden'>
            <MyPageUserInfoCard user={user ? user : null} logoutButtonHandler={logoutButtonHandler}/>
            <MyPageRentHistoryCard
                rentHistories={rentHistories}/>
            <MyPageBadgeCard/>
        </DefaultTemplate>
    );
};

export default MyPage;