import {
    NEW_SHIRT_REQUEST,
    NEW_SHIRT_SUCCESS,
    NEW_SHIRT_RESET,
    NEW_SHIRT_FAIL,
    ADMIN_SHIRT_REQUEST,
    ADMIN_SHIRT_SUCCESS,
    ADMIN_SHIRT_FAIL,
    CLEAR_ERRORS,
    DELETE_SHIRT_REQUEST,
    DELETE_SHIRT_SUCCESS,
    DELETE_SHIRT_FAIL,
    DELETE_SHIRT_RESET
} from '../constants/shirtConstant'


export const shirtReducer = (state = { products:[] },action) =>{
    switch(action.type){

    
            case ADMIN_SHIRT_REQUEST:
            return{
                loading:true,
                products: []
            }

          

                case ADMIN_SHIRT_SUCCESS:
                    return{
                        loading:false,
                        products:action.payload
                    }

               
         
                case ADMIN_SHIRT_FAIL:
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

export const newShirtReducer = (state ={shirt:{}} ,action) => {

    switch (action.type) {
        case NEW_SHIRT_REQUEST:
            return{
                ...state,
                loading:true

            }

            case NEW_SHIRT_SUCCESS:
                return{
                    loading:false,
                    success:action.payload.success,
                    shirt:action.payload.shirt
                    
                }

                case NEW_SHIRT_FAIL:
                    return{
                        ...state,
                        error:action.payload
                        
                    }
                    case NEW_SHIRT_RESET:
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



export const deleteshirtReducer = (state = {},action) => {

    switch(action.type){

        case DELETE_SHIRT_REQUEST:
            return {
                ...state,
                loading: true
            }

       case DELETE_SHIRT_SUCCESS:
             return {
                    ...state,
                    loading: false,
                    isDeleted:action.payload
                }
        case DELETE_SHIRT_FAIL:
     
            return {
               ...state,
               error:action.payload
            }

            case DELETE_SHIRT_RESET:
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
