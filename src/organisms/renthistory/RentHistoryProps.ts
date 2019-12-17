import {IRentHistoryProps} from "./IRentHistoryProps";

export class RentHistoryProps implements IRentHistoryProps{
    public bookId: number;
    public title: string;
    public author: string;
    public createdAt: number;
    public deletedAt: number;
    public likeStatus: boolean;

    constructor(bookId: number, title: string, author: string, createdAt: number, deletedAt: number, likeStatus: boolean) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.createdAt = createdAt;
        this.deletedAt = deletedAt;
        this.likeStatus = likeStatus;
    }
}