import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Homepage,
  createQuestions,
  listOfQuestions,
  Login,
  Questions,
  Answers
} from "./components";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/login" element={<Homepage />}></Route>
              <Route exact path="/" element={<Homepage />}></Route>
              <Route exact path="/createquestions" element={<createQuestions/>}></Route>
              <Route exact path="/listofquestions" element={<listOfQuestions />}></Route>
              <Route exact path="/answers" element={<Answers />}></Route>
              <Route exact path="/questions" element={<Questions />}></Route>
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Retraced <br />
            Message Center <br />
            All Rights Reserved © 2022
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/answers">Answers</Link>
            <Link to="/questions">Questions</Link>
            <Link to="/listofquestions">List of questions</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App
