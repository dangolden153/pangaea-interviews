import styled from 'styled-components'

export const  Section=styled.div `
overflow: hidden;
`

export const  Container=styled.div `
font-family: BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform .2s;

    
`
export const  Img=styled.div `
height: 134px;
    width: 98px;
    background-size:contain ;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 35px;
    transition: transform .3s;

    ${Container}:hover & {
        transform: scale(1.1);
        transition: transform .3s;
        opacity: .8; 
    }

    @media screen and (max-width: 768px){
    height: 112px;
    width: 81px;
    margin-bottom: 13px;

        }
`

export const Title =styled.p `
margin: 0;

@media screen and (max-width: 768px){
    font-size: 12px; 
}
`
export const Price =styled.p `
margin: 10px;

@media screen and (max-width: 768px){
    font-size: 12px; 
}
`



