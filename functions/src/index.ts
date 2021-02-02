
import * as tanam from 'tanam';

tanam.initializeApp({
    users: {
        "andreneris@gmail.com": "superAdmin",
    },
    firebaseApp: {
        apiKey: "AIzaSyAlouIYZ46OgqKO5iU5Qs1U8D-dpMTx0_o",
        authDomain: "lowcodebr.firebaseapp.com",
        databaseURL: "https://lowcodebr-default-rtdb.firebaseio.com",
        projectId: "lowcodebr",
        storageBucket: "lowcodebr.appspot.com",
        messagingSenderId: "850700798725",
        appId: "1:850700798725:web:cfb3fd9f3c9b952c88c56c",
        measurementId: "G-1WFHXCTY8F"
    },
});

export * from 'tanam';
