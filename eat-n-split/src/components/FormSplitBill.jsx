import React from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input type="text" />

      <label>💸Your expense</label>
      <input type="text" />

      <label>💸 {selectedFriend.name}'s expense</label>
      <input type="text" disabled />
      <label>🤑 Who is paying the bills?</label>
      <select>
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
