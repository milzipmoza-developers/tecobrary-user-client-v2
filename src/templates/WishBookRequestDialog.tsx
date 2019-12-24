import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import * as React from "react";
import DialogButton from "../atoms/dialog/DialogButton";
import DialogFooter from "../atoms/dialog/DialogFooter";
import RentBookDialogBody from "../atoms/rentbook/RentBookDialogBody";
import RentBookImageFrame from "../atoms/rentbook/RentBookImageFrame";
import RentBookImageHolder from "../atoms/rentbook/RentBookImageHolder";
import RentBookInfoFrame from "../atoms/rentbook/RentBookInfoFrame";
import RentBookInfoTitle from "../atoms/rentbook/RentBookInfoTitle";
import VDivider from "../atoms/VDivider";
import {TEXT_BUTTON_GREEN, TEXT_BUTTON_RED} from "../common/colors";

interface IProps {
    selectedBook: any;
    open: boolean;
    closeOnClick: any;
    confirmOnClick: any;
}

const WishBookRequestDialog = ({selectedBook, open, closeOnClick, confirmOnClick}: IProps) => {
    return (
        <Dialog
            open={open}
            onClose={closeOnClick}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"확인 부탁드려요~"}</DialogTitle>
            <DialogContent>
                <RentBookDialogBody>
                    <RentBookImageFrame>
                        <RentBookImageHolder bookInfo={selectedBook}/>
                    </RentBookImageFrame>
                    <RentBookInfoFrame>
                        <RentBookInfoTitle>{selectedBook ? selectedBook.title : ''}</RentBookInfoTitle>
                        <RentBookInfoTitle>{selectedBook ? selectedBook.author : ''}</RentBookInfoTitle>
                        <RentBookInfoTitle>{selectedBook ? selectedBook.publisher : ''}</RentBookInfoTitle>
                    </RentBookInfoFrame>
                </RentBookDialogBody>
                <div style={{
                    fontSize: '14px',
                    fontWeight: 'lighter',
                    height: '100px',
                    overflow: 'hidden',
                    paddingTop: '8px',
                }}>
                    {selectedBook ? selectedBook.description : ''}
                </div>
            </DialogContent>
            <DialogFooter>
                <DialogButton onClick={closeOnClick} color={TEXT_BUTTON_RED}>
                    취소
                </DialogButton>
                <VDivider/>
                <DialogButton onClick={confirmOnClick} color={TEXT_BUTTON_GREEN}>
                    확인
                </DialogButton>
            </DialogFooter>
        </Dialog>
    );
};

export default WishBookRequestDialog;