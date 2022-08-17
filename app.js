// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCXeTxZxvnjPMi53uVNLdrU8ZGBQ8wwRhU",
    authDomain: "cloud-storage-f183d.firebaseapp.com",
    projectId: "cloud-storage-f183d",
    storageBucket: "cloud-storage-f183d.appspot.com",
    messagingSenderId: "471059716245",
    appId: "1:471059716245:web:4ad7c5203552802cd7639c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('file').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('UploadedFiles/' + file.name);

    storageRef.put(file).on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        const progressBar = document.getElementById('progress_bar');
        progressBar.value = progress;
    });

    storageRef.getDownloadURL().then(function(url){
        const image = document.getElementById('image');
        console.log(url);
        image.src = url
    });
});