import styled from "styled-components";

export const StyledRow = styled.div`
    display: flex!important;
    align-items: center;
    justify-content: space-between;
    padding: 4px !important;
    gap:8px;
    .text{
        flex-grow: 1;
    }
    .icon.primary{
        i{
            color: var(--accent)!important;
        }
    }
`;

export const StyledListRow = styled.div`
    display: flex!important;
    align-items: center;
    justify-content: start;
    padding: 4px !important;
    gap:8px;
    .image{
        flex-grow: 1;
        max-width:  60px;
        .ant-avatar, img{
            width: 100%;
            height: auto;
        }
    }
    .description{
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title{
            color: var(--accent);
        }
    }
    
`;

export const StyledDetails = styled.div`
    display: flex!important;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 4px !important;
    
    .title, .title2{
        font-size: 1.25em;
        line-height: 1.4;
        font-weight: 400;
    }
    .title2{
        color: var(--accent);
        margin-bottom: .2rem !important;
    }
    .ant-typography{
        margin-bottom: .2rem !important;
    }
    .ant-btn{
        color: var(--accent)!important;
        border-color: var(--accent)!important;
        border-radius: 16px!important;
        
    }

`;