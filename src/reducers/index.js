import { combineReducers } from 'redux';
import user from './reducer_user';
import goals from './reducer_goals';
import completed_goals from './reducer_completed_goals';

export default combineReducers({
    user,
    goals,
    completed_goals
});