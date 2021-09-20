import React from 'react';
import {Typography} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		overflow: 'hidden',
		padding: theme.spacing(0, 3),
	},
	paper: {
		maxWidth: '80%',
		margin: `${theme.spacing(1)}px auto`,
		padding: theme.spacing(2),
	},
}));


const Comments = ({CommentsArr}) => {
	const comments = CommentsArr.comments
	const classes = useStyles();

	if (comments === undefined) {
		return null
	}

	return (
		<div>
			<div className={classes.root}>
				{comments.map(comment => {
						return (
							<Paper className={classes.paper}>
								<Grid container wrap="nowrap" spacing={2}>
									<Grid item>
										<Avatar>ava</Avatar>
									</Grid>
									<Grid item xs>
										<Typography>
											{comment.description}
										</Typography>
									</Grid>
								</Grid>
							</Paper>
						)
					}
				)}
			</div>
		</div>
	)
};

export default Comments;
