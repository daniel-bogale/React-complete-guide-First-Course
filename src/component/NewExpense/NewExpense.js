import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredexpenseData) => {
    const expenseData = {
      ...enteredexpenseData,
      id: Math.random().toString(),
    };

    props.addExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm saveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
