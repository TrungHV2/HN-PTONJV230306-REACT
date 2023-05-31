import React, { useState } from 'react'

export default function Form() {
    const [count, setCount] = useState(0);

    function handleChange(evt) {
        let words = evt.target.value.trim();
        setCount(words !== '' ? words.split(' ').length : 0);
    }
    /**
     * Viết xử lý sao cho mỗi khi nhập vào input, sẽ dự động đếm số từ đã được nhập và hiển thị tổng số từ xuống phía dưới
     */
  return (
    <div>
        <input onChange={handleChange} type="text" />
        <p>count words: {count}</p>
    </div>
  )
}
