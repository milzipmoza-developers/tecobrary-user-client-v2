import * as React from "react";

interface IProps {
    image: string;
}

const LibraryBookImage = ({image}: IProps) => (
    <div style={{flex: 1}}>
        <img src={image}/>
    </div>
);

export default LibraryBookImage;