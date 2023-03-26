import axios from 'axios'

import {
    ADMIN_PRODUCTS_REQUEST,
    ADMIN_PRODUCTS_SUCCESS,
    ADMIN_PRODUCTS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    CLEAR_ERRORS
} from '../constants/productConstants'

//ADMIN PRODUCT
export const getAdminProducts = () => async (dispatch) =>{
    try{

        dispatch({ type: ADMIN_PRODUCTS_REQUEST})

        const {data} = await axios.get('/api/v2/admin/products')

        dispatch({
            type:ADMIN_PRODUCTS_SUCCESS,
            payload: data.products
        })
    } catch(error){
        dispatch({
            type:ADMIN_PRODUCTS_FAIL,
            payload:error.response.data.message
        })
    }
}

export const newProduct = (productData) => async (dispatch) =>{
    try{

        dispatch({ type: NEW_PRODUCT_REQUEST})

        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/v2/admin/product/new',productData,config)

        dispatch({
            type:NEW_PRODUCT_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type:NEW_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}



    //DELETE PRODUCT (ADMIN)
    export const deleteProduct = (id) => async (dispatch) =>{
        try{

            dispatch({ type: DELETE_PRODUCT_REQUEST})
           

            const {data} = await axios.delete(`/api/v2/admin/product/${id}`)

            dispatch({
                type:DELETE_PRODUCT_SUCCESS,
                payload: data.success
            })
        } catch(error){
            dispatch({
                type:DELETE_PRODUCT_FAIL,
                payload:error.response.data.message
            })
        }
    }


export const clearErrors = () => async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}