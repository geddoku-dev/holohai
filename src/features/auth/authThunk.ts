import { createAsyncThunk } from '@reduxjs/toolkit';
import FirebaseService from '../../firebase';
import { AuthUser } from '../../types/app';
import { FirebaseError } from 'firebase/app';

interface AuthPayload {
    email: string;
    password: string;
}

export const loginThunk = createAsyncThunk<AuthUser, AuthPayload, any>(
    'auth/login',
    async ({ email, password }, thunkAPI) => {
        try {
            const firebaseService: FirebaseService = new FirebaseService();
            const userCredential = await firebaseService.signIn(email, password);
            
            const user: AuthUser = {
                id: userCredential.user.uid,
                email: email,
            };

            return user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const registerThunk = createAsyncThunk<AuthUser, AuthPayload, any>(
    'auth/register',
    async ({ email, password }, thunkAPI) => {
        try {
            const firebaseService: FirebaseService = new FirebaseService();
            const userCredential = await firebaseService.register(email, password);
            
            const id = userCredential.user.uid;
            if (!id) {
                throw new Error('UID not found');
            }

            const user: AuthUser = {
                id: id as string,
                email: email as string,
            };

            await firebaseService.addUserToDatabase(user);

            return user;
        } catch (error) {
            if (error instanceof FirebaseError) {
                return thunkAPI.rejectWithValue('Firebase error occurred');
            } else {
                return thunkAPI.rejectWithValue(error);
            }
        }
    }
);
