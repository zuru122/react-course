import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "2 packs of sugar",
      amount: 50,
      category: "groceries",
    },
    {
      id: 2,
      description: "3 packs of Indomie",
      amount: 60,
      category: "groceries",
    },
    {
      id: 3,
      description: "Light bill",
      amount: 100,
      category: "utilities",
    },
    {
      id: 4,
      description: "1 sportify subscription",
      amount: 30,
      category: "entertainments",
    },
    {
      id: 5,
      description: "2 boomplay subscription",
      amount: 30,
      category: "entertainment",
    },
  ]);

  const addItem = (data) => {
    const newExpenses = {
      ...data,
      id: Date.now(),
    };
    setExpenses(() => [...expenses, newExpenses]);
    console.log(data);
  };

  const deleteItem = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filterItem = (value) => {
    if (value === "") {
      setExpenses(expenses);
    } else {
      setExpenses(expenses.filter((expense) => expense.category == value));
    }
  };

  return (
    <>
      <ExpenseForm addExpense={addItem} />
      <ExpenseFilter filterItem={filterItem} />
      <ExpenseChart items={expenses} />
      <ExpenseList
        items={expenses}
        deleteItem={deleteItem}
        filterItem={filterItem}
      />
    </>
  );
}

export default App;
