import React from 'react';
import AlertDialogSlide from "../../Popup/Popup";
import {Formik, Form} from 'formik';
import MyTextField from "../../MyTextField/myTextField";
import {useDispatch, useSelector} from "react-redux";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle, Slide} from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";

const CreateNewDish = () => {

	const dispatch = useDispatch()


	const Validatione = yup.object().shape({
		name: yup.string()
			.min(3, 'not enough characters')
			.required('required'),
		imageUrl: yup.string()
			.min(5, 'not enough characters')
			.required('required'),
		count: yup.number()
			.required('required'),
		description: yup.string()
			.min(5, 'not enough characters')
			.required('required'),
		weight: yup.number()
			.required('required'),
	})
	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	});

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				add Dish
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
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

								console.log({...values, id: 2})
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
									<Button onClick={handleClose} color="primary">
										cancel
									</Button>
									<Button type='submit' variant="contained" color="primary">
										Add
									</Button>
								</div>

							</Form>
						</Formik>
					}
				</DialogContent>
				<DialogActions>

				</DialogActions>
			</Dialog>
		</div>
	);
};


export default CreateNewDish;
