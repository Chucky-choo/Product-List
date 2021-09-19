import React from 'react';
import {Formik, Form} from 'formik';
import MyTextField from "../../MyTextField/myTextField";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import {useStyles} from "../ProductListStyle";
import {addNewProduct} from "../../../redux/product-reducer";
import {Validatione} from "./Validatione";


const CreateNewDish = () => {
	const style = useStyles()
	const dispatch = useDispatch()


	const lengthArray = useSelector(store => store.product.length)
	const lastElementId = useSelector(store => store.product[lengthArray - 1].id)


	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={style.root}>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				add Dish
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="draggable-dialog-title"
			>
				<DialogTitle style={{cursor: "move"}} id="draggable-dialog-title">
					here you can create your own dish
				</DialogTitle>
				<DialogContent>
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
							onSubmit={(values, {setSubmitting}) => {
								console.log({...values, id: lastElementId + 1})
								dispatch(addNewProduct({...values, id: lastElementId + 1}))
								setSubmitting(false);
								handleClose()
							}}
						>
							<Form>
								<div>
									<MyTextField
										type='text'
										name='name'
										placeholder='name dish'
									/>
									<MyTextField
										type='text'
										name='imageUrl'
										placeholder='imageUrl'
									/>
									<MyTextField
										type='number'
										name='count'
										placeholder='count'
									/>
									<MyTextField
										type='text'
										name='description'
										placeholder='description'
									/>
									<MyTextField
										type='number'
										name='size.width'
										placeholder='width'
									/>
									<MyTextField
										type='number'
										name='size.height'
										placeholder='height'
									/>
									<MyTextField
										type='text'
										name='weight'
										placeholder='weight'
									/>
									<div className={style.root}>
										<Button onClick={handleClose} color="primary">
											cancel
										</Button>
										<Button type='submit' variant="contained" color="primary">
											Add
										</Button>
									</div>
								</div>
							</Form>
						</Formik>
					}
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default CreateNewDish;
