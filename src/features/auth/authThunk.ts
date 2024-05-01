import { createAsyncThunk } from '@reduxjs/toolkit';
import FirebaseService from '../../firebase';
import { AuthUser } from '../../types/app';

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
                _id: userCredential.user.uid,
                email: userCredential.user.email,
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
            
            const user: AuthUser = {
                _id: userCredential.user.uid,
                email: userCredential.user.email,
            };
            return user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
