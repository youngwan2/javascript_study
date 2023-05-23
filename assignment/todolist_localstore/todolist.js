const input = document.getElementById("user_input");
const addBtn = document.getElementById("add_btn");
const allDelBtn = document.getElementById("all_del");
const choiceDelBtn = document.getElementById("choice_del");
const todoContainer = document.querySelector(".todo_container");

// 아이템 목록에 사용될 데이터 저장 객체
function itemAddFunc() {
  const store = {
    id: randomId(),
    isComplete: false,
    todos: input.value,
  };

  if (input.value === "") return;
  localStoreFunc(store);
  render(store);
  return store;
}

render("");

// 로컬스토로지에 목록 데이터가 저장된 store 객체를 json 으로 변환하여 저장한다.
function localStoreFunc(store) {
  const json = JSON.stringify(store);
  localStorage.setItem(`${store.id}`, json);
}

// 배열의 길이 만큼 요소를 순회하면서 해당 html 요소를 그리는 함수
function render() {
  let textHTML = "";
  let items = "";
  for (let i = 0; i < localStorage.length; i++) {
    items = JSON.parse(localStorage.getItem(localStorage.key(i)));

    if (items.isComplete)
      // 체크 여부를 나타내는 isComplete 가 true 라면 실행
      textHTML += `
        <div class="todo_area v">
            <input id="todo_check${i}" type="checkbox" class="checkbox" onclick="checkFunc('${items.id}')" />
            <label for="todo_check${i}" class="todo line">${items.todos}</label>
            <button class="del_btn hide" onclick="delFunc('${items.id}')">삭제</button>
        </div>`;
    else {
      // false 라면 실행
      textHTML += `
        <div class="todo_area v">
            <input id="todo_check${i}" type="checkbox" class="checkbox" onclick="checkFunc('${items.id}')" />
            <label for="todo_check${i}" class="todo">${items.todos}</label>
            <button class="del_btn" onclick="delFunc('${items.id}')">삭제</button>
        </div>`;
    }
  }

  input.value = ""; // 사용자 입력창(input)을 공백으로 초기화 한다.
  return (todoContainer.innerHTML = textHTML);
}

// 이벤트 리스너
addBtn.addEventListener("click", itemAddFunc);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") itemAddFunc();
});
allDelBtn.addEventListener("click", itemAllDelFunc);
choiceDelBtn.addEventListener("click", itemChoiceDelFunc);

// 게시글 줄 긋는 함수
function checkFunc(id) {
  // 1. 로컬스토로지에 저장된 데이터를 가져온다(json 형태이므로 parse를 사용하여 js 객체로 변환한다.).
  const getItem = JSON.parse(localStorage.getItem(id));

  // 2. 목록 데이터 중 checked 여부인 isComplete를 checkFunc 함수를 실행할 때 마다 true/false로 번갈아 저장한다.
  getItem.isComplete = !getItem.isComplete;

  // 3. 2번에서 변경된 내역을 다시 로컬 스토로지에 저장된 동일한 id를 가진 키값에 반영한다.
  localStorage.setItem(id, JSON.stringify(getItem));
  render();
}

// 게시글 삭제 함수
function delFunc(id) {
  // 1. render 함수에서 delFunc 함수를 호출 시 전달 받은 목록 데이터의 아이디에
  //해당하는 키값을 로컬스토로지에서 젲거한다.
  localStorage.removeItem(`${id}`);

  //2.  제거 후 화면을 다시 그리기 위해 render() 함수를 호출한다.
  render();
}

// 리스트 전체 삭제
function itemAllDelFunc() {
  // 로컬스토로지에 저장된 데이터 배열의 길이가 0 일 때 alert 를 띄운다.
  if (localStorage.length <= 0)
    return alert("삭제할 아이템이 존재하지 않습니다.");

  // 실제 데이터를 삭제하기 전에 confirm 을 통해 응답에 따른 true/false 에 따라 분기처리한다.
  const toDelete = confirm("삭제 하시겠습니까?");
  if (toDelete) localStorage.clear();

  // 제거 후 화면을 다시 그리기 위해 render() 함수를 호출한다.
  render();
}

// 리스트 선택 삭제
function itemChoiceDelFunc() {
  let item;

  for (let i = 0; i < localStorage.length; i++) {
    item = JSON.parse(localStorage.getItem(localStorage.key(i)));

    if (localStorage.length <= 0)
      return alert("삭제할 아이템이 존재하지 않습니다.");
    if (item.isComplete === true) return localStorage.removeItem(item.id);
  }

  render();
}


// 목록의 각 아이템을 고유하게 식별하기 위해 사용.
function randomId() {
  return `id_` + Math.floor(Math.random() * 10000);
}
