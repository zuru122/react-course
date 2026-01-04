import React from "react";

function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your list</em>
      </footer>
    );
  const packedItem = items.filter((item) => item.packed).length;
  const totalItem = items.length;
  const percentage =
    totalItem === 0 ? 0 : Math.round((packedItem / totalItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${totalItem} items on your list, and you already packed 
        ${packedItem} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
