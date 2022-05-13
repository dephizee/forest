
import { Tag } from "antd";
import styled from "styled-components";

export const DivRow = styled.div`
    /* display: flex; */
    width: 100%!important;
    display: flex;
    padding: 16px;
    border-radius: 12px;
    background-color: var(--background-primary);
    align-items: center;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
    flex-wrap: wrap;
    margin-bottom: 10px;
    a{
        color: var(--text-color)!important;
        font-weight: 400!important;
    }
    @media (max-width: 768px){
        div{
            width: 100%;
        }
        div.tag-div, div.order-div{
            width: fit-content!important;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        
    }
        
    
    
`;

export const StyledTag = styled(Tag)`
    display: flex!important;
    align-items: center;
    justify-content: center;
    background-color: transparent!important;
    padding: 4px 8px !important;
    border-radius: 16px!important;    
`;