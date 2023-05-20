"use strict";

const lengthRender = (optionsVal, currentValue) => {
  switch (currentValue) {
    case optionsVal[1]: // 킬로미터
      select[2].options[2].selected = true;
      lenEventHandler(mOrCm);
      break;
    case optionsVal[2]: // 미터
      select[2].options[1].selected = true;
      lenEventHandler(kmOrCm);
      break;
    case optionsVal[3]: // 센티미터
      select[2].options[1].selected = true;
      lenEventHandler(kmOrM);
  }
};

// 킬로미터
const mOrCm = (length) => {
  const 미터 = `${(length * 1000).toFixed(2)}m`;
  const 센티미터 = `${(length * 100000).toFixed(2)}cm`;
  if (select[2].options[2].selected) rightInput.value = 미터;
  if (select[2].options[3].selected) rightInput.value = 센티미터;
};

// 미터
const kmOrCm = (length) => {
  const 킬로미터 = `${(length / 1000).toFixed(2)}km`;
  const 센티미터 = `${(length * 100).toFixed(2)}cm`;
  if (select[2].options[1].selected) rightInput.value = 킬로미터;
  if (select[2].options[3].selected) rightInput.value = 센티미터;
};

// 센티미터
const kmOrM = (length) => {
  const 킬로미터 = `${(length / 100000).toFixed(2)}km`;
  const 미터 = `${(length / 100).toFixed(2)}m`;
  if (select[2].options[1].selected) rightInput.value = 킬로미터;
  if (select[2].options[2].selected) rightInput.value = 미터;
};

/* 이벤트 리스너 처리 */
const lenEventHandler = (conversionFunc) => {
  select[1].addEventListener("mouseout", () => {
    conversionFunc(leftInput.value * 1);
  });
  leftInput.addEventListener("keyup", (e) => {
    const length = e.target.value * 1;
    conversionFunc(length);
  });
};
