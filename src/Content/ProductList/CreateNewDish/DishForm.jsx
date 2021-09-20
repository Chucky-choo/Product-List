import React from 'react';
import MyTextField from "../../MyTextField/myTextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Form} from "formik";

const DishForm = ({handleClose, nameRightBtn}) => {
	return (
		<Form>
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
			<Grid
				container
				direction="row"
				justifyContent="space-around"
				alignItems="center">
				<Button onClick={handleClose} color="primary">
					cancel
				</Button>
				<Button type='submit' variant="contained" color="primary">
					{nameRightBtn}
				</Button>
			</Grid>
		</Form>
	);
};

export default DishForm;
