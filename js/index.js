document.getElementById("btn").addEventListener
   ("click", capturePhoto);

   function capturePhoto() {
    var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        mediaType: Camera.MediaType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        saveToPhotoAlbum: true
    };
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, options);
}

   function onSuccess(imageData) {
      var image = document.getElementById('image');
      image.src = "data:image/jpeg;base64," + imageData;
   }

   function onFail(message) {
      alert('Failed because: ' + message);
   }
}
