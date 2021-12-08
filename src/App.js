/** eslint-disable */
import React, { useState } from "react";
import "./App.css";
function App() {
<<<<<<< HEAD
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

=======
  let [title, setTitle] = useState(["맛집 추천", "부대찌개", "치킨", "피자"]);
  let [modal, setModal] = useState(false);
  let [like, setLike] = useState([0, 0, 0, 0]);
  let [index, setIndex] = useState(0);
  let [input, setInput] = useState("");
  return (
    <div className="App">
>>>>>>> seongjun
      {
        //블랙네비
        <BlackNav></BlackNav>
      }
      {
        // readContents Title
        title.map((t, i) => {
          return (
<<<<<<< HEAD
            <div className="list" key={id++}>
              <h1>{a}</h1>
              <h3>날짜</h3>
              <span
                data-like={like}
                onClick={(e) => {
                  like = ++e.target.dataset.like;
=======
            <article className="readContent" key={i}>
              <h3
                className="point"
                onClick={() => {
                  let newIndex = i;
                  setIndex(newIndex);
                  console.log(index);
                }}
              >
                {t}
              </h3>
              <h4>날짜</h4>
              <span
                className="point"
                onClick={() => {
                  let newLike = [...like];
                  newLike[i]++;
                  // state 업데이트 시 인덱스 제외해야 error가 안남
                  setLike(newLike);
>>>>>>> seongjun
                }}
              >
                👍
              </span>
<<<<<<< HEAD
              {like}
              <hr></hr>
            </div>
=======
              {like[i]}
            </article>
>>>>>>> seongjun
          );
        })
      }

      <div className="publish">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let newTitle = [...title];
            let newLike = [...like];
            newTitle.push(input);
            newLike.push(0);
            setTitle(newTitle);
            setLike(newLike);
          }}
        >
          추가
        </button>
      </div>

      {/* 반응형 UI */}
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        눌러봐
      </button>
      {
<<<<<<< HEAD
        // App.js의 자식 컴포넌트 state 데이터 전송하기
        // props로 자식에게 state 전해주는 법
        // <자식컴포넌트 작명={state명} />
        modal === true ? <Modal title={a}></Modal> : null
=======
        // Components
        modal ? <Modal title={title[index]}></Modal> : null
>>>>>>> seongjun
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
<<<<<<< HEAD
      <h1>{props.title}</h1>
      <p>내용</p>
      <p>날짜</p>
=======
      <b>{props.title}</b>
      <p>날짜</p>
      <p>내용</p>
>>>>>>> seongjun
    </div>
  );
}

function BlackNav() {
  return (
    <nav className="black-nav">
      <span>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          개발 Blog
        </a>
      </span>
    </nav>
  );
}

export default App;
