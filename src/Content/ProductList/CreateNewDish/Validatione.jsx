import * as yup from "yup";

export const Validatione = yup.object().shape({
	name: yup.string()
		.min(3, 'not enough characters')
		.max(15, 'too many characters')
		.required('required'),
	imageUrl: yup.string()
		.min(5, 'not enough characters')
		.required('required'),
	count: yup.number()
		.max(1000000000, 'too many')
		.required('required')
		.positive()
		.integer(),
	description: yup.string()
		.min(5, 'not enough characters')
		.max(150, 'too many characters')
		.required('required'),
	size: yup.object({
		height: yup.number()
			.required('required')
			.max(1000000000, 'too many')
			.positive()
			.integer(),
		width: yup.number()
			.required('required')
			.max(1000000000, 'too many')
			.positive()
			.integer(),
	}),
	weight: yup.string()
		.max(10, 'too many characters')
		.required('required'),
})
