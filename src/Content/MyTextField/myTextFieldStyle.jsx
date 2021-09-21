import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
	in: {
		background: 'linear-gradient(45deg, #FDC830, #F37335);',
		color: '#000000',
		width: '90%',
		maxWidth: 600,
		height: 14,
		border: "none",
		borderRadius: 6,
		padding: '12px 20px',
		fontSize: 20,
		margin: '8px 0',

		'&:focus': {
			background: '#ffffff',
		},

		'&::placeholder' :{
			color: '#000d18',
		}
	},
})
