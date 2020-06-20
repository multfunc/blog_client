import React, {useState, useEffect, lazy, useContext} from 'react'
import {useQuery, useLazyQuery} from '@apollo/react-hooks'
import {useHistory, Route, useLocation} from 'react-router-dom'

import './app-apple.scss'
import {ContextAuthorization} from "../../register-center/context-app/context-app";
import SVG_LOGO from './image/logo.svg'
import {
    ROUTE_APP, ROUTE_DIMENSION_READING,
    ROUTE_LOGIN, ROUTE_MANAGE_DIMENSION_READING
} from "../../register-center/route/route-register-center/route-register-center";
import {Login} from "../../components/authorization/login/login";
import {Init} from "../../components/a-init/init/init";
import {NavigationTop} from "../../components/navigation/navigation-top/navigation-top";
import {DimensionReading} from "../../components/dimension-reading/dimension-reading";
import {DimensionShow} from "../../components/dimension-show/dimension-show";
import {Register} from "../../components/authorization/register/register";
import {ManageDimensionReading} from "../../components/manage/manage-dimension-reading/manage-dimension-reading";


export function AppApple(props) {

    // useContext
    const contextAuthorization = useContext(ContextAuthorization)
    const [authorization, setAuthorization] = useState({
        ...contextAuthorization[0]
    })

    //声明count,并初始化为0
    // const [loginShow, setLoginShow] = useState(false)
    //useGraphql
    // const {loading, error, data} = useQuery(QUERY_DIMENSION_NOTE_READINGS,{variables:{pageSize:2,a:4}})
    // const [test,{loading, error, data}] = useLazyQuery(QUERY_PHOTO_POSTER,{variables:{}})

    // useRoute
    const history = useHistory()
    const location = useLocation()
    // useEffect()
    useEffect(() => {
        console.log(location)
        if (location['pathname'] === "/") {
            history.push(`${ROUTE_APP[0]}/${ROUTE_DIMENSION_READING[0]}`)
        }
    }, [])

    /****************test**********************/
    useEffect(() => {
        console.log(ContextAuthorization[0])
        console.log(authorization)
    })
    /****************test**********************/
    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error :({error.message}</p>

    return <ContextAuthorization.Provider value={[authorization, setAuthorization]}>
        <article className={"app-apple"}>
            <header><NavigationTop/></header>
            <aside>
                <Login/>
                {/*<Register/>*/}
                <Init/>
            </aside>
            <section>
                <article>
                    <header>
                        {/*<Login/>*/}
                    </header>
                    <section>
                        <Route path={`${ROUTE_APP[0]}/${ROUTE_DIMENSION_READING[0]}`}
                               component={DimensionReading}/>
                        <Route path={`${ROUTE_APP[0]}/${ROUTE_MANAGE_DIMENSION_READING[0]}`}
                               component={ManageDimensionReading}/>
                    </section>
                    <aside>
                        <DimensionShow/>
                    </aside>
                    <footer></footer>
                </article>
            </section>
            <footer><a href={'http://www.beian.miit.gov.cn'} target={"_blank"}>京ICP备19039286号-1</a></footer>
        </article>
    </ContextAuthorization.Provider>
}

export {AppApple as default} from "./app-apple.jsx"
