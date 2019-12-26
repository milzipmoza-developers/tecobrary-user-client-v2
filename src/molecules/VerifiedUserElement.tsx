import * as React from "react";
import {useEffect, useState} from "react";
import NonVerifiedUserIcon from "../atoms/NonVerifiedUserIcon";
import VerifiedUserIcon from "../atoms/VerifiedUserIcon";

interface IProps {
    authorization: string
}

const VerifiedUserElement = ({authorization}: IProps) => {
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        if (authorization !== 'NONE') {
            setVerified(true);
        }
    }, []);

    return (
        <div>
            {verified ? <VerifiedUserIcon auth={authorization}/> : <NonVerifiedUserIcon/>}
        </div>
    )
};

export default VerifiedUserElement;