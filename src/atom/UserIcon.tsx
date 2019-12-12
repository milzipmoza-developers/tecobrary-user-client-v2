import * as React from "react";

const userIconStyle = (width: any, height: any) => ({
    borderRadius: '50%',
    height: `${height}`,
    width: `${width}`,
});

const UserIcon = ({imgUrl, width, height}: any) => <img alt='user' src={imgUrl} style={userIconStyle(width, height)}/>;

export default UserIcon;