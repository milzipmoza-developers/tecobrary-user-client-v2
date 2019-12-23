import {WishBookDto} from "../classes/WishBookDto";
import {create} from "../service/WishBookSerivce";

const createWishBook = async (wishBookDto: WishBookDto) => {
    try {
        const response = await create(wishBookDto);
        // tslint:disable-next-line:no-console
        console.log(response.data);
    } catch (e) {
        // tslint:disable-next-line:no-console
        console.log(e);
        throw new Error(e.message);
    }
};

export const wishBookController = {
    createWishBook,
};