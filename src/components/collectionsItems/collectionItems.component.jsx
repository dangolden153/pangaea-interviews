import React from 'react'
import Button from '../button/button.component'
import {connect} from 'react-redux';

// import {AddItems} from '../../redux/cartItems/cartItems.action' ;
import {AddItems} from '../../redux/cartItems/cartItems.action'
import {Section,Container,Img,Title,Price} from './collectionItems.styles';


const CollectionItems =({item, AddItems}) => {
     const {title,image_url,price, id} = item;

    return(

        <Section>
            <Container>
        <Img className='img'
        key={image_url.id}
        style={{
            backgroundImage: `url(${image_url})`
        }}/>
        <Title key={title.id}>{title}</Title>
        <Price key={price.id}>{price}</Price>

        <Button onClick={()=> AddItems(item)} > Add to Cart</Button>
            </Container >
        </Section>
    )
}

const mapDispatchToProps = Dispatch =>({
    AddItems: item =>Dispatch(AddItems(item))
});

export default connect(
    null,
    mapDispatchToProps)
    (CollectionItems)   

