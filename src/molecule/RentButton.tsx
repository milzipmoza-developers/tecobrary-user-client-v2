import {CSSProperties} from "react";
import * as React from 'react';
import styled from "styled-components";
import QrCodeIcon from "../atom/QrCodeIcon";

const Wrapper = styled.div`
    background-color: rgba( 255, 255, 255, 0 );
    bottom: 0;
    height: 80px;
    width: 100%;
    position: fixed;
`;

const buttonStyle: CSSProperties = {
    backgroundColor: 'black',
    borderRadius: '10px',
    boxShadow: '4px 3px 10px 0 rgba(0, 0, 0, 0.5)',
    height: '50px',
    marginLeft: '24px',
    marginRight: '24px',
};

const textContainerStyle: CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
};

const textBoxStyle: CSSProperties = {
    alignItems: 'center',
    color: 'white',
    display: 'flex',
    fontSize: '21px',
    height: '100%',
    justifyContent: 'center',
};

const textStyle: CSSProperties = {
    paddingLeft: '8px'
};

const RentButton = () => {
    const onClickListener = (e: any) => {
        e.preventDefault();
        alert('qr rent');
    };

    return (
        <Wrapper>
            <div className='qrCodeButton' style={buttonStyle} onClick={onClickListener}>
                <div style={textContainerStyle}>
                    <div style={textBoxStyle}>
                        <QrCodeIcon/>
                        <div style={textStyle}>대여하기</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
};

export default RentButton;