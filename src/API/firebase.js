// Initialize Firebase
import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore/lite";


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




export const firebase = {
	// Get a list of cities from database
	async getData() {
		const app = initializeApp(firebaseConfig);
		const db = getFirestore(app);
		const productsCol = collection(db, 'Products');
		const productSnapshot = await getDocs(productsCol);
		const productsColList = productSnapshot.docs.map(doc => doc.data());
		return productsColList;
	}


}