<template>
    <div class="background">
        <div v-show="videoStream" class="camera-container">
            <button @click="takePhoto" class="floating-button">Tomar Foto</button>
            <div class="content-container">
                <video ref="video" class="video-stream" autoplay></video>
                <canvas ref="canvas" class="canvas-stream"></canvas>
            </div>
        </div>
        <div v-show="!videoStream" class="no-camera-message">Cámara no disponible</div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            videoStream: null,
        };
    },
    methods: {
        async startCamera() {
            try {
                // Verifica si la ruta es la correcta antes de acceder a la cámara
                if (this.$route.path === '/camarita') {
                    this.videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
                    this.$refs.video.srcObject = this.videoStream;
                } else {
                    this.videoStream = null;
                }
            } catch (error) {
                console.error('Error al acceder a la cámara:', error);
                this.videoStream = null;
            }
        },
        stopCamera() {
            if (this.videoStream) {
                this.videoStream.getTracks().forEach(track => track.stop());
                this.videoStream = null;
            }
        },
        async takePhoto() {
            const canvas = this.$refs.canvas;

            try {
                const context = canvas.getContext('2d');
                context.drawImage(this.$refs.video, 0, 0, canvas.width, canvas.height);

                const imageData = canvas.toDataURL('image/jpeg');
                this.handlePhoto(imageData);
            } catch (error) {
                console.error('Error al tomar la foto:', error);
            }
        },
        handlePhoto(imageData) {
            // Aquí puedes manejar la imagen capturada
            // Por ejemplo, puedes mostrarla en tu interfaz o descargarla directamente
            this.downloadImage(imageData);
        },
        downloadImage(imageData) {
            // Puedes implementar la lógica para descargar la imagen aquí
            // Por ejemplo, puedes mostrarla en una nueva ventana o descargarla directamente
            const link = document.createElement('a');
            link.href = imageData;
            link.download = 'mi_foto.jpg';
            link.click();
        },
    },
    mounted() {
        // Cuando el componente está montado, inicia la cámara
        this.startCamera();
    },
};
</script>
<style>
.video-stream{
    width: 730px;
}
.canvas-stream{
    width: 729px;
    height: 549px;
    margin-top: 100px;
}
.floating-button {
  position: absolute;
  bottom: 50px; /* Ajusta la distancia desde la parte inferior según tus preferencias */
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.background{
    background-color: #1E293B;
}
</style>