import {
    NEW_KURTA_REQUEST,
    NEW_KURTA_SUCCESS,
    NEW_KURTA_RESET,
    NEW_KURTA_FAIL,
    ADMIN_KURTA_REQUEST,
    ADMIN_KURTA_SUCCESS,
    ADMIN_KURTA_FAIL,
    CLEAR_ERRORS,
    DELETE_KURTA_REQUEST,
    DELETE_KURTA_SUCCESS,
    DELETE_KURTA_FAIL,
    DELETE_KURTA_RESET
} from '../constants/kurtConstants'


export const kurtaReducer = (state = { products:[] },action) =>{
    switch(action.type){

    
            case ADMIN_KURTA_REQUEST:
            return{
                loading:true,
                products: []
            }

          

                case ADMIN_KURTA_SUCCESS:
                    return{
                        loading:false,
                        products:action.payload
                    }

               
         
                case ADMIN_KURTA_FAIL:
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

export const newKurtaReducer = (state ={kurta:{}} ,action) => {

    switch (action.type) {
        case NEW_KURTA_REQUEST:
            return{
                ...state,
                loading:true

            }

            case NEW_KURTA_SUCCESS:
                return{
                    loading:false,
                    success:action.payload.success,
                    kurta:action.payload.kurta
                    
                }

                case NEW_KURTA_FAIL:
                    return{
                        ...state,
                        error:action.payload
                        
                    }
                    case NEW_KURTA_RESET:
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



export const deleteKurtaReducer = (state = {},action) => {

    switch(action.type){

        case DELETE_KURTA_REQUEST:
            return {
                ...state,
                loading: true
            }

       case DELETE_KURTA_SUCCESS:
             return {
                    ...state,
                    loading: false,
                    isDeleted:action.payload
                }
        case DELETE_KURTA_FAIL:
     
            return {
               ...state,
               error:action.payload
            }

            case DELETE_KURTA_RESET:
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
