import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles({

	root: {
		padding: 20,
		display: 'flex',
		alignItems: 'start',
		height: '100%',
		maxHeight: '600px'
	},
	img:{
		maxHeight: '600px',
		overflow: 'hidden',
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