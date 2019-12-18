import * as React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";

const Books = () => (
    <DefaultTemplate title='장서 목록' loggedIn={true}
                     profileIcon='visible'
                     imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4'>
        장서 목록
    </DefaultTemplate>
);

export default Books;