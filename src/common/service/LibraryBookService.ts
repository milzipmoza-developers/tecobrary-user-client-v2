import base from "./Api";

const getBooks = (page: number, num: number) => (
    base().get('books', {
        params: {
            number: num,
            page,
        }
    })
);

const getTotal = () => (
    base().get('books/all')
);

const getBookById = (bookId: number) => (
    base().get(`books/${bookId}`)
);

const searchBook = (keyword: string, page: number, num: number) => (
    base().get('books/search', {
        params: {
            number: num,
            page,
            title: keyword,
        }
    })
);

export const libraryBookService = {
    getBookById,
    getBooks,
    getTotal,
    searchBook,
};