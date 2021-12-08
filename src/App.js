/** eslint-disable */
import React, { useState } from "react";
import "./App.css";

function App() {
  // 이 자리에 Array가 남음 [a, b] (2개의 데이터가 들어가 있음)
  // 첫번째(a)에는 useState('남자 옷 추천'); 이게 그대로 들어간다.
  // 두번째(b)에는 이 데이터를 수정하기 위한 함수하나를 생성
  let [a, setA] = useState(["맛집 추천", "리액트", "JSX"]);
  let [modal, setModal] = useState(false);
  let id = 1;
  let like = 0;

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
            <div className="list" key={id++}>
              <h1>{a}</h1>
              <h3>날짜</h3>
              <span
                data-like={like}
                onClick={(e) => {
                  like = ++e.target.dataset.like;
                }}
              >
                👍
              </span>
              {like}
              <hr></hr>
            </div>
          );
        })
      }
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        눌러봐
      </button>
      {
        // App.js의 자식 컴포넌트 state 데이터 전송하기
        // props로 자식에게 state 전해주는 법
        // <자식컴포넌트 작명={state명} />
        modal === true ? <Modal title={a}></Modal> : null
      }
    </div>
  );
}

// 인자값에 props 넣어주기
function Modal(props) {
  return (
    <div className="modal">
      <h1>{props.title}</h1>
      <p>내용</p>
      <p>날짜</p>
    </div>
  );
}

export default App;
