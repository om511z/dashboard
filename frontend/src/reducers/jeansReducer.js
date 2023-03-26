import {
    NEW_JEANS_REQUEST,
    NEW_JEANS_SUCCESS,
    NEW_JEANS_RESET,
    NEW_JEANS_FAIL,
    ADMIN_JEANS_REQUEST,
    ADMIN_JEANS_SUCCESS,
    ADMIN_JEANS_FAIL,
    CLEAR_ERRORS,
    DELETE_JEANS_REQUEST,
    DELETE_JEANS_SUCCESS,
    DELETE_JEANS_FAIL,
    DELETE_JEANS_RESET
} from '../constants/jeansConstants'


export const jeansReducer = (state = { products:[] },action) =>{
    switch(action.type){

    
            case ADMIN_JEANS_REQUEST:
            return{
                loading:true,
                products: []
            }

          

                case ADMIN_JEANS_SUCCESS:
                    return{
                        loading:false,
                        products:action.payload
                    }

               
         
                case ADMIN_JEANS_FAIL:
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

export const newJeansReducer = (state ={jeans:{}} ,action) => {

    switch (action.type) {
        case NEW_JEANS_REQUEST:
            return{
                ...state,
                loading:true

            }

            case NEW_JEANS_SUCCESS:
                return{
                    loading:false,
                    success:action.payload.success,
                    jeans:action.payload.jeans
                    
                }

                case NEW_JEANS_FAIL:
                    return{
                        ...state,
                        error:action.payload
                        
                    }
                    case NEW_JEANS_RESET:
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


export const deleteJeansReducer = (state = {},action) => {

    switch(action.type){

        case DELETE_JEANS_REQUEST:
            return {
                ...state,
                loading: true
            }

       case DELETE_JEANS_SUCCESS:
             return {
                    ...state,
                    loading: false,
                    isDeleted:action.payload
                }
        case DELETE_JEANS_FAIL:
     
            return {
               ...state,
               error:action.payload
            }

            case DELETE_JEANS_RESET:
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

