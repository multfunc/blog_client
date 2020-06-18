import React, {useState, useEffect, lazy} from 'react'
import {useQuery,useLazyQuery} from '@apollo/react-hooks'
import {useHistory} from 'react-router-dom'

import './dimension-show.scss'


export function DimensionShow(props) {

    //声明count,并初始化为0
    const [count, setCount] = useState(0)

    //useGraphql
    // const {loading, error, data} = useQuery(QUERY_DIMENSION_NOTE_READINGS,{variables:{pageSize:2,a:4}})
    // const [test,{loading, error, data}] = useLazyQuery(QUERY_PHOTO_POSTER,{variables:{}})

    // useRoute
    const history=useHistory()

    // useEffect()


    // if (loading) return <label>Loading...</label>
    // if (error) return <label>Error :({error.message}</label>

    return <article className={"dimension-show"}>
        <header></header>
    <section>
        <label>敞开</label>
        <label>像这春天</label>
        <label>轻柔的微风</label>
        <label>寂静季节里</label>
        <label>封藏的冰冷</label>
        <label>与回到大海的航船……</label>
        <label>现在</label>
        <label>我们必须编制花冠</label>
        <label>装扮头顶</label>
    </section>
    <footer></footer>
    </article>
}

export {DimensionShow as default} from "./dimension-show.jsx"
