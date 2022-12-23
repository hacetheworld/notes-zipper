import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST } from "../constants/userConstaints"

export const login=(email,password)=async(dispatch)=>{
    try {
        dispatch({type:USER_LOGIN_REQUEST})
        const config={
            headers:{
                'Content-Type': 'application/json'
              }
        }
        const {data}=await axios.post("/api/user/login",{email,password},config)
        dispatch({type:USER_LOGIN_SUCCESS,payload:data})
        localStorage.setItem('userInfo',JSON.stringify(data))

    } catch (error) {
        dispatch({type:USER_LOGIN_FAIL,payload:error.response && error.response.message.data ? error.response.message.data : error.message})
    }
}