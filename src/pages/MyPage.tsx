import * as React from "react";
import {useEffect, useState} from "react";
import {rentHistoryController} from "../common/controller/RentHistoryController";
import {RentHistoryProps} from "../organisms/renthistory/RentHistoryProps";
import DefaultTemplate from "../templates/DefaultTemplate";
import MyPageBadgeCard from "../templates/MyPageBadgeCard";
import MyPageRentHistoryCard from "../templates/MyPageRentHistoryCard";
import MyPageUserInfoCard from "../templates/MyPageUserInfoCard";

const UserInfo = {
    authorization: 'KING',
    avatarUrl: 'https://avatars0.githubusercontent.com/u/52121827?s=460&v=4',
    email: 'thedevluffy@gmail.com',
    loggedIn: true,
    name: '개발왕루피',
    numeric: 1,
};

const MyPage = () => {
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
        <DefaultTemplate title='마이페이지' loggedIn={UserInfo.loggedIn} profileIcon='hidden'>
            <MyPageUserInfoCard
                name={UserInfo.name}
                email={UserInfo.email}
                avatarUrl={UserInfo.avatarUrl}
                verified={UserInfo.authorization !== 'NONE'}
                numeric={UserInfo.numeric} />
            <MyPageRentHistoryCard
                rentHistories={rentHistories}/>
            <MyPageBadgeCard/>
        </DefaultTemplate>
    );
};

export default MyPage;