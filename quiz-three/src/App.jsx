import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/HomeComponent";
import Quiz from "./component/QuizComponent";
import Result from "./component/ResultComponent";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/play-quiz" element={<Quiz />}></Route>
        <Route path="/finish-quiz" element={<Result />}></Route>
      </Routes>
    );
  }
}