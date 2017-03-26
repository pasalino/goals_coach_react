import { SET_COMPLETED } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SET_COMPLETED:
            const { completed_goals } = action;
            return completed_goals;
        default:
            return state;
    }
}
