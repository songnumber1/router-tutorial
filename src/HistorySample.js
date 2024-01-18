import React from "react";
// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HistorySample = () => {
  const history = useNavigate();

  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push("/");
  };

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
