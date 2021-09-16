import {firebase} from "../API/firebase";

const SORT = 'SORT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const ADD_PRODUCT_LIST = 'ADD_PRODUCT_LIST'



const productReducer = (state = [], action) => {
	switch (action.type) {
		case SORT: {
			if (action.sort === 'count') {
				return {
					...state, Products: [
						...state.Products.sort((a, b) => {
							return b.count - a.count
						})
					]
				}
			} else if (action.sort === 'name') {
				return {
					...state, Products: [
						...state.Products.sort((a, b) => {
							{
								let nameA = a.name.toLowerCase()
								let nameB = b.name.toLowerCase()
								if (nameA < nameB) {
									return -1
								} else if (nameA > nameB) {
									return 1
								} else {
									return 0
								}
							}
						})
					]
				}
			} else {
				break
			}
		}
		case DELETE_PRODUCT: {
			const newProducts = state.Products.filter(el => el.id !== action.idProduct)
			return {...state, Products: newProducts}
		}
		case ADD_PRODUCT_LIST: {
			return {...action.data}
		}

		default:
			return state
	}
}


//In the sort argument by name or quantity available
export const sortData = (sort) => ({type: SORT, sort})
export const deleteProduct = (idProduct) => ({type: DELETE_PRODUCT, idProduct})
export const addProductList = (data) => ({type: ADD_PRODUCT_LIST, data})


//Thunks
export const addDataProducts = () => {
	return async (dispatch) => {
		const data = await firebase.getData()
		dispatch(addProductList(data[0]))
	}
}


export const addNewProduct = (dataObject) => {

	return async (dispatch) => {

	//	const data = await firebase.getData()
	//	dispatch(addProductList(data[0]))
	}
}


export default productReducer