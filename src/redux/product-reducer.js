import {firebase} from "../API/firebase";

const SORT = 'SORT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const ADD_PRODUCT_LIST = 'ADD_PRODUCT_LIST'
const ADD_PRODUCT = 'ADD_PRODUCT'
const EDIT_PRODUCT = 'EDIT_PRODUCT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const ADD_COMMENT ='ADD_COMMENT'



const findIndexById = (state, id) => {
return	state.findIndex(item => item.id === id)
}

const productReducer = (state = [], action) => {
	switch (action.type) {
		case SORT: {
			switch (action.sort) {
				case 'a-z': {
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
				}
				case 'z-a': {
					return [
						...state.sort((a, b) => {
							{
								let nameA = a.name.toLowerCase()
								let nameB = b.name.toLowerCase()
								if (nameA > nameB) {
									return -1
								} else if (nameA < nameB) {
									return 1
								} else {
									return 0
								}
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
				default:
					return state
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
			const newProducts = [...state]
			const indexProductEdit = findIndexById(state, action.EditProductData.id)
			newProducts.splice(indexProductEdit, 1, action.EditProductData)
			return [...newProducts]
		}

		case DELETE_COMMENT: {
			const newProducts = [...state]
			const indexProductEdit = findIndexById(state, action.dataComment.productId)
			const indexComment = newProducts[indexProductEdit]
				.comments.findIndex(item => item.id === action.dataComment.id)
			newProducts[indexProductEdit].comments.splice(indexComment, 1)
			return newProducts
		}

		case ADD_COMMENT: {
			const newState = [...state]
			const indexProductEdit = findIndexById(state, action.dataComment.productId)
			newState[indexProductEdit].comments.push(action.dataComment)
			return newState
		}

		default:
			return state
	}
}


//In the sort argument by name or quantity available
export const sortData = (sort) => ({type: SORT, sort})

const deleteProductAC = (idProduct) => ({type: DELETE_PRODUCT, idProduct})
const addProductList = (data) => ({type: ADD_PRODUCT_LIST, data})
const addProduct = (newProductData) => ({type: ADD_PRODUCT, newProductData})
const EditProductAC = (EditProductData) => ({type: EDIT_PRODUCT, EditProductData})


//Thunks
export const getDataProducts = () => {
	return async (dispatch) => {
		const data = await firebase.getData()
		dispatch(addProductList(data))
	}
}


export const addNewProduct = (newProductData) => {
	return async (dispatch) => {
		const idElm = await firebase.addNewDocumentProduct(newProductData)
		dispatch(addProduct({...newProductData, id: idElm}))
	}
}

export const EditProduct = (EditProductData) => {
	return async (dispatch) => {
		//the content will be overwritten by the newly provided data
		await firebase.updateProduct(EditProductData)
		dispatch(EditProductAC(EditProductData))
	}
}


export const deleteProduct = (documentId) => {
	return async (dispatch) => {
		await firebase.deleteDoc(documentId)
		dispatch(deleteProductAC(documentId))
	}
}

export const deleteComment = (dataComment) => {
	return async (dispatch) => {
		await firebase.deleteComment(dataComment)
		dispatch({type: DELETE_COMMENT, dataComment})
	}
}

export const addComment = (dataComment) => {
	return async (dispatch) => {
		await firebase.addNewComment(dataComment)
		dispatch({type: ADD_COMMENT, dataComment})
	}
}



export default productReducer