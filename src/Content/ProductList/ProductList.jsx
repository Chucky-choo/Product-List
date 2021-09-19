import React from 'react';
import ProductsCards from "./ProductCards/ProductCards";
import {Button, ButtonGroup} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {sortData} from "../../redux/product-reducer";
import {useStyles} from "./ProductListStyle";
import CreateNewDish from "./CreateNewDish/CreateNewDish";

const ProductList = () => {
	const style = useStyles()
	const dispatch = useDispatch()

	const sortArrTo = (sort) => {
		dispatch(sortData(sort))
	}

	return (
		<div>
			<div className={style.root}>
				<p className={style.p}>sort by:</p>
				<ButtonGroup color="primary" aria-label="outlined primary button group">
					<Button onClick={() => {
						sortArrTo('name')
					}}>Name</Button>
					<Button onClick={() => {
						sortArrTo('count')
					}}>Count</Button>
				</ButtonGroup>
			</div>
			<ProductsCards/>
			<CreateNewDish />
		</div>
	);
};

export default ProductList;
