import React, {useState} from 'react';
import {Formik} from 'formik';
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import {useStyles} from "../ProductListStyle";
import {addNewProduct} from "../../../redux/product-reducer";
import {Validatione} from "./Validatione";
import Popup from "../../Popup/Popup";
import DishForm from "./DishForm";


const CreateNewDish = () => {
	const style = useStyles()
	const dispatch = useDispatch()


	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={style.root}>
			<Button
				variant="contained"
				color="primary"
				onClick={handleClickOpen}
			>
				add Dish
			</Button>
			<Popup
				isOpenPopup={open}
				title={'Here you can create your own dish'}
				handleClose={handleClose}
			>
				{
					<Formik
						initialValues={
							{
								name: '',
								imageUrl: '',
								count: '',
								description: '',
								weight: '',
								size: {
									height: '',
									width: '',
								}
							}
						}
						validationSchema={Validatione}
						onSubmit={(values, {setSubmitting, resetForm}) => {
							dispatch(addNewProduct({...values, comments: []}))
							setSubmitting(false);
							handleClose()
							resetForm()
						}}
					>
						<DishForm
							handleClose={handleClose}
							nameRightBtn={'Add'}
						/>
					</Formik>
				}
			</Popup>
		</div>
	);
}

export default CreateNewDish;
