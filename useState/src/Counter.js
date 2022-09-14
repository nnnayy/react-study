import React, { useState } from "react";

export default function Counter() {
  //Example 컴포넌트
  const [count, setCount] = useState(0); //state 변수 & 함수 선언 //state의 초기값으로 0을 선언

  return (
    <div>
      <p>{count}번 클릭하셨습니다</p>
      <button onClick={() => setCount(count + 1)}>눌러보세요</button>
    </div>
  );
}
//setCount 함수를 호출해 state 변수(count)를 갱신
