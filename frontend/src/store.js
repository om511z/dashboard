import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { authReducer } from './reducers/userReducers';
import { newProductReducer, productsReducer,deleteReducer } from './reducers/productReducers';
import { deleteshirtReducer, newShirtReducer, shirtReducer } from './reducers/shirtReducer';
import { deleteJeansReducer, jeansReducer, newJeansReducer } from './reducers/jeansReducer';
import { deletetshirtReducer, newTshirtReducer, tshirtReducer } from './reducers/tshirtReducer';
import { deleteKurtaReducer, kurtaReducer, newKurtaReducer } from './reducers/kurtaReducer';
import { deleteJacketReducer, jacketReducer, newJacketReducer } from './reducers/jacketReducer';
const reducer = combineReducers({
   auth:authReducer,
   products:productsReducer,
   newProduct:newProductReducer,
   delete:deleteReducer,
   newShirt:newShirtReducer,
   shirts:shirtReducer,
   jeans:jeansReducer,
   newJeans:newJeansReducer,
   tshirt:tshirtReducer,
   newTshirt:newTshirtReducer,
   kurta:kurtaReducer,
   newKurta:newKurtaReducer,
   jacket:jacketReducer,
   newJacket:newJacketReducer,
   deleteshirt:deleteshirtReducer,
   deletetshirt:deletetshirtReducer,
   deletejacket:deleteJacketReducer,
   deletekurta:deleteKurtaReducer,
   deletejeans:deleteJeansReducer
})

let initialState = {}

const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;