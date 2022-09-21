import React, { useState, useEffect } from "react";

export default function AdvancedCounter() {
  const [count, setCount] = useState(0);

  //useEffect는 React에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지 알려줌
  //useEffect를 컴포넌트 내부에 둠으로써 effect를 통해 state 변수 또는 그 어떤 prop에도 접근할 수 있게 함
  //useEffect는 랜더링 이후 매번 수정됨
  useEffect(() => {
    setCount(() => count + 1);
  }, []);
  //컴포넌트가 화면에 가장 처음 랜더링될 때 한번만 실행하고 싶으면 deps 위치에 빈 배열을 넣는다
  //배열을 생략하면 업데이트될 때마다 실행된다

  return (
    <>
      <p>{count}번 클릭하셨습니다</p>
      <button onClick={() => setCount(() => count + 1)}>Click Me</button>
    </>
  );
}
