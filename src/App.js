import React, {useEffect} from 'react'
import ProductList from "./Content/ProductList/ProductList";
import {Redirect, Route, Switch} from "react-router-dom";
import Product from "./Content/Product/Product";
import {useDispatch} from "react-redux";
import {addDataProducts} from "./redux/product-reducer";


function App() {
	const dispatch = useDispatch()

	useEffect(async () => {
		dispatch(addDataProducts())
	}, [])

	return (
		<div className="App">
			<Switch>
				<Route exact path='/'
							 render={() => <Redirect to={'/ProductList'}/>}/>
				<Route path="/ProductList" component={ProductList}/>
				<Route path={"/Product/:idProduct?"} component={Product}/>
			</Switch>
		</div>
	);
}

export default App;
