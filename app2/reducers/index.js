import { combineReducers } from 'redux';
import styleReducer from './style';

const globalReducer = combineReducers({
    style: styleReducer,
});

export default (state, action) => globalReducer(state, action);
