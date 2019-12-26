import {Drawer} from "@material-ui/core";
import * as React from "react";
import {CSSProperties, useState} from "react";
import Body from 'src/organisms/Body';
import Divider from "../atoms/Divider";
import DrawerHeader from "../atoms/drawer/DrawerHeader";
import BookshelfIcon from "../atoms/icons/BookshelfIcon";
import HistoryIcon from "../atoms/icons/HistoryIcon";
import HomeIcon from "../atoms/icons/HomeIcon";
import ListIcon from "../atoms/icons/ListIcon";
import RecommendIcon from "../atoms/icons/RecommendIcon";
import WishListIcon from "../atoms/icons/WishListIcon";
import {IDrawerItem} from "../common/types";
import DrawerItems from "../organisms/drawer/DrawerItems";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import './css/defaultTemplate.css'

interface IProps {
    title: string;
    loggedIn: boolean;
    imgUrl?: string;
    children?: any;
    drawer?: boolean;
    profileIcon: 'visible' | 'hidden';
    visibleRentBtn?: 'hidden' | 'visible';
}

const templateStyle: CSSProperties = {
    backgroundColor: '#ffffff',
    flex: 1,
    height: '100%',
    maxWidth: '450px',
    minWidth: '250px',
    overflow: 'scroll',
    position: 'relative',
    width: '100%',
};

const drawerItems: IDrawerItem[] = [
    {title: '대시보드', to: '/', icon: <HomeIcon/>},
    {title: '희망도서 신청', to: '/wishes', icon: <WishListIcon/>},
    {title: '장서 목록', to: '/books', icon: <BookshelfIcon/>},
    {title: '추천도서', to: '/recommends', icon: <RecommendIcon/>},
    {title: '대여 현황', to: '/rentlists', icon: <ListIcon/>},
    {title: '대여 기록', to: '/histories', icon: <HistoryIcon/>},
];

const DefaultTemplate = (props: IProps) => {
    const [drawer, setDrawer] = useState(false);

    const openDrawerHandler = () => {
        setDrawer(true);
    };

    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawer(open);
    };

    return (
        <div id='template' className='defaultTemplate' style={templateStyle}>
            <Header
                className='templateHeader'
                loggedIn={props.loggedIn}
                imgUrl={props.imgUrl}
                profileIcon={props.profileIcon}
                openDrawerHandler={openDrawerHandler}>
                {props.title}
            </Header>
            <Body className='templateBody'>
                {props.children}
            </Body>
            <div style={{visibility: props.visibleRentBtn}}>
                <Footer className='templateFooter'/>
            </div>
            <Drawer
                open={drawer} onClose={toggleDrawer(false)} style={{width: '70%'}}>
                <DrawerHeader version='beta 0.0.1'/>
                <Divider/>
                <DrawerItems drawerItems={drawerItems}/>
            </Drawer>
        </div>
    );
};

export default DefaultTemplate;