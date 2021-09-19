import React from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {useStyles} from "../ProductListStyle";
import {sortData} from "../../../redux/product-reducer";
import {useDispatch} from "react-redux";


const Sorting = () => {
	const dispatch = useDispatch()
	const style = useStyles()

	const [name, setName] = React.useState('');

	const handleChange = (event) => {
		dispatch(sortData(event.target.value))
		setName(event.target.value);
	};

	return (
		<div className={style.root}>
			<Box sx={{minWidth: 120}}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">sort by</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={name}
						label="Age"
						onChange={handleChange}
					>
						<MenuItem value={'a-z'}>
							<span role="img" aria-label="downwards button">
								🔽
							</span>
							Name
						</MenuItem>
						<MenuItem value={'z-a'}>
							<span role="img" aria-label="upwards button">
								🔼
							</span>
							Name
						</MenuItem>
						<MenuItem value={'many-small'}>
							<span role="img" aria-label="downwards button">
								🔽
							</span>
							Number
						</MenuItem>
						<MenuItem value={'small-many'}>
						<span role="img" aria-label="upwards button">
								🔼
							</span>
							Number
						</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</div>
	);
};

export default Sorting;
