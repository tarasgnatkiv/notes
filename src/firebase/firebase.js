import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAJ7J_xIN-Lw8CRbh_ycqEpihS7FGnGGw0",
	authDomain: "notes-232ea.firebaseapp.com",
	projectId: "notes-232ea",
	storageBucket: "notes-232ea.appspot.com",
	messagingSenderId: "701768842153",
	appId: "1:701768842153:web:20730bc27df782deb862b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;