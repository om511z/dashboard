import {
    NEW_JEANS_REQUEST,
    NEW_JEANS_SUCCESS,
    NEW_JEANS_FAIL,
    ADMIN_JEANS_REQUEST,
    ADMIN_JEANS_SUCCESS,
    ADMIN_JEANS_FAIL,
    CLEAR_ERRORS,
    DELETE_JEANS_REQUEST,
    DELETE_JEANS_SUCCESS,
    DELETE_JEANS_FAIL
} from '../constants/jeansConstants'
import axios from 'axios'


//ADMIN PRODUCT
export const getAdminProducts = () => async (dispatch) =>{
    try{

        dispatch({ type: ADMIN_JEANS_REQUEST})

        const {data} = await axios.get('/api/v2/admin/jeans')

        dispatch({
            type:ADMIN_JEANS_SUCCESS,
            payload: data.products
        })
    } catch(error){
        dispatch({
            type:ADMIN_JEANS_FAIL,
            payload:error.response.data.message
        })
    }
}


export const newJeans = (productData) => async (dispatch) =>{
    try{

        dispatch({ type: NEW_JEANS_REQUEST})

        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/v2/admin/jeans/new',productData,config)

        dispatch({
            type:NEW_JEANS_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:NEW_JEANS_FAIL,
            payload:error.response.data.message
        })
    }
}

   //DELETE PRODUCT (ADMIN)
   export const deleteJeans = (id) => async (dispatch) =>{
    try{

        dispatch({ type: DELETE_JEANS_REQUEST})
       

        const {data} = await axios.delete(`/api/v2/admin/jeans/${id}`)

        dispatch({
            type:DELETE_JEANS_SUCCESS,
            payload: data.success
        })
    } catch(error){
        dispatch({
            type:DELETE_JEANS_FAIL,
            payload:error.response.data.message
        })
    }
}


export const clearErrors = () => async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}
