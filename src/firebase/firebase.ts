import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
//  si no hay ninguna instancia de la aplicación ya existente, u obtiene la instancia existente utilizando el método getApp.
const app = !getApp.length ? initializeApp(firebaseConfig) : getApp() ;

/* 
1. getApp es una función proporcionada por Firebase que devuelve una instancia de la aplicación si ya existe, de lo contrario devuelve undefined.
2. getApp.length verifica si la función getApp tiene una propiedad length. En este caso, getApp es una función regular y tiene una propiedad length que representa la cantidad de parámetros esperados por la función. Por lo tanto, getApp.length será un número mayor que cero.
3. !getApp.length negará el valor de getApp.length. Si getApp.length es mayor que cero, !getApp.length será false. Si getApp.length es cero o undefined, !getApp.length será true.
4. En la expresión condicional ?, si !getApp.length es true, se ejecutará initializeApp(firebaseConfig) para crear una nueva instancia de la aplicación utilizando la configuración proporcionada en firebaseConfig.
5. Si !getApp.length es false, se ejecutará getApp() para obtener la instancia existente de la aplicación.
*/

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };