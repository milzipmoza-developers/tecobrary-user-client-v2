import {WishBookDto} from "../classes/WishBookDto";
import base from "./Api";

export const create = (wishbook: WishBookDto) => (
    base().post('wishes', wishbook)
);