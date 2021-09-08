import styled from 'styled-components'

export const PromoCard = styled.div`
    border-radius: 8px;
    border: 1px solid #c3c3c3;
    text-align: center;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    padding: 1rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    max-width: 800px;
    margin: 30px auto;

    @media (min-width: 600px){
        align-items: flex-start;
        flex-direction: row;
        text-align: start;
    }
    
`

export const PromoImg = styled.img`
    width: 100px;
    margin-right: 1rem;
`

export const PromoTitle = styled.h1`
    font-size: 1rem;
    color: #2c3e50;
`

export const PromoInfo = styled.div``

export const PromoPrice = styled.span`
    font-size: 2rem;
    font-weight: 700;
    color: #3498d8;
`

export const PromoFooter = styled.footer`
    display: flex;
    align-items: center;
    
`

export const PromoLink = styled.a`
    border: 1px solid #3498d8;
    border-radius: 0.5rem;
    color: #3498d8;
    text-decoration: none;
    padding: 0.5rem 0.8rem;
`

export const PromoComment = styled.div`
    color: #95a5a6;
    font-weight: 700;
`
export const PromoCommentCount = styled.div`
    margin-left: auto;
    margin-right: 2rem;
    color: #3498d8;

`
