import React from 'react'
import CollectionItems from '../collectionItems/collectionItems'
import NavBar from '../navBar/navBar.component'
import {useQuery ,gql  } from '@apollo/client';
import './collectionPreview.css'

      const GET_PRODUCTS = gql `
      query { 
          products{
          title
          image_url
          price(currency:USD)
        }

        currency
        }
      `



 const CollectionPreview =()=> {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <section className='Preview'>
          <div className="previewContainer">
            <NavBar/>
          {data.products.map(({id, ...otherCollectionsProps})=> (
          <CollectionItems key={id} {...otherCollectionsProps} />
        ))}
          </div>
        
      </section>
    );
  }

export default CollectionPreview



// const CollectionPreview =()=>{
//     return(
//         <useQuery query={GET_PRODUCTS}>
//     {({ loading, error, data }) => {
//       if (loading) return <div>Loading...</div>;
//       if (error) return <div>Error :(</div>;
 
//       return (
// <div className="Preview">
//             <h1>i'm a react developer</h1>
//         </div>     
//          )
//     }}
//   </useQuery>
//     )
// }


// export default CollectionPreview