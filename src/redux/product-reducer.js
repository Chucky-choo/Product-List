import {firebase} from "../API/firebase";

const SORT = 'SORT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const ADD_PRODUCT_LIST = 'ADD_PRODUCT_LIST'
const ADD_PRODUCT = 'ADD_PRODUCT'


const productReducer = (state = [], action) => {
	switch (action.type) {
		case SORT: {
			if (action.sort === 'count') {
				return [
					...state.sort((a, b) => {
						return b.count - a.count
					})
				]
			} else if (action.sort === 'name') {
				return [
					...state.sort((a, b) => {
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
			} else {
				break
			}
		}
		case DELETE_PRODUCT: {
			const newProducts = state.filter(el => el.id !== action.idProduct)
			return [...newProducts]
		}
		case ADD_PRODUCT_LIST: {
			return action.data
		}
		case ADD_PRODUCT: {
			return [...state, action.newProductData]
		}
		default:
			return state
	}
}


//In the sort argument by name or quantity available
export const sortData = (sort) => ({type: SORT, sort})
export const deleteProductAC = (idProduct) => ({type: DELETE_PRODUCT, idProduct})
export const addProductList = (data) => ({type: ADD_PRODUCT_LIST, data})
export const addProduct = (newProductData) => ({type: ADD_PRODUCT, newProductData})


//Thunks
export const addDataProducts = () => {
	return async (dispatch) => {
		const data = await firebase.getData()
		dispatch(addProductList(data))
	}
}


export const addNewProduct = (newProductData) => {
	return async (dispatch) => {
		await firebase.addNewDocumentProduct(newProductData)
		dispatch(addProduct(newProductData))
	}
}

export const deleteProduct = (documentId) => {
	return async (dispatch) => {
		await firebase.deleteDoc(documentId)
		dispatch(deleteProductAC(documentId))
	}
}


export default productReducer