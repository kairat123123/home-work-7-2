import React, { useState, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount * 2);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponent;
//В этом примере мы используем хук `useCallback` для оптимизации функции `increment`. Каждый раз, когда компонент рендерится, функция `increment` будет иметь ту же ссылку, позволяя избежать перерасчета пропсов для дочерних компонентов, которым передается эта функция.