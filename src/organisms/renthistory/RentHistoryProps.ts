import {IRentHistoryProps} from "./IRentHistoryProps";

export class RentHistoryProps implements IRentHistoryProps {
    public bookId: number;
    public title: string;
    public author: string;
    public rentDate: number;
    public returnDate: number;
    public likeStatus: boolean;

    constructor(bookId: number, title: string, author: string, rentDate: number, returnDate: number, likeStatus: boolean) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.rentDate = rentDate;
        this.returnDate = returnDate;
        this.likeStatus = likeStatus;
    }
}