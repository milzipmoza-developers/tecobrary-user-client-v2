import * as React from "react";
import {CSSProperties, useState} from "react";
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

const TemplateBody: CSSProperties = {
    overflow: 'scroll',
    paddingBottom: '100px',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingTop: '100px',
    width: 'inherit',
};

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
            <Body className='templateBody' style={TemplateBody}>
                {children}
            </Body>
            <Footer className='templateFooter'/>
        </Wrapper>
    );
};

export default DefaultTemplate;