import * as React from "react";
import {useEffect, useState} from "react";

interface IProps {
    auth: string;
}

const iconStyle = {
    fontSize: '15px',
    fontWeight: 300,
    marginBottom: '32px',
    marginTop: '32px',
};

const VerifiedUserIcon = ({auth}: IProps) => {
    const [authLevel, setAuthLevel] = useState('');

    useEffect(() => {
        if (auth === 'USER') {
            setAuthLevel('크루');
        }
        if (auth === 'MANAGER') {
            setAuthLevel('관리자');
        }
        if (auth === 'KING') {
            setAuthLevel('개발왕')
        }
    });

    return (
        <div style={iconStyle}>
            {`우아한테크코스 ${authLevel} 인증됨`}
        </div>
    )
};

export default VerifiedUserIcon;