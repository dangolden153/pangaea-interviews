import React,{useState} from 'react'
import {connect} from 'react-redux'
import {RemoveItems} from '../../redux/cartItems/cartItems.action'
import {AddItems} from '../../redux/cartItems/cartItems.action'
import {clearCartItem} from '../../redux/cartItems/cartItems.action'
import closeSvg from '../pics/close.svg'
import {Container,SubContainer, Img, Title, Price,QuantityContainer,
    Arrow,Quantity, TitleQuantity, ImgSvg} from './checkoutItems.styles'

const CheckoutItems =({ cartitem, RemoveItems, AddItems,clearCartItem})=>{
const {title,image_url,price, id, quantity} =  cartitem 


 return(
        <Container>
            <SubContainer>
           

                <TitleQuantity>
            <Title >{title}</Title>

            <QuantityContainer>
    <Arrow onClick={() => RemoveItems(cartitem)}>&#10094;</Arrow>
    <Quantity>{quantity}</Quantity>
    <Arrow onClick={() => AddItems(cartitem)}>&#10095;</Arrow>
    </QuantityContainer>
           
    </TitleQuantity>
        <Price >${price}.00</Price>

        <Img 
       
        style={{
            backgroundImage: `url(${image_url})`
        }}/>

        <ImgSvg 
        style={{
            backgroundImage: `url(${closeSvg})`
         }}
         onClick={()=> clearCartItem(cartitem)}
         />

            </SubContainer>
        </Container>
    )
}

const mapDispatchToProps = dispatch =>({
    RemoveItems: item => dispatch(RemoveItems(item)),
     AddItems: item => dispatch(AddItems(item)),
     clearCartItem : item => dispatch(clearCartItem(item))
})

export default connect(null, mapDispatchToProps) (CheckoutItems)