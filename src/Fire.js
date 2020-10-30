import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCYes2P4g0VlGR4qw04lDKsTf92tA_WXOk",
    authDomain: "classyuuy1.firebaseapp.com",
    databaseURL: "https://classyuuy1.firebaseio.com",
    projectId: "classyuuy1",
    storageBucket: "classyuuy1.appspot.com",
    messagingSenderId: "218097529803",
    appId: "1:218097529803:web:010d8cab140ac8cbc63c4e"
};


const fire=firebase.initializeApp(firebaseConfig);


export default fire;
