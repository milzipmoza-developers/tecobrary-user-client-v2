import * as React from "react";

const emailTagStyle = {
    fontSize: '14px',
    fontWeight: 300,
    marginTop: '4px',
};

const UserEmailTag = ({children}: any) => (
    <div className='userEmailTag' style={emailTagStyle}>
        {children}
    </div>
);

export default UserEmailTag;