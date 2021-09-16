import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import productReducer from "./product-reducer";
import thunkMiddleware from 'redux-thunk';

let reducer = combineReducers({
	product: productReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store