import React from 'react';
import { HashRouter as Router, Routes } from 'react-router-dom';

import { routes } from './utils/router/routes';
import createRoute from './utils/router/RouteFactory';

interface AppProps { }

const App: React.FC<AppProps> = () => {
    return (
        <Router>
            <Routes>
                {routes.map(route => createRoute(route))}
            </Routes>
        </Router>
    );
}

export default App;
