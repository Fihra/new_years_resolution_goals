import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { GoalContext } from '../context/goalContext';

const GoalContainer = () => {
    const { goals } = useContext(GoalContext);

    const showGoals = () => {
        return goals.map((goal, i) => {
            return <Draggable><li className="goal-card" key={i}>{goal}</li></Draggable>
        })
    }

    return(
        <>
            <ul className="goal-container">
            {showGoals()}
            </ul>
        </>
    )
}

export default GoalContainer;