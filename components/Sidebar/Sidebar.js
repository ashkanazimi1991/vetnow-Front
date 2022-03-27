import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import Link from 'next/link';



const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>خدمات وتنا </SidebarLink>
                    <SidebarLink to='services'  onClick={toggle}>افزایش راندمان </SidebarLink>
                    <SidebarLink to='products'  onClick={toggle}> محصولات </SidebarLink>
                    <SidebarLink to='automation'  onClick={toggle}>اتوماسیون </SidebarLink>
                    <SidebarLink to='about'  onClick={toggle}>درباره ما </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <Link href='login'>{<SidebarRoute>ثبت نام / ورود</SidebarRoute>}</Link>
                </SideBtnWrap>
                
            </SidebarWrapper>
        </SidebarContainer>    
    );
};

export default Sidebar;