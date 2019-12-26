import * as React from "react";
import {BORDER_DEFAULT_GRAY} from "../../common/colors";

interface IProps {
    image: string;
}

const LibraryBookImage = ({image}: IProps) => (
    <div style={{
        border: `1px solid ${BORDER_DEFAULT_GRAY}`,
        borderRadius: '10px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        margin: '6px',
    }}>
        <img src={image} style={{width: '100%', borderRadius: '10px'}}/>
    </div>
);

export default LibraryBookImage;