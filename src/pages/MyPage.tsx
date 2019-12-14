import * as React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";

const MyPage = () => {
    return (
        <DefaultTemplate title='마이페이지' loggedIn={true}>
            마이페이지
        </DefaultTemplate>
    );
};

export default MyPage