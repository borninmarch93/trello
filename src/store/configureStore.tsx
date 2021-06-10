import { configureStore, EnhancedStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from './reducer';
import apiMiddleware from './middlewares/api';

const store = (): EnhancedStore => {
    return configureStore({ reducer, middleware: [
            ...getDefaultMiddleware(),
            apiMiddleware
        ] })
}

export default store;