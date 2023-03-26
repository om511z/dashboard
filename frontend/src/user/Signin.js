import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useAlert } from 'react-alert'
import {Link} from 'react-router-dom'
import { login,clearErrors } from '../actions/userActions'
const Signin = ({history,location}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const {isAuthenticated,error,loading} = useSelector(state => state.auth);

    const redirect = location.search ? location.search.split('=')[1] : '/main'


    useEffect(()=>{
        if(isAuthenticated){
          
            history.push(redirect)
            alert.success('Logged in Successfully')
        }
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
    },[dispatch,isAuthenticated,redirect,history,error])


    const submitHandler =(e) => {
        e.preventDefault();
        dispatch(login(email,password))
    }

    return (
        <div>
            
<form onSubmit={submitHandler} >
  <div class="logincontainer">
    <h1>login</h1>
    <label htmlFor="email"><b>Email</b></label>
    <input 
    type="text" 
    placeholder="Enter Email" 
    name="email" 
    id="email" 
    required=""
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    
    />

    <label htmlFor="psw"><b>Password</b></label>
    <input 
    type="password" 
    placeholder="Enter Password" 
    name="psw" 
    id="psw" 
    required=""
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />

   
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" class="registerbtn">login</button>
  </div>
  
  <div class="container signin">
    <p>Don't have an account? <Link to="/register">Register</Link>.</p>
  </div>
</form>

        </div>
    )
}

export default Signin