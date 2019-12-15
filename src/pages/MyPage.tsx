import * as React from "react";
import Divider from "../atoms/Divider";
import {TEXT_BUTTON_BLUE} from "../common/colors";
import HistoryInfoRow from "../organisms/HistoryInfoRow";
import CardTextLinkButton from "../templates/CardTextLinkButton";
import DefaultTemplate from "../templates/DefaultTemplate";
import MyPageUserInfoCard from "../templates/MyPageUserInfoCard";
import TitledCard from "../templates/TitledCard";

const ONE_MONTH = 24 * 3600 * 1000 * 30;

interface IHistory {
    title: string;
    createdAt: number;
    deletedAt: number;
    likeStatus: boolean;
}

const rentHistories = [
    { title: '객체지향의 사실과 오해', createdAt: Date.now() - ONE_MONTH, deletedAt: Date.now(), likeStatus: true },
    { title: '배민다움', createdAt: Date.now() - 2 * ONE_MONTH, deletedAt: Date.now() - ONE_MONTH, likeStatus: false },
    { title: '오브젝트', createdAt: Date.now() - 3 * ONE_MONTH, deletedAt: Date.now() - 2 * ONE_MONTH, likeStatus: true },
];

const MyPage = () => {
    return (
        <DefaultTemplate title='마이페이지' loggedIn={true} profileIcon='hidden'>
            <MyPageUserInfoCard
                name='개발왕루피'
                email='thedevluffy@gmail.com'
                avatarUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'
                verified={false}
                numeric={1} />
            <TitledCard title='대여 기록' elevation={true}>
                <div style={{display: 'flex', flexDirection: 'column', margin: '4px', marginBottom: '8px'}}>
                    <Divider/>
                    {rentHistories.map((rentHistory: IHistory, i: number) => (
                        <HistoryInfoRow key={i} rentHistory={rentHistory}/>
                    ))}
                </div>
                <CardTextLinkButton to='/histories' cursor='pointer' color={TEXT_BUTTON_BLUE}>
                    더보기
                </CardTextLinkButton>
            </TitledCard>
            <TitledCard title='나의 뱃지' elevation={true}>
                뱃지뱃지
                <CardTextLinkButton to='/' cursor='pointer' color={TEXT_BUTTON_BLUE}>
                    더보기
                </CardTextLinkButton>
            </TitledCard>
        </DefaultTemplate>
    );
};

export default MyPage;