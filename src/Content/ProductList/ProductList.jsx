import React from 'react';
import ProductsCards from "./ProductCards/ProductCards";
import CreateNewDish from "./CreateNewDish/CreateNewDish";
import Sorting from "./Sorting/Sorting";

const ProductList = () => {

	return (
		<div>
			<Sorting />
			<ProductsCards/>
			<CreateNewDish />
		</div>
	);
};

export default ProductList;
