import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

// firebase.initializeApp({
// 		apiKey: "AIzaSyDXT2hrUN8TJVKN5OH2vg4coDsg8ytINCw",
// 		authDomain: "product-list-fe866.firebaseapp.com",
// 		databaseURL: "https://product-list-fe866-default-rtdb.asia-southeast1.firebasedatabase.app",
// 		projectId: "product-list-fe866",
// 		storageBucket: "product-list-fe866.appspot.com",
// 		messagingSenderId: "916069485148",
// 		appId: "1:916069485148:web:786a7048f5d68819db7499",
// 		measurementId: "G-D6Y2HN5VYP"
// 	})



ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App/>
		</Provider>
	</BrowserRouter>, document.getElementById('root'));


// const dataProduct = {
// 	Products: [
// 		{
// 			id: 1,
// 			imageUrl: 'https://academy.oetker.ru/upload/ammina.optimizer/png-webp/q80/upload/resize_cache/iblock/195/540_800_1/19519a82c8131d46d8e7a4718fb7e2d2.webp',
// 			description: 'A light and flavorful pizza featuring feta, tomatoes, and spinach. I like to use a homemade whole wheat crust, rolled thin.',
// 			name: 'Greek pizza',
// 			count: 4,
// 			size: {
// 				width: 200,
// 				height: 200
// 			},
// 			weight: '300g',
// 			comments: [
// 				{
// 					id: 11,
// 					productId: 1,
// 					description: 'some text here',
// 					date: '14:00 22.08.2021'
// 				},
// 				{
// 					id: 12,
// 					productId: 1,
// 					description: 'some text here',
// 					date: '14:00 22.08.2021'
// 				},
// 			]
// 		},
// 		{
// 			id: 2,
// 			imageUrl: 'https://static.1000.menu/img/content-v2/24/88/49769/meksikanskaya-picca-ostraya_1616760935_13_max.jpg',
// 			description: 'Hungry for something with heat? Try chipotles and chorizo sausage on an easy refrigerated pizza crust.',
// 			name: 'MEXICAN PIZZA SPICY',
// 			count: 5,
// 			size: {
// 				width: 200,
// 				height: 200
// 			},
// 			weight: '200g',
// 			comments: [
// 				{
// 					id: 11,
// 					productId: 1,
// 					description: 'some text here',
// 					date: '14:00 22.08.2021'
// 				},
// 				{
// 					id: 12,
// 					productId: 1,
// 					description: 'some text here',
// 					date: '14:00 22.08.2021'
// 				},
// 			]
// 		}
// 	]
// }
