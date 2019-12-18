import * as React from "react";
import SmallButton from "../../atoms/SmallButton";

interface IProps {
    downOnClick: any;
    upOnClick: any;
}

const BooksFooter = ({downOnClick, upOnClick}: IProps) => (
    <div style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '12px'
    }}>
        <SmallButton onClick={downOnClick}>down</SmallButton>
        <SmallButton onClick={upOnClick}>up</SmallButton>
    </div>
);

export default BooksFooter;