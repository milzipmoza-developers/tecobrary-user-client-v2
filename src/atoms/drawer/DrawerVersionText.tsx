import * as React from "react";

interface IProps {
    version: string;
}

const DrawerVersionText = ({version}: IProps) => (
    <div>version {version}</div>
);

export default DrawerVersionText;