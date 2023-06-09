import { 
    ADMIN_PRODUCTS_REQUEST,
    ADMIN_PRODUCTS_SUCCESS,
    ADMIN_PRODUCTS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_RESET,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_RESET,
    DELETE_PRODUCT_FAIL,
    CLEAR_ERRORS } from '../constants/productConstants'

export const productsReducer = (state = { products:[] },action) =>{
    switch(action.type){

    
            case ADMIN_PRODUCTS_REQUEST:
            return{
                loading:true,
                products: []
            }

          

                case ADMIN_PRODUCTS_SUCCESS:
                    return{
                        loading:false,
                        products:action.payload
                    }

               
         
                case ADMIN_PRODUCTS_FAIL:
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

export const newProductReducer = (state ={product:{}} ,action) => {

    switch (action.type) {
        case NEW_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true

            }

            case NEW_PRODUCT_SUCCESS:
                return{
                    loading:false,
                    success:action.payload.success,
                    product:action.payload.product
                    
                }

                case NEW_PRODUCT_FAIL:
                    return{
                        ...state,
                        error:action.payload
                        
                    }
                    case NEW_PRODUCT_RESET:
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



export const deleteReducer = (state = {},action) => {

    switch(action.type){

        case DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }

       case DELETE_PRODUCT_SUCCESS:
             return {
                    ...state,
                    loading: false,
                    isDeleted:action.payload
                }
        case DELETE_PRODUCT_FAIL:
     
            return {
               ...state,
               error:action.payload
            }

            case DELETE_PRODUCT_RESET:
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


