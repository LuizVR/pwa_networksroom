// if('serviceWorker' in navigator ){
//     navigator.serviceWorker.register('./sw.js')
//       .then( ()=>{
//         console.log('Service worker registered!!');
//       })
//       .catch((err) => {
//         console.log('Service worker no registered!!');
//       });
//   }

if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', {scope: '/'}).then((registration) => {
      console.log('Service Worker registrado con exito', registration);

      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Permiso de notificacion concedido');
        }
      });
  }).catch((error) => {
    console.error('Error al regitrar Service Worker:', error);
  });
});
}

