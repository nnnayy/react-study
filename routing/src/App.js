import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../src/Header";
import DayList from "./DayList";

function App() {
  <BrowserRouter>
    <div className="App">
      <Header /> 모든 페이지에 다 나와야 하는 페이지
      <Switch>
        {" "}
        {/* 스위치 내부는 url에 따라 각 다른 페이지를 보여줌*/}
        <Route exact path="/">
          {" "}
          {/* /는 첫페이지를 의미함 */}
          <DayList />
        </Route>
      </Switch>
    </div>
    ;
  </BrowserRouter>;
}

export default App;
