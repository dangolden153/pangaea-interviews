import React from 'react'
import {useQuery ,gql  } from '@apollo/client';
import CollectionItems from '../collectionsItems/collectionItems.component'
import NavBar from '../navbar/navbar.component'
import Currency from '../currency/currency.component'


import {Preview, PreviewContainer} from './collections.styles'






const GET_PRODUCTS = gql `
query { 
    products{
    title
    image_url
    price(currency:USD)
    id
  }

  currency
  }
`





const Collection =({currency})=>{
    const { loading, error, data } =  useQuery(GET_PRODUCTS, {
      variables: { currency }
    });
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <Preview>
       
        <NavBar/>
      
          <PreviewContainer>
          

          {data.products.map((item)=> (
          <CollectionItems key={item.id} item={item} />
        ))}
          </PreviewContainer>
        
      </Preview>
    );
  }


export default Collection




