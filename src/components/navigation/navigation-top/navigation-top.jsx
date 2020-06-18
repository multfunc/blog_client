import React, {useState, useEffect, lazy, useContext} from 'react'
import {useQuery, useLazyQuery} from '@apollo/react-hooks'
import {useHistory} from 'react-router-dom'

import './navigation-top.scss'
import SVG_LOGO from "../../../app/app-apple/image/logo.svg";
import {ContextAuthorization} from "../../../register-center/context-app/context-app";
import {random_char} from "../../../utils/security_utils/random_char/random_char";
import {
    ROUTE_APP, ROUTE_DIMENSION_READING,
    ROUTE_MANAGE_DIMENSION_READING
} from "../../../register-center/route/route-register-center/route-register-center";


export function NavigationTop(props) {

    //声明count,并初始化为0
    const [authorization, setAuthorization] = useContext(ContextAuthorization)
    const [isLogin, setIsLogin] = useState(false)

    //useGraphql
    // const {loading, error, data} = useQuery(QUERY_DIMENSION_NOTE_READINGS,{variables:{pageSize:2,a:4}})
    // const [test,{loading, error, data}] = useLazyQuery(QUERY_PHOTO_POSTER,{variables:{}})

    // useRoute
    const history = useHistory()

    // useEffect()
    /****************监听Context**********************/
    useEffect(()=>{
        if(authorization['metadata']['isLogin']){
            setIsLogin(true)
        }else{
            setIsLogin(false)
        }
    },[authorization])
    /****************监听Context**********************/

    let handleClickLogin = e => {
        let tmp = {...authorization}
        tmp['metadata']['isActive'] = !tmp['metadata']['isActive']
        setAuthorization(tmp)
    }

    let handleClickEnterManage=e=>{
        history.push(`${ROUTE_APP[0]}/${ROUTE_MANAGE_DIMENSION_READING[0]}`)
    }

    /****************返回首页**********************/
    let handleCLickBackHome=e=>{
        history.push(`${ROUTE_APP[0]}/${ROUTE_DIMENSION_READING[0]}`)
    }
    /****************返回首页**********************/
    /****************test**********************/
    useEffect(()=>{
        console.log(random_char(6))
    })
    /****************test**********************/
    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error :({error.message}</p>

    return <article className={"navigation-top"}>
        <header>
            <div><img onClick={handleCLickBackHome} src={SVG_LOGO} alt={'loading'}/></div>
        </header>
        <section>
        </section>
        <footer>
            {
                isLogin?
                    <article className={'login-true'}>
                        <header>
                        </header>
                        <section>
                            <a onClick={handleClickEnterManage}>数据录入</a>
                            <a>退出</a>
                        </section>
                        <footer></footer>
                    </article>
                    :<article className={'login-false'}>
                    <header></header>
                    <section><a onClick={handleClickLogin}>登录</a><a>注册</a></section>
                    <footer></footer>
                    </article>
            }
        </footer>
    </article>
}

export {NavigationTop as default} from "./navigation-top.jsx"
