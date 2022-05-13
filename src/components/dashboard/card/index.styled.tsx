
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-radius: 12px;
    background-color: var(--background-primary);
    aspect-ratio: 1/1;
    align-items: center;
    justify-content: center;

    .title{
        line-height: 1.25 !important;
        font-size: .7em !important;
    }
    .icon{
        margin-bottom: 1.5rem !important;
        width: 3rem !important;
        height: 3rem !important;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 32px !important;
        border: 1px solid var(--accent) !important;
        margin-bottom: 4px;
    }
    .icon, .icon i{
        font-size: 18px!important;
        color: var(--accent) !important;
    }
    .foot{
        font-size: 1.15em;
        line-height: 1.25;
        font-weight: 400;
        color: var(--accent) !important;
    }
`;

export const BasicContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-radius: 12px;
    background-color: var(--background-primary);   
    overflow-y: auto;
    min-height: 236px;
    max-height: 236px;
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
`;