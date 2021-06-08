import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from './reducer';
import apiMiddleware from './middlewares/api';

const store = () => {
    return configureStore({ reducer, middleware: [
            ...getDefaultMiddleware(),
            apiMiddleware
        ] })
}

export default store;