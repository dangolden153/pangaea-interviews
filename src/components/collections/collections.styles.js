import styled from 'styled-components'

export const Preview =styled.div `
width: 100%;
padding: 70px 0;
`

export const  PreviewContainer=styled.div `
display: grid;
    grid-template-columns: repeat(3, 292px);
    grid-template-rows: repeat(7, 1fr);
    grid-gap:100px 20px;
    justify-content: center;
    align-items: center;
    background: #e3e6e3;


@media screen and (max-width: 768px){
    grid-template-columns: repeat(2,195px);
    grid-gap: 60px 7px;

    }
`

    
