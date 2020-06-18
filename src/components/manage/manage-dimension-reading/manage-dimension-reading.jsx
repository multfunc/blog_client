import React, {useState, useEffect, lazy, useContext} from 'react'
import {useQuery, useLazyQuery, useMutation} from '@apollo/react-hooks'
import {useHistory} from 'react-router-dom'

import './manage-dimension-reading.scss'
import {ContextAuthorization} from "../../../register-center/context-app/context-app";
import {
    ROUTE_APP,
    ROUTE_DIMENSION_READING
} from "../../../register-center/route/route-register-center/route-register-center";
import {CREATE_DIMENSION_READING} from "../../../register-center/graphql-schema/dimension-reading/graphql-dimension-reading-mutation";
import {QUERY_DIMENSION_READINGS} from "../../../register-center/graphql-schema/dimension-reading/graphql-dimension-reading";


export function ManageDimensionReading(props) {

    // useContext
    const [authorization, setAuthorization] = useContext(ContextAuthorization)
    //声明count,并初始化为0
    const [isShow, setIsShow] = useState(false)
    const [name, setName] = useState("")
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState('')
    const [content, setContent] = useState('')

    const [historyData, setHistoryData] = useState([])

    //useGraphql
    // const {loading, error, data} = useQuery(QUERY_DIMENSION_NOTE_READINGS,{variables:{pageSize:2,a:4}})
    // const [test,{loading, error, data}] = useLazyQuery(QUERY_PHOTO_POSTER,{variables:{}})
    const {data: dataDimensionReadings, refetch: refetchDimensionReading} = useQuery(QUERY_DIMENSION_READINGS, {
        variables: {
            pageSize: 1,
            pageAfter: 0
        }
    })
    const [createDimensionReading, {data: dataCreateDimensionReading}] = useMutation(CREATE_DIMENSION_READING)

    // useRoute
    const history = useHistory()

    // useEffect()
    /****************历史数据**********************/
    useEffect(() => {
        if (dataDimensionReadings && dataDimensionReadings['dimensionReadings']) {
            console.log(dataDimensionReadings['dimensionReadings'])
            let tmp = dataDimensionReadings['dimensionReadings']
            if (tmp[0]) {
                setAuthor(tmp[0]['author'])
                setName(tmp[0]['name'])
                setCategory(tmp[0]['category'])
                setLocation(tmp[0]['location'])
            }
            setHistoryData(tmp)
        }
    }, [dataDimensionReadings])
    /****************历史数据**********************/
    useEffect(() => {
        if (authorization['metadata']['isLogin']) {
            setIsShow(true)
        } else {
            console.log("未登录")
            setIsShow(false)
            history.push(`${ROUTE_APP[0]}/${ROUTE_DIMENSION_READING[0]}`)
        }
    }, [authorization])


    /****************submit**********************/
    let handelKeyDownContent = async e => {
//Ctrl + Enter 发送消息
        if (!e.ctrlKey || e.keyCode !== 13) {
            return
        }
        // sendMessage()
        await handleClickSubmit()
    }
    let handleClickSubmit = async e => {
        let response = await createDimensionReading({
            variables: {
                name,
                author,
                category,
                location,
                content
            }
        })
        let data = await response.data
        console.log(data)
        let errors = response.errors
        console.log(errors)
        if (!errors) {
            setContent('')
            await refetchDimensionReading()
        }
    }
    /****************submit**********************/

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error :({error.message}</p>

    return <article className={"manage-dimension-reading"}>
        <header>
        </header>
        <section>
            {
                historyData.map((item, index) => {
                    return <article className={"history"} key={index}>
                        <header>
                            <article>
                                <header>
                                    <label>{item['location']}</label>
                                </header>
                                <section>
                                    {
                                        item['category'].split("/").map((item, index) => {
                                            return <label className={"tag"} key={index}>{item}</label>
                                        })
                                    }
                                </section>
                            </article>
                        </header>
                        <section>{item['content']}</section>
                        <footer>
                            <article>
                                <heaer>
                                    <label>书名：</label>
                                    <label>《{item['name']}》</label>
                                </heaer>
                                <section>
                                    <label>作者：</label>
                                    <label>{item['author']}</label>
                                </section>
                                <footer>
                                    <label>时间：</label>
                                    <label>{item['updated_at']}</label>
                                </footer>
                            </article>
                        </footer>
                    </article>
                })
            }
            <article className={"current"}>
                <header>
                    <div>
                        <label>书名</label><input value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label>作者</label><input value={author} onChange={e => setAuthor(e.target.value)}/>
                    </div>
                    <div>
                        <label>类别</label><input value={category} onChange={e => setCategory(e.target.value)}/>
                    </div>
                    <div>
                        <label>地址</label><input value={location} onChange={e => setLocation(e.target.value)}/>
                    </div>
                </header>
                <section>
                    <div>
                        <label>内容</label><textarea onKeyDown={handelKeyDownContent} value={content}
                                                   onChange={e => setContent(e.target.value)}/>
                    </div>
                </section>
                <footer>
                    <button onClick={handleClickSubmit}>提交</button>
                </footer>
            </article>
        </section>
    </article>
}

export {ManageDimensionReading as default} from "./manage-dimension-reading.jsx"
