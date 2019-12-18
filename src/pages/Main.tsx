import * as React from "react";
import CardMessageHolder from "../atoms/CardMessageHolder";
import {TEXT_BUTTON_BLUE} from "../common/colors";
import CardTextButton from "../templates/CardTextButton";
import DefaultTemplate from "../templates/DefaultTemplate";
import SearchComponent from "../templates/SearchComponent";
import TitledCard from "../templates/TitledCard";

const Main = () => {
    return (
        <DefaultTemplate title='대시보드' loggedIn={true}
                         profileIcon='visible'
                         imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'>
            <SearchComponent isSearchPage={false}/>
            <TitledCard title='추천도서' elevation={true}>
                <CardMessageHolder>서비스 준비 중입니다.</CardMessageHolder>
                <CardTextButton cursor='pointer' color={TEXT_BUTTON_BLUE} to='/recommends'>
                    더보기
                </CardTextButton>
            </TitledCard>
        </DefaultTemplate>
    )
};

export default Main;