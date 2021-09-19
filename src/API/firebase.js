import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore, addDoc} from "firebase/firestore/lite";


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
		await addDoc(collection(db, "Products"), data);
	//	console.log("Document written with ID: ", docRef.id);
	}

}