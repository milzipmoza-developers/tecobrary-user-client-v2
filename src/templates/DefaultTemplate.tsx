import * as React from "react";
import {useState} from "react";
import Body from 'src/organism/Body';
import styled from "styled-components";
import Footer from "../organism/Footer";
import Header from "../organism/Header";

const Wrapper = styled.div`
    background-color: #ffffff;
    flex: 1;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: scroll;
    max-width: 450px;
    min-width: 250px;
`;

const DefaultTemplate = ({title, loggedIn, imgUrl, children}: any) => {
    const [login] = useState(loggedIn);
    const [img] = useState(imgUrl);

    return (
        <Wrapper>
            <Header
                className='templateHeader'
                loggedIn={login}
                imgUrl={img}>
                {title}
            </Header>
            <Body className='templateBody'>
                {children}
            </Body>
            <Footer className='templateFooter'/>
        </Wrapper>
    );
};

export default DefaultTemplate;