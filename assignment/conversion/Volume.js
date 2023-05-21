"use strict";

const volumeRender = (optionsVal, currentValue) => {

  const [_,L,ML] = select[2]

  console.log(L,ML)
  switch (currentValue) {
    case optionsVal[1]: // 리터
      ML.selected = true;
      volEventHandler(ml,L,ML);
      break;
    case optionsVal[2]: // 밀리리터
      L.selected = true;
      volEventHandler(l,L,ML);
      break;
  }
};

/* 실질적인 단위 변환을 처리하는 함수 */
//   리터
const ml = (volume,_,ML) => {
  const 밀리리터 = `${(volume * 1000).toFixed(0)}ml`;
  if (ML.selected) rightInput.value = 밀리리터;
};

// 밀리리터
const l = (volume,L) => {
  const 리터 = `${(volume / 1000).toFixed(0)}l`;
  if (L.selected) rightInput.value = 리터;
};

/* 이벤트 실행 함수  */
const volEventHandler = (conversionFunc,L,ML) => {
  select[1].addEventListener("mouseout", () => {
    conversionFunc(leftInput.value * 1,L,ML);
  });
  leftInput.addEventListener("keyup", (e) => {
    const volume = e.target.value * 1;
    conversionFunc(volume,L,ML);
  });
};
