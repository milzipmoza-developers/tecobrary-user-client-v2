import base from "./Api";

export const getBooks = (page: number, num: number) => (
    base().get('books', {
        params: {
            number: num,
            page,
        }
    })
);

export const getTotal = () => (
    base().get('books/all')
);

export const getBookById = (bookId: number) => (
    base().get(`books/${bookId}`)
);

export const searchBook = (keyword: string, page: number, num: number) => (
    base().get('books/search', {
        params: {
            number: num,
            page,
            title: keyword,
        }
    })
);