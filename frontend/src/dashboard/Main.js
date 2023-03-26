import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getAdminProducts } from '../actions/shirtAction'
import { useSelector,useDispatch } from 'react-redux'
const Main = () => {
	const dispatch = useDispatch();
    const {products} = useSelector(state => state.shirts)
	useEffect(()=>{
		dispatch(getAdminProducts());

	},[dispatch])
  return (
    <div>
    <section id="sidebar">
		<a href="#" class="brand">
			<i class='bx bxs-smile'></i>
			<span class="text">Admin Panel</span>
		</a>
		<ul class="side-menu top">
			<Link to={'/main'}>
			<li >
				<a href="#">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</a>
			</li>
			</Link>
			<Link to={'/Shirt'}>
			<li>
				<a href="#">
					<i class='bx bxs-shopping-bag-alt' ></i>
					<span class="text">Shirt</span>
				</a>
			</li>
			</Link>
			<Link to={'/tshirt'}>
			<li>
				<a href="#">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">T-Shirt</span>
				</a>
			</li>
			</Link>

			<Link to={'/jeans'}>
			<li>
				<a href="#">
					<i class='bx bxs-message-dots' ></i>
					<span class="text">Jeans</span>
				</a>
			</li>
			</Link>
			
		<Link to={'/sports'}>
		<li>
				<a href="#">
					<i class='bx bxs-group' ></i>
					<span class="text">Sports</span>
				</a>
			</li>
		</Link>
			
			<Link to={'/kurtas'}>
			<li>
				<a href="#">
					<i class='bx bxs-group' ></i>
					<span class="text">Kurtas</span>
				</a>
			</li>
			</Link>
			<Link to={'/jacket'}>
                        <li>
                            <a href="#">
                                <i class='bx bxs-group' ></i>
                                <span class="text">Jackets</span>
                            </a>
                        </li>
                    </Link>
		
		</ul>
		<ul class="side-menu">
			<li>
				<a href="#">
					<i class='bx bxs-cog' ></i>
					<span class="text">Settings</span>
				</a>
			</li>
			<li>
				<a href="#" class="logout">
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>

	<section id="content">
	
		
		<nav>
				
		</nav>
		
		<main>
			<div class="head-title">
				<div class="left">
					<h1>Dashboard</h1>	
				</div>
			</div>

			<ul class="box-info">
				<Link to={'/shirt'}>
				<li>
					<i class='bx bxs-calendar-check' ></i>
					<span class="text">
						<h3>{products.length}</h3>
						<p>shirt</p>
					</span>
				</li>
				</Link>
				<Link to={'/tshirt'}>
				<li>
					<i class='bx bxs-group' ></i>
					<span class="text">
						<h3>283</h3>
						<p>T-Shirt</p>
					</span>
				</li>
				</Link>
			<Link to={'/jeans'}>
			<li>
					<i class='bx bxs-dollar-circle' ></i>
					<span class="text">
						<h3>243</h3>
						<p>Jeans</p>
					</span>
				</li>
			</Link>
				
				<Link to={'/sports'}>
				<li>
					<i class='bx bxs-dollar-circle' ></i>
					<span class="text">
						<h3>376</h3>
						<p>Sports</p>
					</span>
				</li>
				</Link>
				<Link to={'/kurtas'}>
				<li>
					<i class='bx bxs-dollar-circle' ></i>
					<span class="text">
						<h3>43</h3>
						<p>Kurtas</p>
					</span>
				</li>
				</Link>
				
			<Link to={'/jacket'}>
			<li>
					<i class='bx bxs-dollar-circle' ></i>
					<span class="text">
						<h3>43</h3>
						<p>Jackets</p>
					</span>
				</li>
			</Link>
				
			</ul>


			
		</main>
        
	</section>

	
    
    </div>
  )
}

export default Main