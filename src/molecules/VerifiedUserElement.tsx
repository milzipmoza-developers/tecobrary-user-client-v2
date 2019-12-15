import * as React from 'react';
import NonVerifiedUserIcon from "../atoms/NonVerifiedUserIcon";
import VerifiedUserIcon from "../atoms/VerifiedUserIcon";

interface IProps {
    verified: boolean;
    numeric?: number;
}

const VerifiedUserElement = ({verified, numeric}: IProps) => {
    return (
        <div>
            {verified ? <VerifiedUserIcon numeric={numeric}/> : <NonVerifiedUserIcon/>}
        </div>
    )
};

export default VerifiedUserElement;