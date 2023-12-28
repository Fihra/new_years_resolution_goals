import { createContext, useReducer, useContext } from 'react';
import goalReducer, {initialState} from '../reducers/goalReducer';
import ACTIONS from '../actions/actions';

export const GoalProvider = ({children}) => {
    const [state, dispatch] = useReducer(goalReducer, initialState);

    const createGoal = (goal) => {
        dispatch({
            type: ACTIONS.CREATE_GOAL,
            payload: {
                newGoal: goal
            }
        })
    }

    const submitGoal = () => {
        dispatch({
            type: ACTIONS.SUBMIT_GOAL
        })
    }

    const value = {
        goals: state.goals,
        newGoal: state.newGoal,
        currentGoal: state.currentGoal,
        createGoal,
        submitGoal
    }

    return <GoalContext.Provider value={value}>{children}</GoalContext.Provider>
}

const useGoals = () => {
    const context = useContext(GoalContext);
    if(context === undefined){
        throw new Error("no goal context found");
    }
    return context;
}
export default useGoals;

export const GoalContext = createContext(initialState);