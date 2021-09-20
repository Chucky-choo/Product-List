import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles({
	root: {
		overflow: 'hidden',
		padding: 20,
		display: 'flex',
		alignItems: 'start',
		height: '30vh',
	},
	img:{
		width: '50%'
	},
	info: {
		display: 'flex',
		justifyContent: "center",
		flexDirection: "column",
		alignItems: 'center',
		padding: 32,
	},
	'@media (max-width: 600px)': {
		root: {
			flexDirection: "column",
			height: 'auto',
		},
		img:{
			width: '100%'
		},

	}
});