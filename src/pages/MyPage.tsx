import * as React from "react";
import CardTextLinkButton from "../templates/CardTextLinkButton";
import DefaultTemplate from "../templates/DefaultTemplate";
import TitledCard from "../templates/TitledCard";
import UserInfoComponent from "../templates/UserInfoComponent";

const MyPage = () => {
    return (
        <DefaultTemplate title='마이페이지' loggedIn={true} profileIcon='hidden'>
            <TitledCard elevation={true}>
                <UserInfoComponent
                    name='개발왕루피'
                    email='thedevluffy@gmail.com'
                    avatarUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'/>
                <div style={{marginTop: '32px', marginBottom: '32px', fontWeight: 300, fontSize: '15px'}}>
                    우아한테크코스 2기 인증됨
                </div>
                <CardTextLinkButton to='/histories' cursor='pointer' color='#FF0000'>
                    로그아웃
                </CardTextLinkButton>
            </TitledCard>
            <TitledCard title='대여 기록' elevation={true}>
                대여 기록
                <CardTextLinkButton to='/histories' cursor='pointer' color='#3E8BFF'>
                    더보기
                </CardTextLinkButton>
            </TitledCard>
            <TitledCard title='나의 뱃지' elevation={true}>
                뱃지뱃지
                <CardTextLinkButton to='/' cursor='pointer' color='#3E8BFF'>
                    더보기
                </CardTextLinkButton>
            </TitledCard>
        </DefaultTemplate>
    );
};

export default MyPage;