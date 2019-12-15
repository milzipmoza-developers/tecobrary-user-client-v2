import * as React from "react";
import {useState} from "react";
import HeartFilledButton from "../molecules/HeartFilledButton";
import HeartUnfilledButton from "../molecules/HeartUnfilledButton";

interface IProps {
    likeStatus: boolean;
}
const HeartButton = ({likeStatus}: IProps) => {
    const [like, setLike] = useState(likeStatus);

    const heartButtonHandler = (e: any) => {
        // TODO: send to server change status
        e.preventDefault();
        like ? setLike(false) : setLike(true);
    };

    return (
        <div onClick={heartButtonHandler}>
            {(like) ?
                <HeartFilledButton/> :
                <HeartUnfilledButton/>}
        </div>
    );
};

export default HeartButton;