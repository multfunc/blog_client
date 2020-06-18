import React, {useState, useEffect, lazy} from 'react'
import {useQuery, useLazyQuery, useMutation} from '@apollo/react-hooks'
import {useHistory} from 'react-router-dom'
import {createPortal} from "react-dom";

import './register.scss'
import {CREATE_USER} from "../../../register-center/graphql-schema/user/graphql-user-mutation";


export function Register(props) {

    //声明count,并初始化为0
    const [account, setAccount] = useState("")
    const [password,setPassword]=useState("")


    //useGraphql
    // const {loading, error, data} = useQuery(QUERY_DIMENSION_NOTE_READINGS,{variables:{pageSize:2,a:4}})
    const [createUser,{data:dataCreateUser}]=useMutation(CREATE_USER)

    // useRoute
    const history = useHistory()

    // useEffect()
/****************创建用户**********************/
let handleClickRegister=async (e)=>{

    createUser({
        variables:{
            account:account,
            password:password
        }
    })
        .then(data=>{
            console.log(data)
        })
        .catch(e=>{
            console.log(e)
        })

}
/****************创建用户**********************/

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error :({error.message}</p>

    return createPortal(<article className={"register"}>
        <header></header>
        <section>
            <div>账号：<input value={account} onChange={e=>setAccount(e.target.value)}/></div>
            <div>密码：<input value={password} onChange={e=>setPassword(e.target.value)}/></div>
        </section>
        <footer>
            <button onClick={handleClickRegister}>确认创建</button>
        </footer>
    </article>, document.body)
}

export {Register as default} from "./register.jsx"
