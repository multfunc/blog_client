import JSEncrypt from 'jsencrypt'
import {PUBLICK_KEY_GO} from "./setting/setting";


export function encrypt_go(text_plain, public_key = PUBLICK_KEY_GO) {
    let encrypt = new JSEncrypt()
    encrypt.setPublicKey(public_key)
    let text_cipher = encrypt.encrypt(text_plain)
    return text_cipher
}
