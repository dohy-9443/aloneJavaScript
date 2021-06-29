try {
  willExcept.byeBye();
  console.log("try 구문의 마지막 줄");
} catch (exception) {
  console.log("catch 구문의 마지막 줄");
} finally {
  console.log("무조건 실행되는 finally");
}
