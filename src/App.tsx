import React from "react";
import './sass/main.scss';
import Dashboard from "./pages";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const App: React.FC = () => {

    const store = configureStore();

    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );
}

export default App;
