"use strict";

const tempRender = (optionsVal, currentValue) => {
  // F: 화씨, C: 섭씨, K: 켈빈
  const [_, F, C, K] = select[2];

  switch (currentValue) {
    case optionsVal[1]: // 화씨
      C.selected = true;
      tempEventHandler(celsiusOrKelvin, F, C, K);
      break;
    case optionsVal[2]: // 섭씨
      F.selected = true;
      tempEventHandler(fahrenheitOrKelvin, F, C, K);
      break;
    case optionsVal[3]: // 켈빈
      C.selected = true;
      tempEventHandler(fahrenheitOrCelsius, F, C, K);
  }
};

/* 실질적인 단위 변환을 시행하는 함수 */
// 화씨
const celsiusOrKelvin = (value, _, C, K) => {
  const 섭씨 = `${(((value - 32) * 5) / 9).toFixed(2)}`;
  const 켈빈 = `${(((value - 32) * 5) / 9 + 273.15).toFixed(2)}`;
  if (C.selected) rightInput.value = 섭씨 + "°C";
  if (K.selected) rightInput.value = 켈빈 + "K";
};

// 섭씨
const fahrenheitOrKelvin = (value, F, _, K) => {
  const 화씨 = `${((value * 9) / 5 + 32).toFixed(2)}`;
  const 켈빈 = `${(value + 273.15).toFixed(2)}`;
  if (F.selected) rightInput.value = 화씨 + "°F";
  if (K.selected) rightInput.value = 켈빈 + "K";
};

// 켈빈
const fahrenheitOrCelsius = (value, F, C, _) => {
  const 섭씨 = (value - 273.15).toFixed(2);
  const 화씨 = (((value - 273.15) * 9) / 5 + 32).toFixed(2);
  if (F.selected) rightInput.value = 화씨 + "°F";
  if (C.selected) rightInput.value = 섭씨 + "°C";
};

/* 이벤트 리스너 실행 함수 */
const tempEventHandler = (conversion, F, C, K) => {
  // 마우스가 좌측 select 를 벗어나는 순간 단위변환 함수 호출(단위변경 시 즉시 변환비율 반영 위함)
  select[1].addEventListener("mouseout", () => {
    conversion(leftInput.value * 1, F, C, K);
  });

  // 사용자가 좌측 입력창에 입력하는 순간 단위변환 함수 호출
  leftInput.addEventListener("keyup", (e) => {
    const value = e.target.value * 1;
    conversion(value, F, C, K);
  });
};
