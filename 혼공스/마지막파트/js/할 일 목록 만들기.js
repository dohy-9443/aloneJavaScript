document.addEventListener("DOMContentLoaded", () => {
  // 문서 객체를 가져옴
  const input = document.querySelector("#todo");
  const todoList = document.querySelector("#todo-list");
  const addButton = document.querySelector("#add-button");

  /*
  이후에 removeTodo() 함수에서 문서 객체를
  쉽게 제거하기 위한 용도로 만든 변수
  */
  // 변수 선언
  let keyCount = 0;

  // 함수 선언
  const addTodo = () => {
    // 입력 양식에 내용이 없으면 추가하지 않음
    if (input.value.trim() === "") {
      alert("할 일을 입력해주세요.");
      return;
    }

    // 문서 객체를 설정
    const item = document.createElement("div");
    const checkbox = document.createElement("input");
    const text = document.createElement("span");
    const button = document.createElement("button");

    // 문서 객체를 식별할 키를 생성
    const key = keyCount;
    keyCount++;
    /*
    이후에 removeTodo() 함수에서 문서 객체를
    쉽게 제거하기 위한 용도로 만든 변수
    */

    // item 객체를 조작하고 추가
    item.setAttribute("data-key", key);
    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(button);
    todoList.appendChild(item);
    /*
    <div data-key="숫자">
      <input>
      <span></span>
      <button></button>
    </div>
    */

    // checkbox 객체를 조작
    checkbox.type = "checkbox"; // <input type="checkbox">

    checkbox.addEventListener("change", (event) => {
      // 체크 박스를 클릭하면 선을 그어줌
      item.style.textDecoration = event.target.checked ? "line-through" : "";
    });

    // text 객체를 조작
    text.textContent = input.value; // <span>글자</span>

    // button 객체를 조작
    button.textContent = "제거하기";
    button.addEventListener("click", () => {
      removeTodo(key);
    });

    // 입력 양식의 내용을 비움
    input.value = "";
  };

  const removeTodo = (key) => {
    // 식별 키로 문서 객체를 제거
    // 위에서 지정한 <div data-key="숫자">를 기반으로 요소를 찾고 제거
    const item = document.querySelector(`[data-key="${key}"]`);
    todoList.removeChild(item);
  };

  // 이벤트 연결
  addButton.addEventListener("click", addTodo);
  input.addEventListener("keyup", (event) => {
    // 입력 양식에서 Enter 키를 누르면 바로 addTodo() 함수를 호출
    const Enter = 13;
    if (event.keyCode === Enter) {
      addTodo();
    }
  });
});
