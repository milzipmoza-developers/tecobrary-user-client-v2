import * as React from "react";
import {BORDER_DEFAULT_GRAY} from "../../common/colors";
import {IBookInfo} from "../../common/types";

interface IProps {
    bookInfo: IBookInfo | null;
}

const imageStyle = {
    alignItems: 'center',
    border: '1px solid',
    borderColor: BORDER_DEFAULT_GRAY,
    height: '110px',
    overflow: 'hidden',
    width: 'fit-content',
};

const RentBookImageHolder = ({bookInfo}: IProps) => (
    <div style={imageStyle}>
        <img src={bookInfo ? bookInfo.image : ''}/>
    </div>
);

export default RentBookImageHolder;