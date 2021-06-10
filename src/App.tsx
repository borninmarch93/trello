import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './sass/main.scss';
import Dashboard from "./pages";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const App: React.FC = () => {
    const store = configureStore();

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/boards/:id/cards/:cardId/comments/:commentId" component={ Dashboard } />
                    <Route path="/boards/:id/cards/:cardId" component={ Dashboard } />
                    <Route path="/boards/:id" component={ Dashboard } />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
