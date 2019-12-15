import * as React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";

const RentHistory = () => {
    return (
        <DefaultTemplate title='대여 기록' loggedIn={true} profileIcon='visible'>
            대여기록
        </DefaultTemplate>
    );
};

export default RentHistory;