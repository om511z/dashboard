import {
    NEW_TSHIRT_REQUEST,
    NEW_TSHIRT_SUCCESS,
    NEW_TSHIRT_RESET,
    NEW_TSHIRT_FAIL,
    ADMIN_TSHIRT_REQUEST,
    ADMIN_TSHIRT_SUCCESS,
    ADMIN_TSHIRT_FAIL,
    CLEAR_ERRORS,
    DELETE_TSHIRT_REQUEST,
    DELETE_TSHIRT_SUCCESS,
    DELETE_TSHIRT_FAIL,
    DELETE_TSHIRT_RESET
} from '../constants/tshirtConstants'


export const tshirtReducer = (state = { products:[] },action) =>{
    switch(action.type){

    
            case ADMIN_TSHIRT_REQUEST:
            return{
                loading:true,
                products: []
            }

          

                case ADMIN_TSHIRT_SUCCESS:
                    return{
                        loading:false,
                        products:action.payload
                    }

               
         
                case ADMIN_TSHIRT_FAIL:
                return{
                    loading:false,
                    error:action.payload
                }  
                
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null
                }    

        default :
        return state;
    }
}


//NEW PRODUCT ONLY FOR ADMINS

export const newTshirtReducer = (state ={tshirt:{}} ,action) => {

    switch (action.type) {
        case NEW_TSHIRT_REQUEST:
            return{
                ...state,
                loading:true

            }

            case NEW_TSHIRT_SUCCESS:
                return{
                    loading:false,
                    success:action.payload.success,
                    tshirt:action.payload.tshirt
                    
                }

                case NEW_TSHIRT_FAIL:
                    return{
                        ...state,
                        error:action.payload
                        
                    }
                    case NEW_TSHIRT_RESET:
                    return{
                        ...state,
                       success:false
                        
                    }

                    case CLEAR_ERRORS:
                        return{
                          ...state,
                          error:null
                        }    
                    default:
                    return state
    
    }
}



export const deletetshirtReducer = (state = {},action) => {

    switch(action.type){

        case DELETE_TSHIRT_REQUEST:
            return {
                ...state,
                loading: true
            }

       case DELETE_TSHIRT_SUCCESS:
             return {
                    ...state,
                    loading: false,
                    isDeleted:action.payload
                }
        case DELETE_TSHIRT_FAIL:
     
            return {
               ...state,
               error:action.payload
            }

            case DELETE_TSHIRT_RESET:
                return{
                    ...state,
                    isDeleted:false
                }      
        case CLEAR_ERRORS:
            return{
             ...state,
             error:null
             }    
        default:
            return state
    }
}





