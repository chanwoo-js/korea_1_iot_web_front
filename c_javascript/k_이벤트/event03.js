// event03.js

// !페이지 로드 이벤트
// DOMContentLoaded  이벤트
// : html 문서가 완전히 로드되고 dom 트리가 완성되었을때 발생
// >> 이미지, css , 스크립트 파일이 아직 로드되지 않아도 이벤트 발생


// load 이벤트
// : 페이지의 모든 콘텐츠가 완전히 로드된 경우에만 발생


// >> html dom 트리가 없을 경우
//  : js 동작 방식에 오류
window.addEventListener("DOMContentLoaded",function() {
  console.log("돔 트리가 완성되었습니다.");
  
})

window.addEventListener("load",function() {
  console.log("페이지 모든 콘텐츠가 로드되었습니다.");
  
})
