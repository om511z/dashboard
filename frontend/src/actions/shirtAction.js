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
    DELETE_SHIRT_FAIL
} from '../constants/shirtConstant'
import axios from 'axios'


//ADMIN PRODUCT
export const getAdminProducts = () => async (dispatch) =>{
    try{

        dispatch({ type: ADMIN_SHIRT_REQUEST})

        const {data} = await axios.get('/api/v2/admin/shirts')

        dispatch({
            type:ADMIN_SHIRT_SUCCESS,
            payload: data.products
        })
    } catch(error){
        dispatch({
            type:ADMIN_SHIRT_FAIL,
            payload:error.response.data.message
        })
    }
}


export const newShirt = (productData) => async (dispatch) =>{
    try{

        dispatch({ type: NEW_SHIRT_REQUEST})

        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/v2/admin/shirt/new',productData,config)

        dispatch({
            type:NEW_SHIRT_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:NEW_SHIRT_FAIL,
            payload:error.response.data.message
        })
    }
}

   //DELETE PRODUCT (ADMIN)
   export const deleteShirt = (id) => async (dispatch) =>{
    try{

        dispatch({ type: DELETE_SHIRT_REQUEST})
       

        const {data} = await axios.delete(`/api/v2/admin/shirt/${id}`)

        dispatch({
            type:DELETE_SHIRT_SUCCESS,
            payload: data.success
        })
    } catch(error){
        dispatch({
            type:DELETE_SHIRT_FAIL,
            payload:error.response.data.message
        })
    }
}


export const clearErrors = () => async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}
