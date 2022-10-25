import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      title: "Car Insurance",
      amount: 94.12,
      date: new Date(2021, 5, 12),
    },
    {
      title: "Car service",
      amount: 450,
      date: new Date(2021, 7, 12),
    },
    {
      title: "Grocery",
      amount: 114.12,
      date: new Date(2021, 3, 2),
    },
    {
      title: "Entertainment",
      amount: 150.12,
      date: new Date(2021, 1, 12),
    },
  ];
  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />

      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
    </div>
  );
}

export default App;
