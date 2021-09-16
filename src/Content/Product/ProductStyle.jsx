import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles({
	root: {
		overflow: 'hidden',
		padding: 20,
		display: 'flex',
		alignItems: 'start',
		width: '100%',
		height: '100vh',
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
	}

});