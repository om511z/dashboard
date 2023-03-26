import React, { Fragment,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {MDBDataTable} from 'mdbreact'
import { useAlert } from 'react-alert'
import { useDispatch,useSelector } from 'react-redux'
import { getAdminProducts,clearErrors } from '../actions/shirtAction'



const Shirtlist = ({history}) => {


    const alert = useAlert();
    const dispatch = useDispatch();


    const {error,products} = useSelector(state => state.shirts);

 

    useEffect(()=>{
        dispatch(getAdminProducts());
        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }  
        
    },[dispatch,alert,error,history])

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
                    <button className="btn btn-danger py-1 px-2 ml-2">

                    <i className="fa fa-trash" ></i>
                    </button>
                    </Fragment>
            })
        })

        return data;
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

export default Shirtlist

