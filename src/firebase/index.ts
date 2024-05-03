import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { updateDoc, doc, getFirestore, collection, setDoc } from 'firebase/firestore';
import { firebaseConfig } from '../config';
import { User } from '../types/app';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

class FirebaseService {
    private storage = storage;
    private db = db;
    private auth = auth;

    async signIn(email: string, password: string) {
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    async register(email: string, password: string) {
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    async signOut() {
        return this.auth.signOut();
    }

    async addDocument(collectionName: string, documentId: string, data: object) {
        const collectionRef = collection(this.db, collectionName);
        const documentRef = doc(collectionRef, documentId);
        return setDoc(documentRef, data);
    }

    async updateDocument(collectionName: string, docId: string, data: object) {
        const docRef = doc(this.db, collectionName, docId);
        return updateDoc(docRef, data);
    }

    async uploadFile(path: string, file: Blob) {
        const storageRef = ref(this.storage, path);
        return uploadBytes(storageRef, file);
    }

    async addUserToDatabase(user: User) {
        const userToSave = { email: user.email };
        return this.addDocument('users', user.id, userToSave);
    }
}

export default FirebaseService;