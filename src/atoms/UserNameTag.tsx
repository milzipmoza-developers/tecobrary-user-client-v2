import * as React from "react";

const nameTagStyle = {
    fontSize: '16px',
    fontWeight: 500,
    marginTop: '12px',
};
const UserNameTag = ({children}: any) => (
    <div className='userNameTag' style={nameTagStyle}>
        {children}
    </div>
);

export default UserNameTag;