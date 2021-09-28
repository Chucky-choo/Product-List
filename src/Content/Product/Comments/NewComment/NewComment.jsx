import React from 'react';
import {Form, Formik} from "formik";
import MyTextField from "../../../MyTextField/myTextField";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {addComment} from "../../../../redux/product-reducer";
import {useParams} from "react-router-dom";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


const Validat = yup.object().shape({
	description: yup.string()
		.max(30, 'too many characters')
		.min(3, `not enough characters`)
		.required('required')
})


const NewComment = ({commentsArr}) => {

	let {idProduct} = useParams();
	const productId = idProduct


	const generateId = () => {
		const lengthArr = commentsArr.length
		if (lengthArr === 0) {
			return 1
		} else {
			return commentsArr[lengthArr - 1].id + 1
		}
	}

	const dispatch = useDispatch()

	return (
		<Formik
			initialValues={
				{description: '',}
			}
			validationSchema={Validat}
			onSubmit={(values, {setSubmitting, resetForm}) => {
				const newCommentData = {
					...values,
					productId: productId,
					id: generateId(),
					date: new Date(),
				}
				dispatch(addComment(newCommentData))
				setSubmitting(false);
				resetForm()
			}}
		>
			<Form>
				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Grid item xs={9} >
						<MyTextField placeholder="comment" name='description'/>
					</Grid>
					<Grid
						container
						direction="row"
						justifyContent="space-between"
						item
						xs={3}
					>
						<Button variant='contained' type="submit" color='primary' >
							submit
						</Button>
						<Button variant='outlined' type="reset" color='secondary'>
							reset
						</Button>
					</Grid>
				</Grid>
			</Form>
		</Formik>
	);
};

export default NewComment;
