import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <Link to="/signin">
            <button className="btnsect success">Signin</button>
            </Link>
        
        </div>
    )
}

export default Home
