import React, { Component } from "react";
import ReactDOM from "react-dom";
import FakeAPI from "./FakeAPI"
import Form from "./Form"
const App = () => <Form api={FakeAPI} />;
// ReactDOM.render(<App />, document.getElementById("app"));

export default App;

