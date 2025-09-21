import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged, type Auth, type User } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    onSnapshot,
    updateDoc,
    arrayUnion,
    arrayRemove,
    type Firestore,
    type Unsubscribe
} from 'firebase/firestore';
import type { Recipe } from '../types';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

// Function to initialize Firebase and get auth instance
export const initFirebase = () => {
    return { auth, db };
};

// Sign in a user anonymously, or get the existing user
export const authSignIn = (authInstance: Auth): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(authInstance, (user) => {
            unsubscribe(); // We only need this once to get the initial state
            if (user) {
                resolve(user);
            } else {
                signInAnonymously(authInstance)
                    .then((userCredential) => {
                        resolve(userCredential.user);
                    })
                    .catch((error) => {
                        console.error("Anonymous sign-in failed:", error);
                        reject(error);
                    });
            }
        }, (error) => {
            unsubscribe();
            reject(error);
        });
    });
};

// Get the user's favorites collection reference
const getFavoritesRef = (userId: string) => doc(db, 'favorites', userId);

// Add a recipe to the user's favorites
export const addFavoriteRecipe = async (userId: string, recipe: Recipe) => {
    const favoritesRef = getFavoritesRef(userId);
    // Use setDoc with merge to create the document if it doesn't exist,
    // and arrayUnion to add the recipe.
    await setDoc(favoritesRef, { recipes: arrayUnion(recipe) }, { merge: true });
};

// Remove a recipe from the user's favorites
export const removeFavoriteRecipe = async (userId: string, recipeId: string) => {
    const favoritesRef = getFavoritesRef(userId);
    const docSnap = await getDoc(favoritesRef);

    if (docSnap.exists()) {
        const favoriteRecipes = docSnap.data().recipes as Recipe[];
        // Filter the array to remove the recipe with the given id
        const updatedRecipes = favoriteRecipes.filter(r => r.id !== recipeId);

        // Overwrite the array with the new filtered array
        await updateDoc(favoritesRef, {
            recipes: updatedRecipes
        });
    }
};

// Listen for changes in the user's favorites
export const onFavoritesChange = (userId: string, callback: (recipes: Recipe[]) => void): Unsubscribe => {
    const favoritesRef = getFavoritesRef(userId);
    const unsubscribe = onSnapshot(favoritesRef, (doc) => {
        if (doc.exists()) {
            const data = doc.data();
            callback(data.recipes || []);
        } else {
            callback([]);
        }
    }, (error) => {
        console.error("Error listening to favorites changes:", error);
        callback([]);
    });

    return unsubscribe;
};
