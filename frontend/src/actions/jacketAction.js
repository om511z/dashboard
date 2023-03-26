import {
    NEW_JACKET_REQUEST,
    NEW_JACKET_SUCCESS,
    NEW_JACKET_FAIL,
    ADMIN_JACKET_REQUEST,
    ADMIN_JACKET_SUCCESS,
    ADMIN_JACKET_FAIL,
    CLEAR_ERRORS,
    DELETE_JACKET_REQUEST,
    DELETE_JACKET_SUCCESS,
    DELETE_JACKET_FAIL
} from '../constants/jacketConstants'
import axios from 'axios'


//ADMIN PRODUCT
export const getAdminProducts = () => async (dispatch) =>{
    try{

        dispatch({ type: ADMIN_JACKET_REQUEST})

        const {data} = await axios.get('/api/v2/admin/jackets')

        dispatch({
            type:ADMIN_JACKET_SUCCESS,
            payload: data.products
        })
    } catch(error){
        dispatch({
            type:ADMIN_JACKET_FAIL,
            payload:error.response.data.message
        })
    }
}


export const newJacket = (productData) => async (dispatch) =>{
    try{

        dispatch({ type: NEW_JACKET_REQUEST})

        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/v2/admin/jacket/new',productData,config)

        dispatch({
            type:NEW_JACKET_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:NEW_JACKET_FAIL,
            payload:error.response.data.message
        })
    }
}

   //DELETE PRODUCT (ADMIN)
   export const deleteJacket = (id) => async (dispatch) =>{
    try{

        dispatch({ type: DELETE_JACKET_REQUEST})
       

        const {data} = await axios.delete(`/api/v2/admin/jacket/${id}`)

        dispatch({
            type:DELETE_JACKET_SUCCESS,
            payload: data.success
        })
    } catch(error){
        dispatch({
            type:DELETE_JACKET_FAIL,
            payload:error.response.data.message
        })
    }
}


export const clearErrors = () => async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}
