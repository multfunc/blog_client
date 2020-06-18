import React, {useState, useEffect, lazy, useContext} from 'react'
import {useQuery,useLazyQuery} from '@apollo/react-hooks'
import {useHistory} from 'react-router-dom'
import {createPortal} from "react-dom";

import {MAP_NAME_AUTHORIZATION} from "../../../register-center/security/map-localstorage/map-localstorage";
import {ContextAuthorization} from "../../../register-center/context-app/context-app";


export function Init(props) {

    //声明count,并初始化为0
    const [authorization,setAuthorization]=useContext(ContextAuthorization)

    //useGraphql
    // const {loading, error, data} = useQuery(QUERY_DIMENSION_NOTE_READINGS,{variables:{pageSize:2,a:4}})
    // const [test,{loading, error, data}] = useLazyQuery(QUERY_PHOTO_POSTER,{variables:{}})

    // useRoute
    const history=useHistory()

    // useEffect()
    useEffect(()=>{
        let authorizationLocalStorage=localStorage.getItem(MAP_NAME_AUTHORIZATION)
        authorizationLocalStorage=JSON.parse(authorizationLocalStorage)
        console.log(authorizationLocalStorage)
        if(authorizationLocalStorage&&authorizationLocalStorage['account']){
            let tmp={...authorization}
            tmp['metadata']['isLogin']=true
            setAuthorization(tmp)
        }
    },[])


    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error :({error.message}</p>

    return createPortal(null,document.body)
}

export {Init as default} from "./init.jsx"
