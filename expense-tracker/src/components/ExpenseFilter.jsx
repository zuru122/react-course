import React from "react";

const ExpenseFilter = ({ filterItem }) => {
  return (
    <select
      name=""
      id=""
      className="form-select mb-3"
      onChange={(e) => filterItem(e.target.value)}
    >
      <option value=""></option>
      <option value="utilities">utilities</option>
      <option value="entertainment">entertainment</option>
      <option value="groceries">groceries</option>
    </select>
  );
};

export default ExpenseFilter;
