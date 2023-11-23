importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBlF2Zdg-ltkI-KTltKQhH1iNxmnU3bxRU",
    authDomain: "pwabackend-f0c5e.firebaseapp.com",
    databaseURL: "https://pwabackend-f0c5e-default-rtdb.firebaseio.com",
    projectId: "pwabackend-f0c5e",
    storageBucket: "pwabackend-f0c5e.appspot.com",
    messagingSenderId: "150054104750",
    appId: "1:150054104750:web:d43128b49980caf641073f",
    measurementId: "G-WR49335BG8"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification?.title || payload.data?.title || 'Default Title';
    const notificationBody = payload.notification?.body || payload.data?.body || 'Default Body';

    // Muestra la notificación directamente en la interfaz de usuario
    const notificationOptions = {
        body: notificationBody,
        icon: '/src/images/Icons/cara-feliz.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
