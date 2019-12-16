import {IBookInfo} from "../types";

export class BookInfoDto implements IBookInfo {
    public id: number;
    public image: string;
    public title: string;
    public author: string;
    public publisher: string;
    public description: string;
    public isbn: string;

    constructor(id: number, image: string, title: string, author: string, publisher: string, description: string, isbn: string) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.description = description;
        this.isbn = isbn;
    }
}