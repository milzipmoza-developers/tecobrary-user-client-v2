import * as React from "react";
import HeartUnfilledIcon from "../atoms/HeartUnfilledIcon";

const buttonStyle = {
    cursor: 'pointer'
};

const HeartUnfilledButton = () => (
    <div style={buttonStyle}>
        <HeartUnfilledIcon/>
    </div>
);

export default HeartUnfilledButton