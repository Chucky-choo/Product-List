import React, {useEffect} from 'react'
import ProductList from "./Content/ProductList/ProductList";
import {Redirect, Route, Switch} from "react-router-dom";
import Product from "./Content/Product/Product";
import {useDispatch, useSelector} from "react-redux";
import {addDataProducts} from "./redux/product-reducer";
import {CircularProgress, Grid} from "@material-ui/core";


function App() {
	const dispatch = useDispatch()

	useEffect(async () => {dispatch(addDataProducts())}, [])

	const usersData = useSelector(store => store.product)


	//show preloader before data download
	if (usersData === undefined || usersData.length === 0) {
		return (
			<Grid>
				<CircularProgress/>
			</Grid>

		)
	}

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
