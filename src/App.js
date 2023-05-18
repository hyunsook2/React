import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let [postTitle, setPostTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "리액트",
  ]);
  let date = new Date();
  let postContent = new Intl.DateTimeFormat("kr").format(date);
  let [따봉, set따봉] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [배경색깔, 색깔바꿔] = useState(["skyblue", "gray", "purple"]);

  function changePostTitle() {
    let arrayData = [...postTitle];
    console.log(arrayData);
    arrayData[0] = "여자 코트 추천";
    setPostTitle(arrayData);
  }

  return (
    <div className="App">
      <div className="TopTitle">
        <h2>React Blog</h2>
      </div>
      <button onClick={changePostTitle}>바꾸는 버튼 </button>

      {postTitle.map(function (a, i) {
        return (
          <div className="list">
            <h4>
              {a}
              <span
                onClick={function () {
                  let 따봉카피 = [...따봉];
                  따봉카피[i] = 따봉카피[i] + 1;
                  set따봉(따봉카피);
                }}
              >
                👍{따봉[i]}
              </span>
            </h4>
            <p>{postContent}</p>
          </div>
        );
      })}

      {
        <h2
          onClick={() => {
            setModal(!modal);
          }}
        >
          게시글
        </h2>
      }

      {modal == true ? (
        <Modal
          색깔={"skyblue"}
          바꿔={changePostTitle}
          제목작명임={postTitle[0]}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.색깔 }}>
      <h4>{props.제목작명임}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.바꿔}>밑장빼기</button>
    </div>
  );
}

export default App;
