import {WishBookDto} from "../classes/WishBookDto";
import {create} from "../service/WishBookSerivce";

const createWishBook = async (wishBookDto: WishBookDto) => {
    const response = await create(wishBookDto);
    return response.data;
};

export const wishBookController = {
    createWishBook,
};