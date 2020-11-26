import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {SelectTotalCount } from '../../redux/cartItems/cartItems.selector'
import {Container,SubContainer,Text_Price,ButtonWhite,ButtonDark,Line,P} from './total.styles'
import Currency from '../currency/currency.component'



const Total =({total})=>{

    return(
        <Container>
            <SubContainer>
                <Line/>
                
                <Text_Price>
                    <P>Subtotal</P>
                    <P>${total}.00</P>
                </Text_Price>

                <ButtonWhite>make this a subscription (save 20%)</ButtonWhite>
                <ButtonDark>proceed to checkout?</ButtonDark>



  







            </SubContainer>
        </Container>
    )
}

const mapStateToProps = ({Cart : {CartItems}}) =>({
    total :  CartItems.reduce((accumulatedQuantity,CartItems) =>
    accumulatedQuantity + CartItems.quantity*CartItems.price, 0)
})

// const mapStateToProps = createStructuredSelector({
//     total: SelectTotalCount
// })

export default connect (mapStateToProps)(Total)