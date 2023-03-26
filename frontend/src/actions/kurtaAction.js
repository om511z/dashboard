import {
    NEW_KURTA_REQUEST,
    NEW_KURTA_SUCCESS,
    NEW_KURTA_FAIL,
    ADMIN_KURTA_REQUEST,
    ADMIN_KURTA_SUCCESS,
    ADMIN_KURTA_FAIL,
    CLEAR_ERRORS,
    DELETE_KURTA_REQUEST,
    DELETE_KURTA_SUCCESS,
    DELETE_KURTA_FAIL
} from '../constants/kurtConstants'
import axios from 'axios'


//ADMIN PRODUCT
export const getAdminProducts = () => async (dispatch) =>{
    try{

        dispatch({ type: ADMIN_KURTA_REQUEST})

        const {data} = await axios.get('/api/v2/admin/kurtas')

        dispatch({
            type:ADMIN_KURTA_SUCCESS,
            payload: data.products
        })
    } catch(error){
        dispatch({
            type:ADMIN_KURTA_FAIL,
            payload:error.response.data.message
        })
    }
}


export const newKurta = (productData) => async (dispatch) =>{
    try{

        dispatch({ type: NEW_KURTA_REQUEST})

        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/v2/admin/kurta/new',productData,config)

        dispatch({
            type:NEW_KURTA_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:NEW_KURTA_FAIL,
            payload:error.response.data.message
        })
    }
}

   //DELETE PRODUCT (ADMIN)
   export const deleteKurta = (id) => async (dispatch) =>{
    try{

        dispatch({ type: DELETE_KURTA_REQUEST})
       

        const {data} = await axios.delete(`/api/v2/admin/kurta/${id}`)

        dispatch({
            type:DELETE_KURTA_SUCCESS,
            payload: data.success
        })
    } catch(error){
        dispatch({
            type:DELETE_KURTA_FAIL,
            payload:error.response.data.message
        })
    }
}


export const clearErrors = () => async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}
