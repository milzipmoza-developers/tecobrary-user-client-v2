import * as React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import MyPageBadgeCard from "../templates/MyPageBadgeCard";
import MyPageRentHistoryCard from "../templates/MyPageRentHistoryCard";
import MyPageUserInfoCard from "../templates/MyPageUserInfoCard";

const ONE_MONTH = 24 * 3600 * 1000 * 30;

const UserInfo = {
    authorization: 'KING',
    avatarUrl: 'https://avatars0.githubusercontent.com/u/52121827?s=460&v=4',
    email: 'thedevluffy@gmail.com',
    loggedIn: true,
    name: '개발왕루피',
    numeric: 1,
};

const rentHistories: any[] = [
    { title: '객체지향의 사실과 오해', createdAt: Date.now() - ONE_MONTH, deletedAt: Date.now(), likeStatus: true },
    { title: '배민다움', createdAt: Date.now() - 2 * ONE_MONTH, deletedAt: Date.now() - ONE_MONTH, likeStatus: false },
    { title: '오브젝트', createdAt: Date.now() - 3 * ONE_MONTH, deletedAt: Date.now() - 2 * ONE_MONTH, likeStatus: true },
];

const MyPage = () => {
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