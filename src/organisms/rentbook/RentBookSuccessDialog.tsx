import * as React from "react";
import RentBookDateRow from "../../atoms/rentbook/RentBookDateRow";
import RentBookDialogBody from "../../atoms/rentbook/RentBookDialogBody";
import RentBookImageFrame from "../../atoms/rentbook/RentBookImageFrame";
import RentBookImageHolder from "../../atoms/rentbook/RentBookImageHolder";
import RentBookInfoFrame from "../../atoms/rentbook/RentBookInfoFrame";
import RentBookInfoTitle from "../../atoms/rentbook/RentBookInfoTitle";
import RentBookSerialRow from "../../atoms/rentbook/RentBookSerialRow";
import SimpleDialog from "../../molecules/dialog/SimpleDialog";
import {ISuccessDialogProps} from "./ISuccessDialogProps";

const RentBookSuccessDialog = ({bookInfo, serial, confirmButtonHandler, cancelButtonHandler}: ISuccessDialogProps) => (
    <SimpleDialog
        title='확인해 볼까요'
        mode='success'
        confirmOnClick={confirmButtonHandler}
        cancelOnClick={cancelButtonHandler}>
        <RentBookDialogBody>
            <RentBookImageFrame>
                <RentBookImageHolder bookInfo={bookInfo}/>
            </RentBookImageFrame>
            <RentBookInfoFrame>
                <RentBookInfoTitle>{bookInfo ? bookInfo.title : ''}</RentBookInfoTitle>
                <RentBookSerialRow serial={serial}/>
                <RentBookDateRow/>
            </RentBookInfoFrame>
        </RentBookDialogBody>
    </SimpleDialog>
);

export default RentBookSuccessDialog;