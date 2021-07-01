import { useState, useEffect } from "react";

function TimeCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let time = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, [count]);

  return <div>{count}</div>;
}

export default TimeCounter;
