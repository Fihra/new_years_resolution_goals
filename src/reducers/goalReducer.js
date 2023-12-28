import ACTIONS from "../actions/actions";

export const initialState = {
    goals: [],
    newGoal: "New Goal",
    currentGoal: "",
    januaryGoals: [],
    februaryGoals: [],
    marchGoals: [],
    aprilGoals: [],
    mayGoals: [],
    juneGoals: [],
    julyGoals: [],
    augustGoals: [],
    septemberGoals: [],
    octoberGoals: [],
    novemberGoals: [],
    decemberGoals: [],
}

const goalReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case ACTIONS.SHOW_GOALS:
            return {
                ...state,
                goals: state.goals
            }
        case ACTIONS.CREATE_GOAL:
            return {
                ...state,
                newGoal: payload.newGoal
            }
        case ACTIONS.SUBMIT_GOAL:
            // let createdGoal = state.newGoal;
            return {
                ...state,
                goals: [...state.goals, state.newGoal]
            }
        case ACTIONS.SET_CURRENT_GOAL:
            return {
                ...state,
                currentGoal: payload.currentGoal
            }
        default:
            return state;
    }
}

export default goalReducer;