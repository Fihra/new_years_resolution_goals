import logo from './logo.svg';
import './App.css';
import GoalForm from './components/GoalForm';
import { GoalProvider } from './context/goalContext';
import GoalContainer from './components/GoalContainer';
import MonthContainer from './components/MonthContainer';

const App = () => {
  const date = new Date();

  console.log(date.getFullYear());

  return (
    <div className="App">
      <GoalProvider>
      <header className="App-header">
        <h1>New Years Resolution</h1>
        <MonthContainer/>
        <h3>What's your goal for {date.getFullYear() + 1}?</h3>
        <GoalForm/>
      </header>
      <GoalContainer/>
      </GoalProvider>
    </div>
  );
}

export default App;
