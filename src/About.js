import React from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

const About = () => {
  let location = useLocation();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      {query && <p>추가적인 정보가 어쩌고 저쩌고..</p>}
    </div>
  );
};

export default About;
