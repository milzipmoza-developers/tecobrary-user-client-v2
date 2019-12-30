import * as React from "react";

const RentListHeader = () => (
    <div style={{display: 'flex', flexDirection: 'row', paddingTop: '8px', paddingBottom: '8px'}}>
        <div style={{flex: '1', fontSize: '14px', fontWeight: 'bold', textAlign: 'center', alignSelf: 'center'}}>시리얼</div>
        <div style={{flex: '2', fontSize: '14px', fontWeight: 'bold', textAlign: 'center', alignSelf: 'center'}}>제목</div>
        <div style={{flex: '2', fontSize: '14px', fontWeight: 'bold', textAlign: 'center', alignSelf: 'center'}}>대출일</div>
        <div style={{flex: '1', fontSize: '14px', fontWeight: 'bold', textAlign: 'center', alignSelf: 'center'}}>며칠됨?</div>
        <div style={{flex: '1', fontSize: '14px', fontWeight: 'bold', textAlign: 'center', alignSelf: 'center'}}>반납</div>
    </div>
);

export default RentListHeader;