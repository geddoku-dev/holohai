import React from 'react';
import { HashRouter as Router, Routes } from 'react-router-dom';

import routes from './pages/routes';
import SmartRoute from './pages/SmartRoute';

interface AppProps {}

const App: React.FC<AppProps> = () => {
    return (
        <Router>
            <Routes>
                {routes.map((route) => (
                    <SmartRoute key={route.path} {...route} />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
