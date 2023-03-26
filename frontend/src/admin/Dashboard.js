import React from 'react'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';
const Dashboard = () => {
    
 const dispatch = useDispatch();
 const {user,loading} = useSelector(state =>state.auth)
 const alert = useAlert();
 const logoutHandler =() =>{
   dispatch(logout());
   alert.success('Logged out Successfully')
 }
    return (
        <div>

            <h1>Admin Dashboard</h1>

            <button  className="btnsect success">
            <Link to="/admin/product"><i className="fa fa-clipboard"></i> All</Link>
            </button>

            <button  className="btnsect success">
            <Link to="/admin/product/new"><i className="fa fa-plus"></i> Create</Link>
            </button>

            <button  className="btnsect success">
            <Link to="/admin/shirt/new"><i className="fa fa-plus"></i> Create New Shirt</Link>
            </button>

            <button  className="btnsect success">
            <Link to="/admin/shirt"><i className="fa fa-clipboard"></i> View all shirt</Link>
            </button>

            <button  className="btnsect success">
            <Link
            to="/" 
            onClick={logoutHandler} >
              <i class="fa-solid fa-right-from-bracket"></i>
               logout
             </Link>
            </button>
            
        </div>
    )
}

export default Dashboard
