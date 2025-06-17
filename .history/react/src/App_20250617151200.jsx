import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        이 부분은 React로 개발되어 있습니다.<br />
        빌드가 완료된 js 파일을 불러와 html 파일 중간에 삽입 할 수 있습니다.

        <h1>{count}</h1>

        <div>
          <button
            type="button"
            onClick={() => setCount((count) => count + 1)}
            className="button"
          >
            카운트 + 1
          </button>
        </div>
      </div>
    </>
  );
}

export default App
