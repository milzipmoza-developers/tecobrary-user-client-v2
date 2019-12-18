import * as React from "react";
import CardMessageHolder from "../../atoms/CardMessageHolder";
import TitledCard from "../TitledCard";

const LibraryBookCommentsCard = () => (
    <TitledCard title='한줄 서평' elevation={false} fontSize='18px'>
        <div >
            <div style={{width: '100%', height: '90px', backgroundColor: '#d2d2d2', borderRadius: '9px'}}>
                <CardMessageHolder>서비스 준비중</CardMessageHolder>
            </div>
        </div>
    </TitledCard>
);

export default LibraryBookCommentsCard;