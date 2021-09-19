import {makeStyles} from "@material-ui/core/styles";

const maxWidth = 663

const useStyles = makeStyles({
	container: {
		marginBottom: 20,
		padding: 20,
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
		gap: 24,
	},

	root: {
		minHeight: 390,
		minWidth: 300,
		maxWidth: 400,
		maxHeight: 550,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	[`@media (max-width: ${maxWidth}px)`]: {
		root: {
			margin: '0 auto',
			width: '85%'
		}
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