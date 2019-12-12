import * as React from "react";
import styled from "styled-components";
import RentButton from "../molecule/RentButton";
import Header from "../organism/Header";

const Wrapper = styled.div`
    background-color: #ffffff;
    flex: 1;
`;

const Main = () => {
    return (
        <Wrapper>
            <div className="App">
                <Header
                    loggedIn={true}
                    imgUrl='https://avatars0.githubusercontent.com/u/52121827?s=460&v=4.png'>
                    대시보드
                </Header>
                <div className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.<br/>
                    To get started, edit <code>src/App.tsx</code> and save to reload.<br/>
                    To get started, edit <code>src/App.tsx</code> and save to reload.<br/>
                    To get started, edit <code>src/App.tsx</code> and save to reload.<br/>
                </div>
                <RentButton/>
            </div>
        </Wrapper>
    );
};

export default Main;