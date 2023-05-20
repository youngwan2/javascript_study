"use strict";

const volumeRender = (optionsVal, currentValue) => {
  switch (currentValue) {
    case optionsVal[1]: // 리터
      select[2].options[2].selected = true;
      volEventHandler(ml);
      break;
    case optionsVal[2]: // 밀리리터
      select[2].options[1].selected = true;
      volEventHandler(l);
      break;
  }
};

/* 실질적인 단위 변환을 처리하는 함수 */
//   리터
const ml = (volume) => {
  const 밀리리터 = `${(volume * 1000).toFixed(0)}ml`;
  if (select[2].options[2].selected) rightInput.value = 밀리리터;
};

// 밀리리터
const l = (volume) => {
  const 리터 = `${(volume / 1000).toFixed(0)}l`;
  if (select[2].options[1].selected) rightInput.value = 리터;
};

/* 이벤트 실행 함수  */
const volEventHandler = (conversionFunc) => {
  select[1].addEventListener("mouseout", () => {
    conversionFunc(leftInput.value * 1);
  });
  leftInput.addEventListener("keyup", (e) => {
    const volume = e.target.value * 1;
    conversionFunc(volume);
  });
};
