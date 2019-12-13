import {CSSProperties} from "react";
import * as React from "react";
import styled from "styled-components";
import RentButton from "../molecule/RentButton";

const Wrapper = styled.div`
    background-color: rgba( 255, 255, 255, 0 );
    bottom: 0;
    left: 0;
    height: 80px;
    width: 100%;
    position: absolute;
`;

const buttonStyle: CSSProperties = {
    backgroundColor: 'black',
    borderRadius: '10px',
    boxShadow: '4px 3px 10px 0 rgba(0, 0, 0, 0.5)',
    height: '50px',
    marginLeft: '24px',
    marginRight: '24px',
};

const Footer = () => {
    const onClickListener = (e: any) => {
        e.preventDefault();
        alert('qr rent');
    };

    return (
        <Wrapper>
            <div className='qrCodeButton' style={buttonStyle} onClick={onClickListener}>
                <RentButton/>
            </div>
        </Wrapper>
    );
};

export default Footer;