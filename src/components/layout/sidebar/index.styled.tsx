import { Layout } from "antd";
import styled from "styled-components";

export const StyledLayout = styled(Layout)`
    section.ant-layout{
        position: absolute;
        width: 100vw!important;
        height: 100vh!important;
        z-index: 0;
        
    }
    .ant-layout-content{
        margin: 0px!important;
        overflow-y: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 3px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: var(--accent); 
        }
        
        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: var(--background-secondary); 
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: var(--accent); 
        }
        
        
        
        @media (min-width: 1440px) {
            padding: 32px 40px 32px 328px ;
        }

        @media (max-width: 1439px) {
            padding: 32px 32px 32px 112px ;
        }

        @media (max-width: 768px) {
            padding: 80px 32px 32px 32px ;
        }

        @media (max-width: 425px) {
            padding: 74px 20px 20px 20px ;
        }
    }
    .ant-layout-sider-collapsed.ant-layout-sider-below{
        transition-delay: .5s!important;
        & + section .ant-layout-header{
            transition-delay: .1s!important;
        }
        @media (max-width: 991px) {
            flex: 0 0 0px!important;
            max-width: 0px!important;
            min-width: 0px!important;
            width: 0px!important;
        }
    }
    .ant-layout-header{
        position: fixed;
        z-index: 1;
        width: 100%;
        left: 0;
        top: 0;
        display:  flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--accent)!important;
        transition: .5s;
        transition-delay: .5s;
        border-radius: 0px 0px 16px 16px ;
        

        @media (min-width: 992px) {
            display: none!important;
        }
        &.move-up{
            top: -10%;
        }

        .header-logo{
            
            .logo-lg{
                width: 100px;
            }
        }
        i{
            font-size: 25px!important;
        }

        button{
            padding-top: 0px!important;
        }
    }

    .ant-layout-sider-children{
        display: flex;
        flex-direction: column;
        padding-top: 32px!important;
        padding-bottom: 32px!important;
    }
    .language_dropdown, .icon-row{
        width: fit-content;
        align-self: center;
        transition: 0;
    }
    .icon-row{
        display: flex;
    }
    .ant-layout-sider{
        height: 100vh!important;
        overflow-y: hidden;
        overflow-x: hidden;
        transition-delay: .6s!important;
        z-index: 1;
        &-collapsed{
            .info-panel{
                .name{
                    opacity: 0;
                }
            }
            .language_dropdown, .icon-row{
                opacity: 0;
            }
            .logo-sm{
                display: block!important;
                opacity: 1!important;
            }
            .logo-lg{
                display: none!important;
                opacity: 0!important;
            }
        }

        
    }
    .ant-layout-sider, .ant-menu{
        border-radius: 0 16px 16px 0;
        background: var(--accent)!important; 
    }
    .ant-menu-item-active{
        color: var(--text-color)!important; 
        
    }   
    .ant-menu-submenu{
        &-selected .ant-menu-submenu-title{
            background: var(--accent35)!important;
        }
        &-active, &-selected, .ant-menu-submenu-title, &-open .ant-menu-submenu-title{
            color: var(--text-color)!important; 
            border-radius: 16px;
            &:hover{
                color: var(--text-color)!important; 
                background: var(--accent35)!important;
                
            }
        }
    }
    .ant-menu-item{
        border-radius: 16px;

        &-selected{
            background: var(--accent35)!important;
        }
        &::after{
            border-right-width: 0px!important; 
            
        }
        &:hover{
            color: var(--text-color)!important; 
            background: var(--accent35)!important;
            
        }
    }

    .logo-panel{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        
        img{
            
            transition: 2s;
        }
        img.logo-sm{
            width: 30%;
        }
        img.logo-lg{
            width: 70%;
        }
        .logo-sm{
            display: none;
            opacity: 0;
        }
        
    }
    .menu-panel{
        padding: 32px 16px!important;
        height: 70vh!important;
        overflow-y: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 3px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: var(--accent); 
        }
        
        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: var(--background-primary); 
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: var(--accent); 
        }
    }
    

    .info-panel{
        width: 100%;
        height: 30vh!important;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 32px 0 32px 0;
        
    }
    .user-container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 12px;
        border-radius: 12px;
        transition: 2s;
        &:hover{
            background: var(--accent35)!important;
        }
    }
`;
