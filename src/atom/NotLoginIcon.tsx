import * as React from "react";

import profile from './profile-user.svg';

const notLoginIconStyle = (width: any, height: any) => ({
    borderRadius: '50%',
    height: `${height}`,
    width: `${width}`,
});

const NotLoginIcon = ({width, height}: any) => <img alt="notLogin" src={profile} style={notLoginIconStyle(width, height)}/>;

export default NotLoginIcon;