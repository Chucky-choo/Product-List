import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
	root: {
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20,
	},
	p: {
		alignItems: 'center',
		fontSize: 25,
		marginRight: 10
	},
	formControl: {
		margin: 10,
		minWidth: 120,
	},
});