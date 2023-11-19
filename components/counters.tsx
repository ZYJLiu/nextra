import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="border border-gray-300 rounded px-2 py-1 my-3"
      >
        Clicked {count} times
      </button>
    </div>
  );
}
