import * as React from "react";
import {CSSProperties} from "react";
import styled from "styled-components";
import HeaderTitle from "../molecules/HeaderTitle";
import HeaderButton from "./HeaderButton";

const Wrapper = styled.div`
    background-color: rgba( 255, 255, 255, 0.8 );
    position: absolute;
    width: 100%;
    top: 0;
`;

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

const Header = ({className, loggedIn, imgUrl, children}: any) => {
    return (
        <Wrapper className={className}>
            <div className='header' style={headerStyle}>
                <div className='headerTitleContainer' style={headerTitleStyle}>
                    <HeaderTitle>{children}</HeaderTitle>
                </div>
                <div className='profileButtonContainer' style={profileButtonStyle}>
                    <HeaderButton loggedIn={loggedIn} imgUrl={imgUrl}/>
                </div>
            </div>
        </Wrapper>
    )
};

export default Header;
