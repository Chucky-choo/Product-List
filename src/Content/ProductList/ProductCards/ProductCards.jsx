import {NavLink} from "react-router-dom";
import useStyles from "./productCardsStyle";
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, CircularProgress} from "@material-ui/core";
import React from 'react';
import ProductInfo from "../../ProductInfo/ProductInfo";
import {deleteProduct} from "../../../redux/product-reducer";
import AlertDialogSlide from "../../Popup/Popup";

const ProductsCards = () => {
	const dispatch = useDispatch()


	const usersData = useSelector(store => store.product.Products)
	const classes = useStyles();


	const deleteCard = (id) => {
		dispatch(deleteProduct(id))
	}

	if (usersData === undefined) {
		return (
			<CircularProgress/>
		)
	}


	return (
		<div className={classes.container}>
			{usersData.map(el => {
					return (
						<Card className={classes.root} key={el.id}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={el.imageUrl}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<ProductInfo
										name={el.name}
										count={el.count}
										size={el.size}
										weight={el.weight}
										description={el.description}
									/>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<NavLink
									to={`/Product/` + el.id}
									className={classes.content}
								>
									<Button
										variant="contained"
										color="primary"
									>
										Details
									</Button>
								</NavLink>
								<AlertDialogSlide
									text={'Delete'}
									cb={() => {
										deleteCard(el.id)
									}}
									title={'You really want to delete this product?'}
									NameRightButton={'Delete'}
								/>

							</CardActions>
						</Card>
					);
				}
			)}
		</div>)
}

export default ProductsCards