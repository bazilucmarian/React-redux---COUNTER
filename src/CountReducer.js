
 import {DECREASE,RESET,INCREASE} from './actions'

const initialState={
    count:0,
    name:'BAZILUC MARIAN'
  }
  

const reducer=(state=initialState, action)=>{
    switch(action.type){
      case DECREASE:
        return{
          ...state,
          count:state.count-1
        }
        case INCREASE:
        return{
          ...state,
          count:state.count+1
        }
        case RESET:
        return{
          ...state,
          count:0
        }
        default :
        return state; 
    }
}

export default reducer;