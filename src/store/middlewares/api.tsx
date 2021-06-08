import { apiCallBegan, apiCallFailed, apiCallSuccess } from "../actions/api";
import { AnyAction, Dispatch, MiddlewareAPI } from "redux";

const api = ({ dispatch } : MiddlewareAPI) => (next: Dispatch) => async (action: AnyAction) => {
    if (action.type !== apiCallBegan.type) return next(action);
    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;
    try {
        const response = await fetch(url, { method, body: JSON.stringify(data)});
        const responseBody = await response.json();

        // General
        dispatch({ type: apiCallSuccess.type, payload: responseBody });

        // Specific
        if (onSuccess) {
            dispatch({ type: onSuccess, payload: responseBody });
        }
    } catch(error) {
        // General
        dispatch({ type: apiCallFailed.type, payload: error });

        // Specific
        if (onError) {
            dispatch({ type: onError, payload: error })
        }
    }
}

export default api;