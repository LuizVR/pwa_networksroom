<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar />

		<!-- Content -->
		<router-view />
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBlF2Zdg-ltkI-KTltKQhH1iNxmnU3bxRU",
  authDomain: "pwabackend-f0c5e.firebaseapp.com",
  databaseURL: "https://pwabackend-f0c5e-default-rtdb.firebaseio.com",
  projectId: "pwabackend-f0c5e",
  storageBucket: "pwabackend-f0c5e.appspot.com",
  messagingSenderId: "150054104750",
  appId: "1:150054104750:web:d43128b49980caf641073f",
  measurementId: "G-WR49335BG8"
};

const app = initializeApp(firebaseConfig);


const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

getToken(messaging, { vapidKey: 'BGs2FR3cK3c35c1fn2wjElg1bd3d6fwqxnY06KcqNDkGfK_RGdQBViFXeyf2z7lRR-0oW-LYIvRiARXWgHT6G-s' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
	console.log("Token:", currentToken);
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>