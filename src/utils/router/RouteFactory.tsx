import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { IRoute } from './interfaces';
import { useAppSelector } from '../../hooks/app';

const RouteComponent = ({ route }: { route: IRoute }) => {
    const { public: isPublic = true } = route;
    const isAuthenticated = useAppSelector((state) => state.auth.user);

    if (isPublic || isAuthenticated) {
        return route.element;
    }

    return <Navigate to='/login' replace />;
};

const createRoute = (route: IRoute) => (
    <Route key={route.path} path={route.path} element={<RouteComponent route={route} />} />
);

export default createRoute;
