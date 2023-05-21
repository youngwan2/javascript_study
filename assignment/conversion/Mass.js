"use strict";

const massRender = (optionsVal, currentValue) => {
  switch (currentValue) {
    case optionsVal[1]: // 킬로그램
      select[2].options[2].selected = true;
      massEventHandler(gOrMl);
      break;
    case optionsVal[2]: // 그램
      select[2].options[1].selected = true;
      massEventHandler(kgOrMl);
      break;
    case optionsVal[3]: // 밀리그램
      select[2].options[2].selected = true;
      massEventHandler(kgOrg);
  }
};

/* 단위 변환 함수 */
// 킬로그램
const gOrMl = (weight) => {
  const 그램 = `${(weight * 1000).toFixed(0)}g`;
  const 밀리그램 = `${(weight * 1e6).toFixed(0)}mg`; // 1e+6 : 1에서 오른쪽으로 여섯칸 이동 즉, 1000000
  if (select[2].options[2].selected) rightInput.value = 그램;
  if (select[2].options[3].selected) rightInput.value = 밀리그램;
};

// 그램
const kgOrMl = (weight) => {
  const 킬로그램 = `${(weight / 1000).toFixed(0)}kg`;
  const 밀리그램 = `${(weight * 1000).toFixed(0)}mg`;
  if (select[2].options[1].selected) rightInput.value = 킬로그램;
  if (select[2].options[3].selected) rightInput.value = 밀리그램;
};

// 밀리그램
const kgOrg = (weight) => {
  const 킬로그램 = `${(weight / 1e6).toFixed(0)}kg`;
  const 그램 = `${(weight / 1000).toFixed(0)}g`;
  if (select[2].options[1].selected) rightInput.value = 킬로그램;
  if (select[2].options[2].selected) rightInput.value = 그램;
};

/* 이벤트 리스너 실행 함수 */
const massEventHandler = (conversionFunc) => {
  select[1].addEventListener("mouseout", () => {
    conversionFunc(leftInput.value * 1);
  });
  leftInput.addEventListener("keyup", (e) => {
    const weight = e.target.value * 1;
    conversionFunc(weight);
  });
};
