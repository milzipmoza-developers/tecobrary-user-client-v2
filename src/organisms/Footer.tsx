import {CSSProperties} from "react";
import * as React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import RentButton from "../molecules/RentButton";

const Wrapper = styled.div`
    background-color: rgba( 255, 255, 255, 0 );
    bottom: 0;
    left: 50%;
    position: fixed;
    transform: translateX(-50%);
    height: 80px;
    width: 100%;
    max-width: 450px;
    min-width: 250px;
`;

const buttonStyle: CSSProperties = {
    backgroundColor: 'black',
    borderRadius: '10px',
    boxShadow: '4px 3px 10px 0 rgba(0, 0, 0, 0.5)',
    height: '50px',
    marginLeft: '24px',
    marginRight: '24px',
};

const Footer = ({className}: any) => {
    return (
        <Wrapper className={className}>
            <Link to='/rents' style={{textDecoration: 'none', cursor: 'initial'}}>
                <div className='qrCodeButton' style={buttonStyle}>
                    <RentButton/>
                </div>
            </Link>
        </Wrapper>
    );
};

export default Footer;