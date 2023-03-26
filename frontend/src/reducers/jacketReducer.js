import {
    NEW_JACKET_REQUEST,
    NEW_JACKET_SUCCESS,
    NEW_JACKET_RESET,
    NEW_JACKET_FAIL,
    ADMIN_JACKET_REQUEST,
    ADMIN_JACKET_SUCCESS,
    ADMIN_JACKET_FAIL,
    CLEAR_ERRORS,
    DELETE_JACKET_REQUEST,
    DELETE_JACKET_SUCCESS,
    DELETE_JACKET_FAIL,
    DELETE_JACKET_RESET
} from '../constants/jacketConstants'


export const jacketReducer = (state = { products:[] },action) =>{
    switch(action.type){

    
            case ADMIN_JACKET_REQUEST:
            return{
                loading:true,
                products: []
            }

          

                case ADMIN_JACKET_SUCCESS:
                    return{
                        loading:false,
                        products:action.payload
                    }

               
         
                case ADMIN_JACKET_FAIL:
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

export const newJacketReducer = (state ={jacket:{}} ,action) => {

    switch (action.type) {
        case NEW_JACKET_REQUEST:
            return{
                ...state,
                loading:true

            }

            case NEW_JACKET_SUCCESS:
                return{
                    loading:false,
                    success:action.payload.success,
                    jacket:action.payload.jacket
                    
                }

                case NEW_JACKET_FAIL:
                    return{
                        ...state,
                        error:action.payload
                        
                    }
                    case NEW_JACKET_RESET:
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



export const deleteJacketReducer = (state = {},action) => {

    switch(action.type){

        case DELETE_JACKET_REQUEST:
            return {
                ...state,
                loading: true
            }

       case DELETE_JACKET_SUCCESS:
             return {
                    ...state,
                    loading: false,
                    isDeleted:action.payload
                }
        case DELETE_JACKET_FAIL:
     
            return {
               ...state,
               error:action.payload
            }

            case DELETE_JACKET_RESET
            :
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
