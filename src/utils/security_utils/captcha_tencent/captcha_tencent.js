import {APP_TENCENT_ID} from "./setting/setting";

function callback_default(res){
    // 默认回调函数
    console.log(res)
}
export function captcha_tencent(callback=callback_default,options={},appId =APP_TENCENT_ID) {
    // eslint-disable-next-line no-undef
    let captcha = new TencentCaptcha(appId, callback, options)
    if(!captcha){
        return false
    }
    captcha.show()
    return true
}
