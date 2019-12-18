import * as React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";

const RentList = () => {
    return (
        <DefaultTemplate title='대여 현황' loggedIn={true}
                         profileIcon='visible'
                         imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'>
            대여 현황
        </DefaultTemplate>
    );
};

export default RentList;