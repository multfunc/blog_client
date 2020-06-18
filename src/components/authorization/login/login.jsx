import React, {useState, useEffect, lazy, useContext} from 'react'
import {useQuery, useLazyQuery} from '@apollo/react-hooks'
import {useHistory} from 'react-router-dom'
import {createPortal} from 'react-dom'

import './login.scss'
import {QUERY_AUTHORIZATION_USER_LOGIN} from "../../../register-center/graphql-schema/user/graphql-user";
import {encrypt_go} from "../../../utils/security_utils/encrypt_go/encrypt_go";
import {ContextAuthorization} from "../../../register-center/context-app/context-app";
import {
    ROUTE_APP,
    ROUTE_MANAGE_DIMENSION_READING
} from "../../../register-center/route/route-register-center/route-register-center";
import {MAP_NAME_AUTHORIZATION} from "../../../register-center/security/map-localstorage/map-localstorage";


export function Login(props) {

    // useContext
    const [authorization,setAuthorization]=useContext(ContextAuthorization)
    //声明count,并初始化为0
    const [count, setCount] = useState(0)
    const [account,setAccount]=useState('')
    const [password,setPassword]=useState('')
    const [isShow,setIsShow]=useState(false)

    //useGraphql
    const [ getAuthorizationUserLogin,{data:dataAuthorizationUserLogin} ]= useLazyQuery(QUERY_AUTHORIZATION_USER_LOGIN)
    // const [test,{loading, error, data}] = useLazyQuery(QUERY_PHOTO_POSTER,{variables:{}})

    // useRoute
    const history = useHistory()

    // useEffect()
    /****************Context**********************/
    useEffect(()=>{
        console.log(authorization)
        if(authorization['metadata']['isActive']){
            setIsShow(true)
        }else{
            setIsShow(false)
        }
    },[authorization])
    /****************Context**********************/
    /****************验证登录**********************/
    useEffect(()=>{

        if(dataAuthorizationUserLogin&&dataAuthorizationUserLogin['authorizationUserLogin']){
            console.log(dataAuthorizationUserLogin['authorizationUserLogin'])
        }

        if(dataAuthorizationUserLogin&&dataAuthorizationUserLogin['authorizationUserLogin']){
            console.log(dataAuthorizationUserLogin['authorizationUserLogin'])
            console.log("登录成功")
            // history.push(`${ROUTE_APP[0]}/${ROUTE_MANAGE_DIMENSION_READING[0]}`)
            // 更新Context
            let tmp={...authorization}
            tmp['metadata']['isActive']=false
            tmp['metadata']['isLogin']=true
            setAuthorization(tmp)

            //更新localStorage
            localStorage.setItem(MAP_NAME_AUTHORIZATION,JSON.stringify(dataAuthorizationUserLogin['authorizationUserLogin']))
        }
    },[dataAuthorizationUserLogin])
    /****************验证登录**********************/


    /****************登录**********************/
    let handleClickLogin=e=>{
        getAuthorizationUserLogin({
            variables:{
                account:account,
                en_password:encrypt_go(password)
            }
        })
    }
    /****************登录**********************/
    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error :({error.message}</p>

    return createPortal(isShow?<article className={"login"}>
        <div></div>
        <article className={"login-content"}>
            <header></header>
            <section>
                <div>账号：</div><div><input value={account} onChange={e=>setAccount(e.target.value)}/></div>
                <div>密码：</div><div><input value={password} onChange={e=>setPassword(e.target.value)}/></div>
            </section>
            <footer>
                <button onClick={handleClickLogin}>登录</button>
            </footer>
        </article>
        <div></div>
    </article>:null,document.body)
}

export {Login as default} from "./login.jsx"
