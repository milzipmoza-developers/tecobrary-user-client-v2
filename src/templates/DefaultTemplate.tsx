import * as React from "react";
import {CSSProperties, useState} from "react";
import Body from 'src/organisms/Body';
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

const templateStyle: CSSProperties = {
    backgroundColor: '#ffffff',
    flex: 1,
    height: '100%',
    maxWidth: '450px',
    minWidth: '250px',
    overflow: 'scroll',
    position: 'relative',
    width: '100%',
};

const DefaultTemplate = (props: IProps) => {
    const [login] = useState(props.loggedIn);
    const [img] = useState(props.imgUrl);

    return (
        <div className='defaultTemplate' style={templateStyle}>
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
        </div>
    );
};

export default DefaultTemplate;