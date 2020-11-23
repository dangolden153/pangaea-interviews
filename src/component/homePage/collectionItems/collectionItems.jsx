import React from 'react'
import Button from '../button/button'
import './collectionItems.css' 

const CollectionItems =({title,image_url, price})=>{

    return (
        <div className="items">
        <div className="itemsContainer">
        <div className="imgBox"
        style={{
            backgroundImage: `url(${image_url})`
        }}
        />
        <p className="title">{title}</p>
        <p className="price">${price}</p>
        <Button/>
        </div>
        </div>
    )
}

export default CollectionItems