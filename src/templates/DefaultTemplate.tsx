import * as React from "react";
import {useState} from "react";
import Body from 'src/organisms/Body';
import styled from "styled-components";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

interface IProps {
    title: string;
    loggedIn: boolean;
    imgUrl?: string;
    children?: any;
    profileIcon: 'visible' | 'hidden';
    visibleRentBtn?: 'hidden' | 'visible';
}

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

const DefaultTemplate = (props: IProps) => {
    const [login] = useState(props.loggedIn);
    const [img] = useState(props.imgUrl);

    return (
        <Wrapper>
            <Header
                className='templateHeader'
                loggedIn={login}
                imgUrl={img}
                profileIcon={props.profileIcon}>
                {props.title}
            </Header>
            <Body className='templateBody'>
                {props.children}
            </Body>
            <div style={{visibility: props.visibleRentBtn}}>
                <Footer className='templateFooter'/>
            </div>
        </Wrapper>
    );
};

export default DefaultTemplate;