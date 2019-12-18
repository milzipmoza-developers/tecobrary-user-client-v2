import {IBookProps} from "../types/ILibraryBook";

export class LibraryBookDto implements IBookProps {
    public id: string;
    public title: string;
    public author: string;
    public publisher: string;
    public isbn: string;
    public description: string;

    constructor(id: string, title: string, author: string, publisher: string, isbn: string, description: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.isbn = isbn;
        this.description = description;
    }
}