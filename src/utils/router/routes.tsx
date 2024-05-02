import { IRoute } from './interfaces';

const HomeScreen = () => <div>Home Screen</div>;

const LoginScreen = () => {
    console.log('login');

    return <div>Login Screen</div>;
}

export const routes: IRoute[] = [
    { path: '/', element: <HomeScreen />, public: false },
    { path: '/login', element: <LoginScreen /> },
];