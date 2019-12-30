import * as React from "react";
import {CSSProperties} from "react";
import Header from "../organisms/Header";
import NoFooterBody from "../organisms/NoFooterBody";

interface IProps {
    title: string;
    loggedIn: boolean;
    imgUrl?: string;
    children?: any;
    profileIcon: 'visible' | 'hidden';
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

const NoFooterTemplate = (props: IProps) => {
    return (
        <div className='noFooterTemplate' style={templateStyle}>
            <Header
                className='templateHeader'
                loggedIn={props.loggedIn}
                imgUrl={props.imgUrl}
                profileIcon={props.profileIcon}>
                {props.title}
            </Header>
            <NoFooterBody className='templateBody'>
                {props.children}
            </NoFooterBody>
        </div>
    );
};

export default NoFooterTemplate;