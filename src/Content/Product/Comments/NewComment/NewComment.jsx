import React from 'react';
import {Form, Formik} from "formik";
import MyTextField from "../../../MyTextField/myTextField";
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {addComment} from "../../../../redux/product-reducer";
import {useParams} from "react-router-dom";
import {Fab} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SendIcon from '@material-ui/icons/Send';


const Validat = yup.object().shape({
	description: yup.string()
		.max(110, 'too many characters')
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
					<div style={{width: 'calc(100% - 40px)'}}>
						<MyTextField placeholder="comment" name='description'/>
					</div>
					<div style={{width: 40}}>
						<Fab type="submit" size="small" color="primary" aria-label="add">
							<SendIcon/>
						</Fab>
					</div>
				</Grid>
			</Form>
		</Formik>
	);
};

export default NewComment;

