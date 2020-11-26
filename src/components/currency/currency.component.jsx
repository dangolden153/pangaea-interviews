import React from 'react'
import {useQuery ,gql  } from '@apollo/client';

import './currency.style.css'

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

const Currency =({onCurrencySelected})=>{
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    
      if (loading) return null;
      if (error) return `Error! ${error}`;
    
      return (
        <div>
     <select 
     className='select'
     name="currency" onChange={onCurrencySelected} >
      {data.currency.map(current => (
        <option key={current.id} value={current}>
          {current}
        </option>
      ))}
    </select>
        </div>
      );


}

export default Currency

