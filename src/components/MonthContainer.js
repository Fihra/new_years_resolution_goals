import React, { useContext } from 'react';

const MonthContainer = () => {
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

export default MonthContainer;