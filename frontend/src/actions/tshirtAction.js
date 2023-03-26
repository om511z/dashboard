import {
    NEW_TSHIRT_REQUEST,
    NEW_TSHIRT_SUCCESS,
    NEW_TSHIRT_FAIL,
    ADMIN_TSHIRT_REQUEST,
    ADMIN_TSHIRT_SUCCESS,
    ADMIN_TSHIRT_FAIL,
    CLEAR_ERRORS,
    DELETE_TSHIRT_REQUEST,
    DELETE_TSHIRT_SUCCESS,
    DELETE_TSHIRT_FAIL
} from '../constants/tshirtConstants'
import axios from 'axios'


//ADMIN PRODUCT
export const getAdminProducts = () => async (dispatch) =>{
    try{

        dispatch({ type: ADMIN_TSHIRT_REQUEST})

        const {data} = await axios.get('/api/v2/admin/tshirts')

        dispatch({
            type:ADMIN_TSHIRT_SUCCESS,
            payload: data.products
        })
    } catch(error){
        dispatch({
            type:ADMIN_TSHIRT_FAIL,
            payload:error.response.data.message
        })
    }
}


export const newTshirt = (productData) => async (dispatch) =>{
    try{

        dispatch({ type: NEW_TSHIRT_REQUEST})

        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/v2/admin/tshirt/new',productData,config)

        dispatch({
            type:NEW_TSHIRT_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:NEW_TSHIRT_FAIL,
            payload:error.response.data.message
        })
    }
}

   //DELETE PRODUCT (ADMIN)
   export const deletetshirt = (id) => async (dispatch) =>{
    try{

        dispatch({ type: DELETE_TSHIRT_REQUEST})
       

        const {data} = await axios.delete(`/api/v2/admin/tshirt/${id}`)

        dispatch({
            type:DELETE_TSHIRT_SUCCESS,
            payload: data.success
        })
    } catch(error){
        dispatch({
            type:DELETE_TSHIRT_FAIL,
            payload:error.response.data.message
        })
    }
}


export const clearErrors = () => async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}
