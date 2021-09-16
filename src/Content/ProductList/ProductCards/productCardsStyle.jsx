import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	container: {
		marginBottom: 20,
		padding: 20,
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
		gap: 24,
	},

	root: {
		minHeight: 390,
		minWidth: 200,
		maxWidth: 400,
		maxHeight: 550,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	media: {
		height: 180,
	},
	content: {
		width: 185,
		display: "flex",
		justifyContent: 'space-around',
		textDecoration: 'none',
		color: 'black',
		maxHeight: 320,
		'&:hover': {
			textDecoration: 'none',
			color: "black"
		}
	},
});

export default useStyles