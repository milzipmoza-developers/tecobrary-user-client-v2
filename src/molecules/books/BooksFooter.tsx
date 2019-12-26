import * as React from "react";
import {CSSProperties} from "react";
import LeftIcon from "../../atoms/icons/LeftIcon";
import RightIcon from "../../atoms/icons/RightIcon";
import SmallButton from "../../atoms/SmallButton";

interface IProps {
    downOnClick: any;
    upOnClick: any;
}

const buttonContainer: CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
};

const BooksFooter = ({downOnClick, upOnClick}: IProps) => (
    <div style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '12px',
        textAlign: 'center',
    }}>
        <SmallButton onClick={downOnClick}>
            <div style={buttonContainer}>
                <LeftIcon/>
            </div>
        </SmallButton>
        <SmallButton onClick={upOnClick}>
            <div style={buttonContainer}>
                <RightIcon/>
            </div>
        </SmallButton>
    </div>
);

export default BooksFooter;