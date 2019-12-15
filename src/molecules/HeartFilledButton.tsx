import * as React from "react";
import HeartFilledIcon from "../atoms/HeartFilledIcon";

const buttonStyle = {
    cursor: 'pointer'
};

const HeartFilledButton = () => (
    <div style={buttonStyle}>
        <HeartFilledIcon/>
    </div>
);

export default HeartFilledButton;