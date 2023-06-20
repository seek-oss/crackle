import ReactDOM from 'react-dom/server';

export const App: React.FC = () => <div>App</div>;

export const render = () => ReactDOM.renderToStaticMarkup(<App />);
