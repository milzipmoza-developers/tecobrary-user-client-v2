import * as React from "react";
import TitledCard from "../organisms/TitledCard";
import DefaultTemplate from "../templates/DefaultTemplate";

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