import {MAKE_REQUEST, FAIL_REQUEST, GET_USERS_LIST, DELETE_USER, ADD_USER} from "./ActionType";
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
export const addUser = ()=>{
    return{
        type : ADD_USER
    }
}
export const deleteUser = ()=>{
    return{
        type : DELETE_USER
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
export const AddUser = (data)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        instance.post("/users",data).then(response=>{
            dispatch(addUser());
            alert("user added")
        })
        .catch(error=>{
            dispatch(failRequest(error.message))
        })
    }  
}
export const RemoveUser = (id)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        instance.delete("/users/"+id).then(response=>{
            dispatch(deleteUser());
        })
        .catch(error=>{
            dispatch(failRequest(error.message))
        })
    }  
}