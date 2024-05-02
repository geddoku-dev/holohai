import { IRoute } from './interfaces';

import LoginScreen from '../../screens/LoginScreen';

const HomeScreen = () => <div>Home Screen</div>;

export const routes: IRoute[] = [
    { path: '/', element: <HomeScreen />, public: false },
    { path: '/login', element: <LoginScreen /> },
];