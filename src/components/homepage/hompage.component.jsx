import React from 'react'
import Collection from '../collections/collections.component'
import {
    ApolloClient,
     InMemoryCache,
     ApolloProvider,
       } 
      from '@apollo/client';

import './hompage.styles.css'



const Home =()=>{
    
const client = new ApolloClient ({    
    uri:'https://pangaea-interviews.now.sh/api/graphql',
    cache: new InMemoryCache()
})


    return(
        <section className="homePage">
            <div className="container">
        <ApolloProvider client={client}>
        <Collection/>
        </ApolloProvider>
            </div>
        </section>
    )
}

export default Home