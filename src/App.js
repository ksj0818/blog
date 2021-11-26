/** eslint-disable */
import React, { useState } from "react";
import "./App.css";
function App() {
  let [title, setTitle] = useState(["맛집 추천", "부대찌개", "치킨", "피자"]);
  let [modal, setModal] = useState(false);
  let [like, setLike] = useState([0, 0, 0, 0]);
  let [index, setIndex] = useState(0);
  let [input, setInput] = useState("");
  return (
    <div className="App">
      {
        //블랙네비
        <BlackNav></BlackNav>
      }
      {
        // readContents Title
        title.map((t, i) => {
          return (
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
                }}
              >
                👍
              </span>
              {like[i]}
            </article>
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
        // Components
        modal ? <Modal title={title[index]}></Modal> : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <b>{props.title}</b>
      <p>날짜</p>
      <p>내용</p>
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
