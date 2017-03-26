import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constants';

export function logUser(email){
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

export function setGoals(goals){
    const action = {
        type: SET_GOALS,
        goals
    }
    return action;
}

export function setCompleted(completed_goals){
    const action = {
        type: SET_COMPLETED,
        completed_goals
    }
    console.log('completedList', completed_goals);
    return action;
}