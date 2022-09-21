import React, { useState, useEffect, useRef } from "react";

export default function FinalCounter() {
  const [count, setCount] = useState();
  const input = useRef(0);

  useEffect(() => {
    input.current = input.current + 1;
  });

  return (
    <>
      <input type="" value={count} onChange={(e) => setCount(e.target.value)} />
      <p>{input.current}</p>
    </>
  );
}
