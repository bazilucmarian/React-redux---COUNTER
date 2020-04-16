//count action

export const DECREASE="DECREASE"
export const INCREASE="INCREASE"
export const RESET="RESET"

//modal action
export const MODAL_OPEN="MODAL_OPEN"
export const MODAL_CLOSE="MODAL_CLOSE"

//product actions

export const SET_LOADING="SET_LOADING"
export const GET_PRODUCTS="GET_PRODUCTS"

//action creator
export const decrease=()=>{
    return{
        type:DECREASE
    }
}
export const increase=()=>{
    return{
        type:INCREASE
    }
}
export const reset=()=>{
    return{
        type:RESET
    }
}
export const modal_open=(name, text)=>{
    return {
        type:MODAL_OPEN,
        payload: {name, text}
    
    }
}
export const setLoading=()=>{
    return{
        type:SET_LOADING
    }
}
export const getProduct=()=>{
    return async function (dispatch){
        dispatch(setLoading());
        const response=await fetch('https://johnsmilgatutorials.com/projects/react-tech-store-v2/products')
        const data=await response.json();
        
        dispatch({
            type:GET_PRODUCTS,
            payload:data
        })
    }
}