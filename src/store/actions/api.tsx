import { ActionCreatorWithPayload, createAction } from "@reduxjs/toolkit";

export interface ApiCallPayload {
    url: string,
    method?: string,
    data?: unknown,
    onSuccess?: string,
    onError?: string
}

export const apiCallBegan: ActionCreatorWithPayload<ApiCallPayload> = createAction<ApiCallPayload>('api/callBegan');
export const apiCallSuccess: ActionCreatorWithPayload<ApiCallPayload> = createAction<ApiCallPayload>('api/callSuccess');
export const apiCallFailed: ActionCreatorWithPayload<ApiCallPayload> = createAction<ApiCallPayload>('api/callFailed');
