import React from 'react';
import {Typography} from "@material-ui/core";

const ProductInfo = ({name, size, count, weight, description}) => {
	return (
		<div>
			<Typography
				align='center'
				noWrap
				gutterBottom
				variant="h3"
				component="h2"
			>
				{name}
			</Typography>
			<Typography
				variant="body1"
				component="p"
			>
				{description}
			</Typography>
			<Typography
				noWrap
				variant="body1"
				color="textSecondary"
				component="p"
			>
				{`Weight: ${weight}`}
			</Typography>
			<Typography
				noWrap
				variant="body1"
				color="textSecondary"
				component="p"
			>
				{`size: width ${size.width}, height ${size.height}`}
			</Typography>
			<Typography
				noWrap
				variant="body1"
				color="textSecondary"
				component="p"
			>
				{`Count: ${count}`}
			</Typography>
		</div>
	);
};

export default ProductInfo;
