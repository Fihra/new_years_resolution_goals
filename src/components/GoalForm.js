import React, {useContext, useState} from 'react';
import { GoalContext } from '../context/goalContext';

const GoalForm = () => {
    const { createGoal, newGoal, submitGoal } = useContext(GoalContext);

    // const [ newGoal, setNewGoal ] = useState('new goal');

    const onChange = (e) => {
        // setNewGoal(e.target.value);
        // console.log(e.target.value);
        createGoal(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submitGoal();
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Goal:</label>
            <input type="text" name="goal" onChange={onChange} value={newGoal}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default GoalForm;