import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";
import app, { db } from "../lib/firebase.config";


const Firestore = {
  writeDoc: (...args) => {
    const [inputs, collection_name] = args
    return new Promise( async resolve => {
    const randomIndex = Math.floor(Math.random() * 10000000000)
      try {
        const docRef = doc(db, "stocks", `${randomIndex}`);
        await setDoc(docRef, {...inputs, createdAt: serverTimestamp()});
        resolve ('new doc successfully inserted')
      } catch (e) {
        // Error handling code goes here
      }
    });
  },
};
