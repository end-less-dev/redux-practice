import {MAKE_REQUEST, FAIL_REQUEST, GET_USERS_LIST} from "./ActionType"
const initialState = {
    isLoading : true,
    userList : [],
    userObj : {},
    errorMessage : ""
}
export const Reducer = (state=initialState,action)=>{
    switch(action.type){
        case MAKE_REQUEST:
            return {
                ...state,
                isLoading : true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                isLoading : false,
                errorMessage : action.payload
            }
        case GET_USERS_LIST:
            return {
                isLoading : false,
                userList : action.payload,
                errorMessage : "",
                userObj : {}
            }
        default: return state
    }
}