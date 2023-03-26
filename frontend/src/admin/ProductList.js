import React, { Fragment,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {MDBDataTable} from 'mdbreact'
import { useAlert } from 'react-alert'
import { useDispatch,useSelector } from 'react-redux'
import { getAdminProducts,clearErrors } from '../actions/productActions'
import { deleteProduct } from '../actions/productActions'
import { DELETE_PRODUCT_RESET } from '../constants/productConstants'


const ProductList = ({history}) => {


    const alert = useAlert();
    const dispatch = useDispatch();


    const {error,products} = useSelector(state => state.products);
    const {error:deleteError,isDeleted} = useSelector(state =>state.delete)
 

    useEffect(()=>{
        dispatch(getAdminProducts());
        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }
        if(deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if(isDeleted) {
            alert.success("Product Deleted Successfully!!!!!");
           history.push('/admin/product');
           dispatch({type: DELETE_PRODUCT_RESET })
           
        }


      
        
    },[dispatch,alert,error,history,deleteError,isDeleted])

    const setProducts = () => {
        const data ={
            columns:[
                
                {
                    label:'Name',
                    field:'name',
                    sort: 'asc'
                },
                {
                    label:'Actions',
                    field:'actions'
                   
                }
            
            ],
            rows:[]

        }
        products.forEach( product => {
            data.rows.push({
 
                name:product.name,

               
                actions:<Fragment>
                <Link to={`/admin/product/${product._id}`} >
                    <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() =>deleteProductHandler(product._id)}>

                    <i className="fa fa-trash" ></i>
                    </button>
                    </Fragment>
            })
        })

        return data;
    }

    const deleteProductHandler =(id) =>{
        dispatch(deleteProduct(id))
    }

  

    return (
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-2">
                 

                </div>
                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">All Products</h1>

                         <div className="mdbtable">  
                         <MDBDataTable
                         data={setProducts()}
                         className="px-3"
                         bordered
                         striped
                         hover
         
                         />
                         </div>
                     
                    </Fragment>
                </div>
            </div>
            
        </Fragment>
    )
}

export default ProductList

