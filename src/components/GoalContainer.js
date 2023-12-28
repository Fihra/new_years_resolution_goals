import React, { useContext } from 'react';
import { GoalContext } from '../context/goalContext';

const GoalContainer = () => {
    const { goals } = useContext(GoalContext);

    const showGoals = () => {
        return goals.map((goal, i) => {
            return <li key={i}>{goal}</li>
        })
    }

    return(
        <>
            <ul>
            {showGoals()}
            </ul>
        </>
    )
}

export default GoalContainer;