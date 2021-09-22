import React from 'react';
import {useSelector} from "react-redux";
import {useStyles} from "./ProductStyle";
import ProductInfo from "../ProductInfo/ProductInfo";
import {Typography} from "@material-ui/core";
import Comments from "./Comments/Comments";
import EditDish from "./EditDish/EditDish";
import Grid from "@material-ui/core/Grid";

const Product = (props) => {
	const style = useStyles()


	let matchId = props.match.params.idProduct

	const ProductsData = useSelector(store => store.product)

	const Product = ProductsData.find(item => item.id === +matchId);


	return (
		<div>
			<Grid
				justifyContent='center'
				className={style.root}
			>
				<img
					className={style.img}
					src={Product.imageUrl}
					alt=""
				/>
				<div className={style.info}>
					<ProductInfo
						name={Product.name}
						count={Product.count}
						size={Product.size}
						weight={Product.weight}
						description={Product.description}
					/>
					<EditDish initialValues={Product}/>
				</div>
			</Grid>
			<Typography
				variant="h4"
				gutterBottom
				align='center'
			>
				Comments
			</Typography>
			<Comments commentsArr={Product.comments} />
		</div>
	);
};

export default Product;
