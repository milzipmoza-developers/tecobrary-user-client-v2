import * as React from "react";

const iconStyle = {
    fontSize: '15px',
    fontWeight: 600,
    marginBottom: '32px',
    marginTop: '32px',
};

const NonVerifiedUserIcon = () => (
    <div style={iconStyle}>
        <div>인증이 필요합니다.</div>
        <div>관리자에게 문의하세요.</div>
    </div>
);

export default NonVerifiedUserIcon;