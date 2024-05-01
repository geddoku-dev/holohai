import AssistantPage from './AssistantPage';

interface RouteConfig {
    path: string;
    element: React.ReactElement;
    children?: RouteConfig[];
}

const routes: RouteConfig[] = [
    { path: '/', element: <AssistantPage /> },
];

export default routes;
