import {MAKE_REQUEST, FAIL_REQUEST, GET_USERS_LIST} from "./ActionType";
import instance from "../api.service"

export const makeRequest = ()=>{
    return{
        type : MAKE_REQUEST
    }
}
export const failRequest = (error)=>{
    return{
        type : FAIL_REQUEST,
        payload : error
    }
}
export const getUserList = (data)=>{
    return{
        type : GET_USERS_LIST,
        payload : data
    }
}

export const FetchUserList = ()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        instance.get("/users").then(response=>{
            const UserList = response.data;
            dispatch(getUserList(UserList))
        })
        .catch(error=>{
            dispatch(failRequest(error.message))
        })
    }
}