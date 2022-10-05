import React from "react";

function Traffic({ sdate, stime, cjunkook, cjibangDir, cseoulDir }) {
  return (
    <div className="traffic">
      <h3>현재 교통예보 현황</h3>
      <div className="sdate">날짜 : {sdate}</div>
      <div className="stime">시간 : {stime}</div>
      <div className="cjunkook">전국교통량 : {cjunkook}</div>
      <div className="cjibangDir">지방방향 교통량 : {cjibangDir}</div>
      <div className="cseoulDir">서울방향 교통량 : {cseoulDir}</div>
    </div>
  );
}
export default Traffic;
