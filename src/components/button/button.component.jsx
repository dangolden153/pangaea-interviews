import React from 'react'

import {Section, Container} from './button.styles'


const Button =({children,inverted, ...otherProps})=>{

    return(

        <Section>
            <Container  {...otherProps}>
            {children}
            </Container>
        </Section>
    )
}

export default Button



