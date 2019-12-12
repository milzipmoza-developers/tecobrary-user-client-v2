import {CSSProperties} from "react";
import * as React from "react";
import styled from "styled-components";
import HeaderTitle from "../molecule/HeaderTitle";
import ProfileButton from "../molecule/ProfileButton";

const Wrapper = styled.div`
    background-color: rgba( 255, 255, 255, 0.8 );
    top: 0;
    width: 100%;
    position: absolute;
`;

const headerStyle: CSSProperties = {
    overflow: 'auto',
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

const Header = ({loggedIn, imgUrl, children}: any) => {
    return (
        <Wrapper>
            <div className='header' style={headerStyle}>
                <div className='headerTitleContainer' style={headerTitleStyle}>
                    <HeaderTitle>{children}</HeaderTitle>
                </div>
                <div className='profileButtonContainer' style={profileButtonStyle}>
                    <ProfileButton loggedIn={loggedIn} imgUrl={imgUrl}/>
                </div>
            </div>
        </Wrapper>
    )
};

export default Header;
