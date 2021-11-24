/** eslint-disable */
import React, { useState } from "react";
import "./App.css";

function App() {
  // 이 자리에 Array가 남음 [a, b] (2개의 데이터가 들어가 있음)
  // 첫번째(a)에는 useState('남자 옷 추천'); 이게 그대로 들어간다.
  // 두번째(b)에는 이 데이터를 수정하기 위한 함수하나를 생성
  let [a, b] = useState(["맛집 추천", "리액트", "JSX"]);
  let [like, likeUpdate] = useState(0);
  let [modal, modalUpdate] = useState(false);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <input
        type="button"
        value="버튼"
        onClick={(e) => {
          e.preventDefault();
          // 특정 데이터만 변경하는법
          let newArray = [...a]; // deep copy하기, (값 공유가 아닌 서로 독립적인 값을 가지는 복사)
          newArray[0] = "우동 맛집 추천";
          b(newArray);
          // b(["냉면 맛집", "우동 맛집", "분식 맛집"]);
        }}
      /> */}
      {
        //
        a.map((a) => {
          return (
            <div className="list">
              <h3>
                {a}
                <span
                  onClick={() => {
                    // state 변경
                    likeUpdate((like += 1));
                  }}
                >
                  👍
                </span>
                {like}
              </h3>
              <p>11월 22일 발행</p>
              <hr></hr>
            </div>
          );
        })
      }
      <button
        onClick={() => {
          modalUpdate(true);
        }}
      >
        눌러봐
      </button>
      {
        // App.js의 자식 컴포넌트 state 데이터 전송하기
        modal === true ? <Modal title={a}></Modal> : null
      }
    </div>
  );
}

// 인자값에 props 넣어주기
function Modal(props) {
  return (
    <div>
      <article className="modal">
        <h1>{props.a[0]}</h1>
        <p>내용</p>
        <p>날짜</p>
      </article>
    </div>
  );
}

export default App;
