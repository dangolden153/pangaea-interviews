import React from 'react'
import CollectionPreview from './collectionPreview/collectionPreview.component'
import {
    ApolloClient,
     InMemoryCache,
     ApolloProvider,
     useMutation,
     useSubscription,
     useQuery ,
      gql  } 
      from '@apollo/client';

import './homePage'



const Home =()=>{
    
const client = new ApolloClient ({    
    uri:'https://pangaea-interviews.now.sh/api/graphql',
    cache: new InMemoryCache()
})


    return(
        <section className="homePage">
            <div className="container">
        <ApolloProvider client={client}>
        <CollectionPreview/>
        </ApolloProvider>
            </div>
        </section>
    )
}

export default Home