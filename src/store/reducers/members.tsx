import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";
import { createSelector } from "reselect";

export interface Member {
    fullName: string,
    initials: string,
    email: string
}

export interface MembersState {
    members: Member
}

const slice = createSlice(
    {
        name: 'members',
        initialState: {},
        reducers: {
            memberReceived: (members, action) => {
                const member = action.payload;
                console.log('cao,', member)
                return {
                    fullName: member.fullName,
                    initials: member.initials,
                    email: member.email
                }
            }
        }
    }
)

export const { memberReceived } = slice.actions;

// Action creators
export const fetchMember = () => {
    const url = `${process.env.REACT_APP_API_HOST}/1/tokens/${process.env.REACT_APP_TOKEN}/member?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}`
    return apiCallBegan({ url, onSuccess: memberReceived.type})
}

// Selectors
export const getMember = () => createSelector(
    (state: MembersState) => state.members,
    members => members
)

export default slice.reducer;
