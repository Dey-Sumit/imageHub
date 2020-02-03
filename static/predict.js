// import firebase from 'firebase/app';
//
// import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAIyDTbkMgFWpk23od7vKr_YZZ_Nh16ocs",
  authDomain: "imax-image.firebaseapp.com",
  databaseURL: "https://imax-image.firebaseio.com",
  projectId: "imax-image",
  storageBucket: "imax-image.appspot.com",
  messagingSenderId: "601434399277",
  appId: "1:601434399277:web:99eff57d22e3058743cea4",
  measurementId: "G-KT0TBRZKYV"
};


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
var file, upload_button;
upload_button = document.getElementById("upload_btn");
const previewFile = () => {
  upload_button.innerHTML = "Upload";
  upload_button.classList.remove("btn-success");
  const preview = document.querySelector('img');
  file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function() {
    // convert image file to base64 string
    preview.src = reader.result;
    console.log(file);
  }, false);

  if (file) {
    reader.readAsDataURL(file);
    document.getElementById("customLabel").innerHTML = file.name;
  }
}

const uploadFile = () => {
  console.log("uploading started");
  console.log(file.name);
  const url = 'images/' + file.name;
  const uploadTask = storage.ref(url).put(file).then(
    (snapshot) => {
      console.log(snapshot.state);
      if (snapshot.state == "success") {
        upload_button.innerHTML = "Uploaded";
        upload_button.classList.add("btn-success");
      }
    }
  );
}
const predictionButton = document.getElementById("predict");
const predict = () => {
  console.log("fired pred");

}