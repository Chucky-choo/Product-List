import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		overflow: 'hidden',
		padding: theme.spacing(0, 0.5),
	},
	paper: {
		margin: `${theme.spacing(1)}px auto`,
		padding: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			maxWidth: 1000,
		},
	},

}));