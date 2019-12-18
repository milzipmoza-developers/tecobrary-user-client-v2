import * as React from "react";
import {BORDER_DEFAULT_GRAY} from "../../common/colors";

interface IProps {
    image: string;
}

const LibraryBookImage = ({image}: IProps) => (
    <div style={{flex: 1, margin: '6px', borderRadius: '10px', border: `1px solid ${BORDER_DEFAULT_GRAY}`, display: 'flex', flexDirection: 'column'}}>
        <img src={image} style={{width: '100%', borderRadius: '10px'}}/>
    </div>
);

export default LibraryBookImage;