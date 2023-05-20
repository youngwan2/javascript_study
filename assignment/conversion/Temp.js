"use strict";

const tempRender = (optionsVal, currentValue) => {
  console.log(optionsVal);
  switch (currentValue) {
    case optionsVal[1]: // 화씨
      select[2].options[2].selected = true;
      tempEventHandler(celsiusOrKelvin);
      break;
    case optionsVal[2]: // 섭씨
      select[2].options[1].selected = true;
      tempEventHandler(fahrenheitOrKelvin);
      break;
    case optionsVal[3]: // 켈빈
      select[2].options[2].selected = true;
      tempEventHandler(fahrenheitOrCelsius);
  }
};

/* 실질적인 단위 변환을 시행하는 함수 */
// 화씨
const celsiusOrKelvin = (value) => {
  const 섭씨 = `${(((value - 32) * 5) / 9).toFixed(2)}°C`;
  const 켈빈 = `${(((value - 32) * 5) / 9 + 273.15).toFixed(2)}K`;
  if (select[2].options[2].selected) rightInput.value = 섭씨;
  if (select[2].options[3].selected) rightInput.value = 켈빈;
};

// 섭씨
const fahrenheitOrKelvin = (value) => {
  const 화씨 = `${((value * 9) / 5 + 32).toFixed(2)}`;
  const 켈빈 = `${(value + 273.15).toFixed(2)}`;
  if (select[2].options[1].selected) rightInput.value = 화씨 + "°F";
  if (select[2].options[3].selected) rightInput.value = 켈빈 + "K";
};

// 켈빈
const fahrenheitOrCelsius = (value) => {
  const 섭씨 = (value - 273.15).toFixed(2);
  const 화씨 = (((value - 273.15) * 9) / 5 + 32).toFixed(2);
  if (select[2].options[1].selected) rightInput.value = 화씨 + "°F";
  if (select[2].options[2].selected) rightInput.value = 섭씨 + "°C";
};


/* 이벤트 리스너 실행 함수 */
const tempEventHandler = (conversion) => {
  // 마우스가 좌측 select 를 벗어나는 순간 단위변환 함수 호출(단위변경 시 즉시 변환비율 반영 위함)
  select[1].addEventListener("mouseout", () => {
    conversion(leftInput.value * 1);
  });

  // 사용자가 좌측 입력창에 입력하는 순간 단위변환 함수 호출
  leftInput.addEventListener("keyup", (e) => {
    const value = e.target.value * 1;
    conversion(value);
  });
};
