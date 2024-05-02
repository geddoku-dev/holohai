export interface IRoute {
    path: string;
    element: React.ReactElement;
    public?: boolean;
    children?: IRoute[];
}