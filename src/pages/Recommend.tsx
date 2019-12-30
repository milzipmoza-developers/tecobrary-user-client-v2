import * as React from "react";
import CardMessageHolder from "../atoms/CardMessageHolder";
import DefaultTemplate from "../templates/DefaultTemplate";

const Recommend = () => {
    return (
        <DefaultTemplate title='추천 도서' loggedIn={true}
                         profileIcon='visible'
                         imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'>
            <CardMessageHolder>서비스 준비중 입니다.</CardMessageHolder>
        </DefaultTemplate>
    );
};

export default Recommend;