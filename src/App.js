import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/New Expense/NewExpense";
import './index.css'

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'CaR Insurance', amount: '174.67', date: new Date(2021, 0, 30) },
  { id: 'e2', title: 'Medi Insurance', amount: '194.27', date: new Date(2021, 1, 12) },
  { id: 'e3', title: 'Home Insurance', amount: '494.56', date: new Date(2021, 2, 18) },
  { id: 'e4', title: 'Insurance', amount: '294.76', date: new Date(2021, 3, 12) }
  { id: 'e5', title: 'Edu', amount: '200.50', date: new Date(2020, 3, 12) }
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    
    setExpenses((prevExpenses) => {
      return ([expense, ...prevExpenses])
    })
  }

  return (
    <div>
      <h1>React</h1>
      <div>
      {/* Data/State is generated in NewExpense Component */}
        <NewExpense onAddExpense={addExpenseHandler} /> 

      {/* Data/State is Needed in Expenses Component */}
        <Expenses items={expenses} />


        {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} /> */}
      </div>

    </div>
  );
}

export default App;
