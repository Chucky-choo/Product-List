import {firebase} from "../API/firebase";

const SORT = 'SORT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const ADD_PRODUCT_LIST = 'ADD_PRODUCT_LIST'
const ADD_PRODUCT = 'ADD_PRODUCT'
const EDIT_PRODUCT ='EDIT_PRODUCT'

const productReducer = (state = [], action) => {
	switch (action.type) {
		case SORT: {
			switch (action.sort){
				case 'a-z': {
					return [
						...state.sort((a, b) => {
							{
								let nameA = a.name.toLowerCase()
								let nameB = b.name.toLowerCase()
								if (nameA < nameB) {return -1
								} else if (nameA > nameB) {return 1
								} else {return 0}
							}
						})
					]
				}
				case 'z-a': {
					return [
						...state.sort((a, b) => {
							{
								let nameA = a.name.toLowerCase()
								let nameB = b.name.toLowerCase()
								if (nameA > nameB) {return -1
								} else if (nameA < nameB) {return 1
								} else {return 0}
							}
						})
					]
				}
				case 'many-small': {
					return [
						...state.sort((a, b) => {
							return b.count - a.count
						})
					]
				}
				case 'small-many': {
					return [
						...state.sort((a, b) => {
							return a.count - b.count
						})
					]
				}
				default: return state
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
		case EDIT_PRODUCT: {
			const newProducts = state
			const indexProductEdit = state.findIndex(item => item.id === action.EditProductData.id)
			newProducts.splice(indexProductEdit, 1, action.EditProductData)
			return [...newProducts]
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
export const EditProductAC = (EditProductData) => ({type: 'EDIT_PRODUCT', EditProductData})


//Thunks
export const getDataProducts = () => {
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

export const EditProduct = (EditProductData) => {
	return async (dispatch) => {
		//the content will be overwritten by the newly provided data
		await firebase.addNewDocumentProduct(EditProductData)
		dispatch(EditProductAC(EditProductData))
	}
}


export const deleteProduct = (documentId) => {
	return async (dispatch) => {
		await firebase.deleteDoc(documentId)
		dispatch(deleteProductAC(documentId))
	}
}


export default productReducer