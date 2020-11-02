// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCO1yrAppGBNvlYc_eA-E0mWX7GYJb7bxE",
    authDomain: "buyaticket-1e897.firebaseapp.com",
    databaseURL: "https://buyaticket-1e897.firebaseio.com",
    projectId: "buyaticket-1e897",
    storageBucket: "buyaticket-1e897.appspot.com",
    messagingSenderId: "1039932671358",
    appId: "1:1039932671358:web:f67b10ebbb774de1d2df2f",
    measurementId: "G-NHFT13WMYN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

function writeData() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const hh = String(today.getHours()).padStart(2, '0');
    const min = String(today.getMinutes()).padStart(2, '0');
    const ss = String(today.getSeconds()).padStart(2, '0');


    const time = hh + ':' + min + ':' + ss;
    const date = dd + '/' + mm + '/' + yyyy;
    var uid = ID();
    console.log("uid: " + uid);

    firebase.database().ref("users/" + uid).set({
        seat: document.getElementById("input-seat").value,
        prenume: document.getElementById("input-first").value,
        nume: document.getElementById("input-last").value,
        cnp: document.getElementById("input-cnp").value,
        sex: document.getElementById("input-sex").value,
        data_nasterii: document.getElementById("input-nastere").value,
        email: document.getElementById("input-email").value,
        iban: document.getElementById("input-iban").value,
        total: document.getElementById("input-suma").value,
        time: time,
        date: date
    })
    uid++;
}