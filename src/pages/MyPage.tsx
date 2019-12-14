import * as React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import TitledCard from "../templates/TitledCard";

const MyPage = () => {
    return (
        <DefaultTemplate title='마이페이지' loggedIn={true} profileIcon='hidden'>
            <TitledCard elevation={true}>
                ㅇㅇ
            </TitledCard>
        </DefaultTemplate>
    );
};

export default MyPage