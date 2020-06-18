import React,{useState} from 'react'
import ModalCloud from './modal_cloud'

//Modal组件最基础的两个事件 show、hide
export const useModal=()=>{
    const [isVisible,setIsVisible]=useState(false)
    const show=()=>{
        setIsVisible(true)
    }
    const hide=()=>setIsVisible(false)

    const RenderModal=({children}={children:React.ReactChild})=>{
        return <React.Fragment>
            {
                isVisible&&<ModalCloud closeModal={hide}>{children}</ModalCloud>
            }
        </React.Fragment>
    }
    return {
        show,
        hide,
        RenderModal
    }
}
