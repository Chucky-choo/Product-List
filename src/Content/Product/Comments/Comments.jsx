import React from 'react';
import {IconButton, Typography} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteComment} from "../../../redux/product-reducer";
import {useDispatch} from "react-redux";
import NewComment from "./NewComment/NewComment";
import {useStyles} from "./CommentsStyle";


const Comments = ({commentsArr}) => {

	const classes = useStyles();
	const dispatch = useDispatch()


	// if (commentsArr.length === 0) {
	// 	return	<NewComment commentsArr={commentsArr}/>
	// }

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<NewComment commentsArr={commentsArr}/>
			</Paper>
			{commentsArr.map(comment => {
					return (
						<Paper key={comment.id} className={classes.paper}>
							<Grid container wrap="nowrap" spacing={1}>
								<Grid item>
									<Avatar>ava</Avatar>
								</Grid>
								<Grid item xs>
									<Typography>
										{comment.description}
									</Typography>
								</Grid>
								<IconButton
									onClick={() => {
										dispatch(deleteComment(comment))
									}}
									aria-label="delete"
									size="medium"
								>
									<DeleteIcon fontSize="inherit"/>
								</IconButton>
							</Grid>
						</Paper>
					)
				}
			)}

		</div>
	)
};

export default Comments;
