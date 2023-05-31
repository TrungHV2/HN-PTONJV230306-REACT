import React, { useEffect, useState } from 'react'

export default function Home(props) {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      console.log('ComponentDidMount');
      // Xử lý sau khi component được render lần đầu
      return () => {
        console.log('ComponentWillUnmount');
        // Xử lý sau khi component được gỡ khỏi cây DOM
      }
    } else {
      setIsMounted(true);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      console.log('ComponentDidUpdate');
      // Xử lý khi component update thông tin
    }
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={e => setCount(count + 1)}>Click</button>
    </div>
  )
}
