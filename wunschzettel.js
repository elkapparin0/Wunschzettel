import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDYtppjxzZStmyR8bZxC86AGoTai0_Hlxo",
    authDomain: "wunschzettel-bc7eb.firebaseapp.com",
    projectId: "wunschzettel-bc7eb",
    storageBucket: "wunschzettel-bc7eb.firebasestorage.app",
    messagingSenderId: "406668944946",
    appId: "1:406668944946:web:93c7c8f0636e177ab07e2b",
    measurementId: "G-VVHFGK1G9X"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const checkboxes = document.querySelectorAll(
  'input[type="checkbox"][data-id]'
);


checkboxes.forEach((checkbox) => {

  const id = checkbox.dataset.id;
  const itemRef = doc(db, "wishlist", id);


  // Zustand aus Firebase laden und live beobachten
  onSnapshot(itemRef, (snapshot) => {

    if (snapshot.exists()) {
      checkbox.checked = snapshot.data().checked ?? false;
    } else {
      checkbox.checked = false;
    }

  });


  // Änderung der Checkbox in Firebase speichern
  checkbox.addEventListener("change", async () => {

    try {

      await setDoc(itemRef, {
        checked: checkbox.checked,
        updatedAt: serverTimestamp()
      });

    } catch (error) {

      console.error(
        `Fehler beim Speichern von "${id}":`,
        error
      );

    }

  });

});
