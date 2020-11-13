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
        <label>荣誉不属于批评者，那些指出强者如何跌倒、或实干者哪里本可以做得更好的人。</label>
        <label>荣誉属于真正站在竞技场上的人，属于脸庞沾满灰尘、汗水和鲜血的人，属于顽强奋斗的人，属于犯错，一次又一次失败的人，因为没有不伴随错误或缺陷的成就。</label>
        <label>然而实际拼搏的人，懂得极大热情和投入的人，投身于有价值的事业的人，最终或如愿取得伟大成就，而即使遭遇失败也不乏胆量，因此其所处将永不同于冷漠且胆小、未经胜败洗礼者。</label>
    </section>
    <footer></footer>
    </article>
}

export {DimensionShow as default} from "./dimension-show.jsx"
