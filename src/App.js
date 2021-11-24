import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, b] = useState("맛집 추천"); // 이 자리에 Array가 남음 [a, b] (2개의 데이터가 들어가 있음) 첫번째(a)에는 useState('남자 옷 추천'); 이게 그대로 들어간다. 두번째(b)에는 이 데이터를 수정하기 위한 함수하나를 생성
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{title}</h3>
        <p>11월 24일 발행</p>
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
