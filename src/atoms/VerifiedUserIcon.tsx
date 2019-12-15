import * as React from "react";

interface IProps {
    numeric?: number;
}

const iconStyle = {
    fontSize: '15px',
    fontWeight: 300,
    marginBottom: '32px',
    marginTop: '32px',
};

const VerifiedUserIcon = ({numeric}: IProps) => (
    <div style={iconStyle}>
        {`우아한테크코스 ${numeric}기 인증됨`}
    </div>
);

export default VerifiedUserIcon;