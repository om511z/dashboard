import {useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { loadUser } from './actions/userActions';
import Signin from './user/Signin';
import store from './store'
import Dashboard from './admin/Dashboard';
import ProductList from './admin/ProductList';
import NewProduct from './admin/NewProduct';
import Home from './Home';
import NewShirt from './admin/Newshirt';
import Shirtlist from './admin/Shirtlist';
import Main from './dashboard/Main';
import Shirt from './dashboard/pages/Shirt';
import Jeans from './dashboard/pages/Jeans';
import TShirt from './dashboard/pages/Tshirt';
import Kurtas from './dashboard/pages/Kurtas';
import Sports from './dashboard/pages/Sports';
import Jacket from './dashboard/pages/Jacket';


function App() {

  useEffect(() =>{
    store.dispatch(loadUser());
  },[])
  return (
    <div className="App">
      <Router>

        <Route path="/" component={Home} exact />
 
  <Route path="/signin" component={Signin} exact />
  <Route path="/dashboard" component={Dashboard} exact />
  <Route path="/admin/product" component={ProductList} exact />
  <Route path="/admin/product/new" component={NewProduct} exact />
  <Route path="/admin/shirt/new" component={NewShirt} exact />
  <Route path="/admin/shirt" component={Shirtlist} exact />
  <Route path="/main" component={Main} exact />
  <Route path="/jeans" component={Jeans} exact />
  <Route path='/shirt' component={Shirt} />
  <Route path='/tshirt' component={TShirt} />
         
  <Route path='/Kurtas' component={Kurtas} />
  <Route path='/sports' component={Sports} />
  <Route path='/jacket' component={Jacket} />



  </Router>
    </div>
  );
}

export default App;
