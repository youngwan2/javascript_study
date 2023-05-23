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
    items.push(store);
    render();
}

// 배열의 길이 만큼 요소를 순회하면서 해당 html 요소를 그리는 함수
function render() {
    let textHTML = "";

    for (let i = 0; i < items.length; i++) {
        if (!items[i].isComplete) {
            textHTML += `
    <div class="todo_area v">
        <input  id="todo_check${i}" type="checkbox" class="checkbox" onclick="checkFunc(${i})" />
        <label  for="todo_check${i}" class="todo">${items[i].todos}</label>
        <button class="del_btn" onclick="delFunc(${i})">삭제</button>
    </div>`;
        } else {
            textHTML += `
    <div class="todo_area v">
        <input id="todo_check${i}" type="checkbox" class="checkbox" checked onclick="checkFunc(${i})" />
        <label for="todo_check${i}" class="todo line">${items[i].todos}</label>
        <button class="del_btn hide" onclick="delFunc(${i})">삭제</button>
    </div>
    `;
        }
    }
    input.value = ''
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
function checkFunc(i) {
    items[i].isComplete = !items[i].isComplete;
    render();
}

// 게시글 삭제 함수
function delFunc(i) {
    items.splice(i, 1);
    render();
}

// 리스트 전체 삭제
function itemAllDelFunc() {
    if (items.length <= 0) return alert("삭제할 아이템이 존재하지 않습니다.");

    const toDelete = confirm("삭제 하시겠습니까?");
    if (toDelete) items.length = 0;
    render();
}

// 리스트 선택 삭제
function itemChoiceDelFunc() {
    if (items.length <= 0) return alert("삭제할 아이템이 존재하지 않습니다.");

    const toDelete = confirm("삭제 하시겠습니까?");
    for (let i = 0; i < items.length; i++) {
        if (items[i].isComplete && toDelete) {
            items.splice(i, 1);
            i--;
        }
    }
    render();
}


function randomId() {
    return 'id_' + Math.floor(Math.random()) * 10000
}