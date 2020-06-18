export function check_login() {
    let access=localStorage.getItem("access")//access
    let refresh=localStorage.getItem("refresh")//refresh
    let account=localStorage.getItem("account")//refresh
    if(account&&access&&refresh){
        return true
    }
    return  false
}
