import { combineReducers } from "redux";
import boardReducer from './reducers/boards';
import listReducer from './reducers/lists';
import cardReducer from './reducers/cards';
import commentReducer from './reducers/comments';

const reducers = combineReducers({
    boards: boardReducer,
    lists: listReducer,
    cards: cardReducer,
    comments: commentReducer
})

export default reducers;