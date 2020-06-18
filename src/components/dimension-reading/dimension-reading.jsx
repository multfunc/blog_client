import React, {useState, useEffect, lazy} from 'react'
import {useQuery, useLazyQuery} from '@apollo/react-hooks'
import {useHistory} from 'react-router-dom'

import './dimension-reading.scss'
import {
} from "../../register-center/graphql-schema/dimension-reading/graphql-dimension-reading";
import {QUERY_DIMENSION_READINGS} from "../../register-center/graphql-schema/dimension-reading/graphql-dimension-reading";


export function DimensionReading(props) {

    //声明count,并初始化为0
    const [count, setCount] = useState(0)
    const [dimensionReading,setDimensionReading]=useState([])

    //useGraphql
    // const {loading, error, data} = useQuery(QUERY_DIMENSION_NOTE_READINGS,{variables:{pageSize:2,a:4}})
    const {loading: loadingDimensionReading, error: errorDimensionReading, data: dataDimensionReading} = useQuery(QUERY_DIMENSION_READINGS, {variables: {pageSize: 6}})
    // const {loading,error,data}=useQuery(QUERY_TOKENS,{variables:{pageSize:9}})
    // const [test,{loading, error, data}] = useLazyQuery(QUERY_PHOTO_POSTER,{variables:{}})

    // useRoute
    const history = useHistory()

    // useEffect()
    /****************获取读书笔记**********************/
    useEffect(() => {
        console.log(dataDimensionReading)
        // console.log(data)
    })
    /****************获取读书笔记**********************/


    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error :({error.message}</p>

    return <article className={"dimension-reading"}>
        <header></header>
        <section>
            {
                dataDimensionReading?
                    dataDimensionReading['dimensionReadings'].map((item,index)=>{
                      return <article key={index} className={"dimension-reading-item"}>
                          <header>{item['location']}</header>
                          <section>{item['content']}</section>
                          <footer>
                              <div>
                                  <label>来自书籍：</label>
                                  <label>《{item['name']}》</label>
                              </div>
                              <div>
                                  <label>书籍作者：</label>
                                  <label>{item['author']}</label>
                              </div>
                              <div>
                                  <label>更新时间：</label>
                                  <label>{item['updated_at']}</label>
                              </div>
                          </footer>
                      </article>
                    })
                    :null
            }
        </section>
        <footer></footer>
    </article>
}

export {DimensionReading as default} from "./dimension-reading.jsx"
