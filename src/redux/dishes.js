import * as ActionTypes from './ActionTypes';

export const Dishes = (state = { isLoading: true, err: null, dishes: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return { ...state, isLoading: false, err: null, dishes: action.payload };
        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, err: null, dishes: [] };
        case ActionTypes.DISHES_FAILED:
            return { ...state, isLoading: false, err: action.payload, dishes: [] };
        default:
            return state;
    }
}