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
    
    const moveGoalToMonth = (selectedMonth, selectedGoal) => {
        dispatch({
            type: ACTIONS.MOVE_GOAL_TO_MONTH,
            payload: {
                monthName: selectedMonth,
                currentGoal: selectedGoal
            }
        })
    }

    const value = {
        goals: state.goals,
        newGoal: state.newGoal,
        currentGoal: state.currentGoal,
        moveGoalToMonth,
        createGoal,
        submitGoal,
        januaryGoals: state.januaryGoals,
        februaryGoals: state.februaryGoals,
        marchGoals: state.marchGoals,
        aprilGoals: state.aprilGoals,
        mayGoals: state.mayGoals,
        juneGoals: state.juneGoals,
        julyGoals: state.julyGoals,
        augustGoals: state.augustGoals,
        septemberGoals: state.septemberGoals,
        octoberGoals: state.octoberGoals,
        novemberGoals: state.novemberGoals,
        decemberGoals: state.decemberGoals,
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