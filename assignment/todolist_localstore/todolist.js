const input = document.getElementById("user_input");
const addBtn = document.getElementById("add_btn");
const allDelBtn = document.getElementById("all_del");
const choiceDelBtn = document.getElementById("choice_del");
const items = [];
const todoContainer = document.querySelector(".todo_container");

// 아이템 목록에 사용될 데이터 저장 객체
function itemAddFunc() {
  const store = {
    id: randomId(),
    isComplete: false,
    todos: input.value,
  };

  if (input.value === "") return;
  // items.push(store);

  localStoreFunc(store);
  render(store);

  return store;
}

render("");

function localStoreFunc(store) {
  const json = JSON.stringify(store);
  localStorage.setItem(`${store.id}`, json);
}
// localStorage.clear()

// 배열의 길이 만큼 요소를 순회하면서 해당 html 요소를 그리는 함수
function render() {
  //   console.log(todo);

  let textHTML = "";
  let items = "";
  for (let i = 0; i < localStorage.length; i++) {
    items = JSON.parse(localStorage.getItem(localStorage.key(i)));

    if (items.isComplete)
      textHTML += `
        <div class="todo_area v">
            <input id="todo_check${i}" type="checkbox" class="checkbox" onclick="checkFunc('${items.id}')" />
            <label for="todo_check${i}" class="todo line">${items.todos}</label>
            <button class="del_btn hide" onclick="delFunc('${items.id}')">삭제</button>
        </div>`;
    else {
      textHTML += `
        <div class="todo_area v">
            <input id="todo_check${i}" type="checkbox" class="checkbox" onclick="checkFunc('${items.id}')" />
            <label for="todo_check${i}" class="todo">${items.todos}</label>
            <button class="del_btn" onclick="delFunc('${items.id}')">삭제</button>
        </div>`;
    }
  }

  input.value = "";
  return (todoContainer.innerHTML = textHTML);
}

// 이벤트 리스너
addBtn.addEventListener("click", itemAddFunc);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") itemAddFunc();
});
allDelBtn.addEventListener("click", itemAllDelFunc);
choiceDelBtn.addEventListener("click", itemChoiceDelFunc);

// 게시글 줄 긋는 함수?
function checkFunc(id) {
  const getItem = JSON.parse(localStorage.getItem(id));
  console.log(getItem);
  getItem.isComplete = !getItem.isComplete;
  localStorage.setItem(id, JSON.stringify(getItem));
  render();
}

// 게시글 삭제 함수
function delFunc(id) {
  console.log(id);
  localStorage.removeItem(`${id}`);
  render();
}

// 리스트 전체 삭제
function itemAllDelFunc() {
  if (localStorage.length <= 0)
    return alert("삭제할 아이템이 존재하지 않습니다.");

  const toDelete = confirm("삭제 하시겠습니까?");
  if (toDelete) localStorage.clear();
  render();
}

// 리스트 선택 삭제
function itemChoiceDelFunc() {
  let item;

  for (let i = 0; i < localStorage.length; i++) {
    item = JSON.parse(localStorage.getItem(localStorage.key(i)));

    if(localStorage.length <=0) return alert('삭제할 아이템이 존재하지 않습니다.')
    if(item.isComplete === true) return localStorage.removeItem(item.id)
  }



  render();
}

function randomId() {
  return `id_` + Math.floor(Math.random() * 10000);
}
