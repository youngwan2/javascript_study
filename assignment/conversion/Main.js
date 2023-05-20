"use strict";

const leftInputForm = document.getElementById("left_input_form");
const rightInputForm = document.getElementById("right_input_form");
const select = document.getElementsByTagName("select");
const leftInput = document.getElementById("left_input");
const rightInput = document.getElementById("right_input");

let leftOptions = [];
let rightOptions = [];

/*  각 단위별로 활용한 세부 단위들을 저장하는 객체 */
const units = {
  temp: ["==선택==", "화씨", "섭씨", "켈빈"],
  length: ["==선택==", "킬로미터", "미터", "센티미터"],
  mass: ["==선택==", "킬로그램", "그램", "밀리그램"],
  volume: ["==선택==", "리터", "밀리리터",null],
};

/* select 옵션 요소를 생성하는 함수 */
const createElementHandler = (optionsVal) => {
  // leftOptions = [];
  select[1].innerHTML = ""; // 기존 select 옵션 리셋
  select[2].innerHTML = ""; // 기존 select 옵션 리셋

  //   왼쪽 입력창
  for (let i = 0; i < optionsVal.length; i++) {
    leftOptions.push(document.createElement("option"));
    leftOptions[i].setAttribute("value", optionsVal[i]);
    leftOptions[i].textContent = optionsVal[i];
    select[1].appendChild(leftOptions[i]);
  }

  //   오른쪽 입력창
  for (let i = 0; i < optionsVal.length; i++) {
    rightOptions.push(document.createElement("option"));
    rightOptions[i].setAttribute("value", optionsVal[i]);
    rightOptions[i].textContent = optionsVal[i];
    select[2].appendChild(rightOptions[i]);
  }
};

/* 상단의 select 옵션을 바꿀 때 마다 하단 input 내 select 의 옵션을 ==선택==으로 초기화한다. */
const optionReset = () => {
  select[1].options[0].selected = true;
  select[2].options[0].selected = true;
};


/* 온도 */
const temperatureConversion = () => {
  const optionsVal = units.temp;
  createElementHandler(optionsVal);
  select[1].addEventListener("change", (e) => {
    tempRender(optionsVal, e.currentTarget.value); //온도 변환 결과 렌더링
  });
};

/* 길이 */
const lengthConversion = () => {
  const optionsVal = units.length;
  createElementHandler(optionsVal);
  select[1].addEventListener("change", (e) => {
    lengthRender(optionsVal, e.currentTarget.value); //길이 변환 결과 렌더링
  });
};

/* 질량 */
const massConversion = () => {
  const optionsVal = units.mass;
  createElementHandler(optionsVal);
  select[1].addEventListener("change", (e) => {
    massRender(optionsVal, e.currentTarget.value); // 질량 변환 결과 렌더링
  });
};

/* 부피 */
const volumeConversion = () => {
  const optionsVal = units.volume;
  createElementHandler(optionsVal);

  select[1].addEventListener("change", (e) => {
    volumeRender(optionsVal, e.currentTarget.value); // 부피 변환 결과 렌더링
  });
};

/* 유저가 선택한 옵션에 따른 분기처리를 담당하는 함수 */
const branchFunc = () => {
  const userSelection = select[0].value;

  // 유저가 선택한 옵션에 따른 단위 변환 함수 호출
  switch (userSelection) {
    case "온도":
      {console.log("온도");
      temperatureConversion();
      optionReset();}
      break;
    case "길이":
      {console.log("길이");
      lengthConversion();
      optionReset();}
      break;
    case "질량":
      {console.log("질량");
      massConversion();
      optionReset();}
      break;
    case "부피":
      {console.log("부피");
      volumeConversion();
      optionReset();}
      break;
    default:
      console.log("해당 없음");
  }
};

branchFunc();

// 상단 select
select[0].addEventListener("change", branchFunc);
