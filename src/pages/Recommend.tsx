import * as React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";

const Recommend = () => {
    return (
        <DefaultTemplate title='추천 도서' loggedIn={true}
                         profileIcon='visible'
                         imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'>
            추천 도서 목록
        </DefaultTemplate>
    );
};

export default Recommend;