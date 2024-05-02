import React from 'react';
import { HashRouter as Router, Routes } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { ProConfigProvider } from '@ant-design/pro-components';

import { routes } from './utils/router/routes';
import createRoute from './utils/router/RouteFactory';
import { LocaleProvider } from './context/LocaleContext';

interface AppProps { }

const App: React.FC<AppProps> = () => {
    const { darkAlgorithm } = theme;

    return (
        <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
            <ProConfigProvider>
                <LocaleProvider>
                    <Router>
                        <Routes>
                            {routes.map(route => createRoute(route))}
                        </Routes>
                    </Router>
                </LocaleProvider>
            </ProConfigProvider>
        </ConfigProvider>
    );
}

export default App;
