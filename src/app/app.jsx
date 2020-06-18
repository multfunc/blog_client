import React, {useState, useEffect, lazy, Suspense} from 'react'
import {useQuery, useLazyQuery, ApolloProvider} from '@apollo/react-hooks'
import {useHistory, Route, BrowserRouter as Router} from 'react-router-dom'
import ApolloClient from "apollo-client";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";

import './app.scss'
import {AppApple} from "./app-apple/app-apple";
import {API_GQL_SERVER} from "../register-center/data-from/data-from";
import GIF_LOADING from './image/loading.gif'

const graphQLServerLink = new HttpLink({uri: API_GQL_SERVER}); //GraphQL服务端的地址uri
const client = new ApolloClient({
    //创建一个GraphQL的客户端，把GraphQL服务端的地址uri传递给客户端。后面还有缓存
    link: graphQLServerLink,
    cache: new InMemoryCache(),
});

export function App(props) {

    //声明count,并初始化为0
    const [count, setCount] = useState(0)

    //useGraphql
    // const {loading, error, data} = useQuery(QUERY_DIMENSION_NOTE_READINGS,{variables:{pageSize:2,a:4}})
    // const [test,{loading, error, data}] = useLazyQuery(QUERY_PHOTO_POSTER,{variables:{}})

    // useRoute

    // useEffect()


    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error :({error.message}</p>

    return <ApolloProvider client={client}>
        <article className={"app"}>
            <Router>
                <Suspense fallback={<div><img src={GIF_LOADING}/></div>}>
                    <AppApple/>
                </Suspense>
            </Router>
        </article>
    </ApolloProvider>
}

export {App as default} from "./app.jsx"
