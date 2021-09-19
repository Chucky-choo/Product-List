import * as yup from "yup";

export const Validatione = yup.object().shape({
	name: yup.string()
		.min(3, 'not enough characters')
		.required('required'),
	imageUrl: yup.string()
		.min(5, 'not enough characters')
		.required('required'),
	count: yup.number()
		.required('required')
		.positive()
		.integer(),
	description: yup.string()
		.min(5, 'not enough characters')
		.required('required'),
	size: yup.object({
		height: yup.number()
			.required('required')
			.positive()
			.integer(),
		width: yup.number()
			.required('required')
			.positive()
			.integer(),
	}),
	weight: yup.string()
		.required('required'),
})
