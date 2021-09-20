import {useHistory} from "react-router-dom";
import useStyles from "./productCardsStyle";
import {useDispatch, useSelector} from "react-redux";
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
} from "@material-ui/core";
import React, {useState} from 'react';
import ProductInfo from "../../ProductInfo/ProductInfo";
import {deleteProduct} from "../../../redux/product-reducer";
import Popup from "../../Popup/Popup";

const ProductsCards = () => {
	const dispatch = useDispatch()
	const history = useHistory()

	const usersData = useSelector(store => store.product)
	const classes = useStyles();


	const redirect = (id) => {
		history.push(`/Product/` + id)
	}

	//popup state
	const [isOpenPopup, setOpen] = useState(false);
	const [openPopupProductId, setIdOpen] = useState(0);

	const handleClickOpen = (elId) => {
		setIdOpen(elId)
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const confirmDeleteCard = () => {
		dispatch(deleteProduct(openPopupProductId))
		setOpen(false);
	}


	return (
		<div className={classes.container}>
			{usersData.map(el => {
					return (
						<Card className={classes.root}
									key={el.id}
						>
							<CardActionArea onClick={() => {
								redirect(el.id)
							}}>
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
							<CardActions className={classes.cardActions}>
								<Button
									variant="outlined"
									color="primary"
									onClick={() => {
										redirect(el.id)
									}}
								>
									Details
								</Button>
								<Button
									variant="outlined"
									color="secondary"
									onClick={() => {handleClickOpen(el.id)}}
								>
									Delete
								</Button>
							</CardActions>
						</Card>

					);
				}
			)}
			<Popup
				isOpenPopup={isOpenPopup}
				title={'You really want to delete this product?'}
				handleOpen={handleClickOpen}
				handleClose={handleClose}
			>
				<div className={classes.cardActions}>
					<Button
						variant="outlined"
						color="primary"
						onClick={handleClose}
					>
						Cancel
					</Button>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => {confirmDeleteCard(openPopupProductId)}}
					>
						Delete
					</Button>
				</div>
			</Popup>
		</div>)
}

export default ProductsCards