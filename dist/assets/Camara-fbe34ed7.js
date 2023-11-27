import{_ as d,a as l,c as m,h as i,l as n,b as a}from"./index-cf14ba4d.js";const h={data(){return{videoStream:null}},methods:{async startCamera(){try{this.$route.path==="/camarita"?(this.videoStream=await navigator.mediaDevices.getUserMedia({video:!0}),this.$refs.video.srcObject=this.videoStream):this.videoStream=null}catch(e){console.error("Error al acceder a la cámara:",e),this.videoStream=null}},stopCamera(){this.videoStream&&(this.videoStream.getTracks().forEach(e=>e.stop()),this.videoStream=null)},async takePhoto(){const e=this.$refs.canvas;try{e.getContext("2d").drawImage(this.$refs.video,0,0,e.width,e.height);const o=e.toDataURL("image/jpeg");this.handlePhoto(o)}catch(t){console.error("Error al tomar la foto:",t)}},handlePhoto(e){this.downloadImage(e)},downloadImage(e){const t=document.createElement("a");t.href=e,t.download="mi_foto.jpg",t.click()}},mounted(){this.startCamera()}},v={class:"background"},_={class:"camera-container"},u={class:"content-container"},f={ref:"video",class:"video-stream",autoplay:""},g={ref:"canvas",class:"canvas-stream"},p={class:"no-camera-message"};function S(e,t,o,k,s,r){return l(),m("div",v,[i(a("div",_,[a("button",{onClick:t[0]||(t[0]=(...c)=>r.takePhoto&&r.takePhoto(...c)),class:"floating-button"},"Tomar Foto"),a("div",u,[a("video",f,null,512),a("canvas",g,null,512)])],512),[[n,s.videoStream]]),i(a("div",p,"Cámara no disponible",512),[[n,!s.videoStream]])])}const C=d(h,[["render",S]]);export{C as default};