/** eslint-disable */
import React, { useState } from "react";
import "./App.css";
function App() {
  let [title, setTitle] = useState(["맛집 추천", "부대찌개", "치킨", "피자"]);
  let [modal, setModal] = useState(false);
  let [like, setLike] = useState([0, 0, 0, 0]);

  return (
    <div className="App">
      <nav className="black-nav">
        <span>개발 Blog</span>
      </nav>
      {
        // readContents Title
        title.map((t, i) => {
          return (
            <article className="readContent" key={t}>
              <h3
                className="point"
                onClick={() => {
                  console.log((like[i] += 1));
                }}
              >
                {t}
              </h3>
              <h4>날짜</h4>
              <span
                className="point"
                onClick={() => {
                  let newLike = [...like];
                  console.log(newLike[i]);
                  newLike[i]++;
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
        modal ? <Modal title={title[0]}></Modal> : null
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

export default App;
