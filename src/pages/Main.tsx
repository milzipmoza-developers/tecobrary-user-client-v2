import * as React from "react";
import TitledCard from "../organisms/TitledCard";
import DefaultTemplate from "../templates/DefaultTemplate";
import SearchComponent from "../templates/SearchComponent";

const Main = () => {
    return (
        <DefaultTemplate title='대시보드' loggedIn={true}
                         profileIcon='visible'
                         imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'>
            <SearchComponent isSearchPage={false}/>
            <TitledCard title='추천도서' elevation={true}>
                추천 도서 목록
            </TitledCard>
        </DefaultTemplate>
    )
};
export default Main;