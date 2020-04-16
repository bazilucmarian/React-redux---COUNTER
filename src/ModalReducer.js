import {MODAL_OPEN, MODAL_CLOSE} from './actions'

const  initialState={
    name: '',
    text:'',
    isOpen:false
}
const reducer=(state=initialState, action)=>{
    switch(action.type){
        case MODAL_OPEN:
            return{
                ...state,
                isOpen:true,
                name:action.payload.name,
                text:action.payload.text
            }
            case MODAL_CLOSE:
                return{
                    ...state,
                    isOpen:false,
                    name:'',
                    text:''

                }
                default: 
                return state;
    }
}
export default reducer;