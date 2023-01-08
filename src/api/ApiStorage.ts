
// export const BASICAPI = 'http://localhost:5000';
import axios from "axios";
const api = axios.create({
    baseURL: '/api/'
})
export const MEMBER = '/member/'
export const SING_UP = async(id:string,password:string,name:string) =>{
   await  api
    .post(MEMBER,{
        id:id,
        password:password,
        name:name
    })
    .then((res)=>{
        console.log(res)
        window.location.replace("/")
    })
} 
export const LOGIN = `${MEMBER}login/`
export const SING_IN = async(id:string,password:string,setLoginCheck:any,setUserKey:any) =>{
    console.log(id,password)
    await api.post(LOGIN, {
        id: id,
        password: password
      }
      ).then((response) => {
        console.log(response.data)
        if (response.data.message === '로그인 성공') {
            setLoginCheck(true)
            setUserKey(response.data.key)
            window.localStorage.setItem('data',JSON.stringify(response.data))
            window.location.replace("/")
          // window.location.replace('/')
        }
        else {
          setLoginCheck(false)
        }
      })
}
export const LOGOUT = async(key:number)=>{
    await api.post(`${MEMBER}${key}/logout/`)
    window.localStorage.removeItem('data')
}
export const SORT_TIME = `/sort_time`;

export const USER_DATA = async(key:number) =>{
  return await api.get(`${MEMBER}${key}`).then((res)=>res.data)
}
export const MEMBER_IDCHECK = `${MEMBER}/member_idcheck/`