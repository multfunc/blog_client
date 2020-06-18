import React from 'react'
export const ContextAuthorization=React.createContext([{
    metadata:{
        isLogin:false,//是否已登录
        isActive:false,//是否显示登录框
    },
    data:{

    }
},null])

