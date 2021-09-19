import React from 'react';
import {useSelector} from "react-redux";
import {useStyles} from "./ProductStyle";
import ProductInfo from "../ProductInfo/ProductInfo";

const Product = (props) => {
const style = useStyles()


	let matchId = props.match.params.idProduct

	const ProductsData = useSelector(store => store.product)

	const Product = ProductsData.find(item => item.id === +matchId);


	return (
		<div className={style.root}>
			<img className={style.img} src={Product.imageUrl} alt=""/>
			<div className={style.info}>
				<ProductInfo
					name={Product.name}
					count={Product.count}
					size={Product.size}
					weight={Product.weight}
					description={Product.description}
				/>
			</div>

		</div>
	);
};

export default Product;
