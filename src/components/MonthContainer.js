import React, { useContext } from 'react';

const MonthContainer = () => {
    const allMonths = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    const showMonths = () => {
        return allMonths.map((month, i) => {
            return <li key={i}>{month}</li>
        })
    }

    return(
        <div>
            <ul>
            {showMonths()}
            </ul>
        </div>
    )
}

export default MonthContainer;