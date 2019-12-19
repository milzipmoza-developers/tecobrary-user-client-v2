export class WishBookDto implements IWishBook {
    public image: string;
    public title: string;
    public author: string;
    public publisher: string;
    public isbn: string;
    public description: string;
    public userId: number;

    constructor(image: string, title: string, author: string, publisher: string, isbn: string, description: string, userId: number) {
        this.image = image;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.isbn = isbn;
        this.description = description;
        this.userId = userId;
    }
}