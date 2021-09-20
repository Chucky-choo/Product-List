import React, {useState} from 'react';
import {Formik} from 'formik';
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import Popup from "../../Popup/Popup";
import DishForm from "../../ProductList/CreateNewDish/DishForm";
import {Validatione} from "../../ProductList/CreateNewDish/Validatione";
import {EditProduct} from "../../../redux/product-reducer";


const EditDish = ({initialValues}) => {
	const dispatch = useDispatch()


	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				variant="contained"
				color="primary"
				onClick={handleClickOpen}
			>
				Edit
			</Button>
			<Popup
				isOpenPopup={open}
				title={'Here you can create your own dish'}
				handleClose={handleClose}
			>
				{
					<Formik
						initialValues={
							{...initialValues}
						}
						validationSchema={Validatione}
						onSubmit={(values, {setSubmitting}) => {
							dispatch(EditProduct(values))
							setSubmitting(false);
							handleClose()
						}}
					>
						<DishForm
							handleClose={handleClose}
							nameRightBtn={'Edit'}
						/>
					</Formik>
				}
			</Popup>
		</div>
	);
}

export default EditDish;