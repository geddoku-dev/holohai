import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/app';

interface SmartRouteProps {
    path: string;
    element: React.ReactElement;
    private?: boolean;
}

const SmartRoute: React.FC<SmartRouteProps> = ({ path, element, private: isPrivate }) => {
    const isLoggedIn = useAppSelector((state) => state.auth.user);

    if (isPrivate && !isLoggedIn) {
        return <Navigate to='/login' replace />
    }

    return (
        <Route path={path} element={element} />
    );
}

export default SmartRoute;
