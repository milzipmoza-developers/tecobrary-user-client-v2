import * as React from "react";
import {CSSProperties} from "react";
import HeaderTitle from "../molecules/HeaderTitle";
import HeaderButton from "./HeaderButton";

interface IProps {
    className: string;
    loggedIn: boolean;
    imgUrl?: string;
    profileIcon: 'hidden' | 'visible';
    children?: any;
}

const headerContainer: CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    position: 'absolute',
    top: '0',
    width: '100%',
};

const headerStyle: CSSProperties = {
    paddingBottom: '25px',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingTop: '25px',
};

const headerTitleStyle: CSSProperties = {
    float: 'left',
};

const profileButtonStyle: CSSProperties = {
    float: 'right',
};

const Header = (props: IProps) => {
    return (
        <div className={props.className} style={headerContainer}>
            <div className='header' style={headerStyle}>
                <div className='headerTitleContainer' style={headerTitleStyle}>
                    <HeaderTitle>{props.children}</HeaderTitle>
                </div>
                <div style={{visibility: props.profileIcon}}>
                    <div className='profileButtonContainer' style={profileButtonStyle}>
                        <HeaderButton loggedIn={props.loggedIn} imgUrl={props.imgUrl}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
