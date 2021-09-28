import {initializeApp} from "firebase/app";
import {
	collection,
	getDocs, getFirestore,
	doc, deleteDoc,
	updateDoc, arrayUnion, arrayRemove, addDoc
} from "firebase/firestore/lite";


const firebaseConfig = {
	apiKey: "AIzaSyDXT2hrUN8TJVKN5OH2vg4coDsg8ytINCw",
	authDomain: "product-list-fe866.firebaseapp.com",
	databaseURL: "https://product-list-fe866-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "product-list-fe866",
	storageBucket: "product-list-fe866.appspot.com",
	messagingSenderId: "916069485148",
	appId: "1:916069485148:web:786a7048f5d68819db7499",
	measurementId: "G-D6Y2HN5VYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const firebase = {
	// Get a list of products from database
	async getData() {
		const productsCol = collection(db, 'Products');
		const productSnapshot = await getDocs(productsCol);
		const productsColList = productSnapshot.docs.map(doc => doc.data());
		return productsColList;
	},

	// Add a new document in collection "Products"
	async addNewDocumentProduct(data) {
		//each product is contained in a separate document collection "Products"
		const docRef = await addDoc(collection(db, "Products"), data);
		//add the generated Firebase id to the data new product
		await updateDoc(doc(db, "Products", `${docRef.id}`), {
			id: docRef.id
		})
		return docRef.id
	},

	async updateProduct(data) {
		await updateDoc(doc(db, "Products", `${data.id}`), data)
	},


	async deleteDoc(documentId) {
		await deleteDoc(doc(db, "Products", `${documentId}`));
	},

// Add a new comment to the "Products"
	async addNewComment(dataComment) {
		// in the dataComment it is necessary to specify which 'Product' the comment belongs to.
		await updateDoc(doc(db, "Products", `${dataComment.productId}`), {
			comments: arrayUnion(dataComment)
		});
	},

	async deleteComment(dataComment) {
		await updateDoc(doc(db, "Products", `${dataComment.productId}`), {
			comments: arrayRemove(dataComment)
		});
	},
}



//to install standard products

// const setTemplate = async () => {
// 	const oldArr = await firebase.getData()
// 	 oldArr.forEach(obg => {
// 		firebase.deleteDoc(obg.id)
// 	})
//
// 	const productsCol = collection(db, 'ProductsTemplate');
// 	const productSnapshot = await getDocs(productsCol);
// 	const productsColList = productSnapshot.docs.map(doc => doc.data())
//
// 	productsColList.forEach(obg => {
// 		firebase.addNewDocumentProduct(obg)
// 	})
// }
