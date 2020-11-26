import React, {useState} from 'react'
import {connect} from 'react-redux'
import {SelectCartitems} from '../../redux/cartItems/cartItems.selector'
import CheckoutItems from '../checkoutItems/checkoutItems.component'
import Total from '../total/total.component' 
import Currency from '../currency/currency.component'
import './navbar.styles.css'

const NavBar =({CartItems}) => {

    

    const [state, setState] = useState(false)

    const toggle =()=>{
        setState(!state)
    } 

    return(
        <div className= "navbar">
            <div className={state ? "navIconActive":"navIcon" }onClick={toggle}>
                <div className={state ? "line1Action" : "line1"}></div>
                <div className={state ? "line2Action" : "line2"}></div>
            </div>

            <div className={state ?  "navBackgroundActive " : "navBackground "} onClick={toggle}>
            </div>
            <div className={state ? "navContainerActive " : "navContainer"}>

        <div className="textNav">
        <div className='nav' onClick={toggle}>
                <div className= "navline1" ></div>
                <div className= "navline2" ></div>
            </div>
            <p className="cart-text">your cart</p>
        </div>
           

            <div className="currencyBox">
                <Currency/>
            </div>

                <div className="checkoutItemsCon">
     { CartItems.map(cartitem => 
     <CheckoutItems key={cartitem.id} cartitem={cartitem} />)  }
                </div>


<div className="totalContainer">
     <Total/>
</div>
            </div>

           
        </div>
    )
}

const mapStateToProps = ({Cart : {CartItems}}) =>({
    CartItems 
})

// const mapStateToProps = (state) =>({
//         CartItem :SelectCartitems(state)
// })
export default connect( mapStateToProps)(NavBar);