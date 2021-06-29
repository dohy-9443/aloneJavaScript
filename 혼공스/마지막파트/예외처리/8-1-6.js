const test = () => {
  try {
    console.log("A 위치");
    throw "예외 강제 발생";
  } catch (exception) {
    console.log("B 위치");
    return;
  } finally {
    console.log("C 위치");
  }
};

// 함수 호출
test();
