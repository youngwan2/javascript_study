//https://devinus.tistory.com/48

// 슬라이드 전체 크기
const slide = document.querySelector('.slide') //부모 컨테이너
let slideWidth = slide.clientWidth;
console.log(`컨테이너 슬라이드의 크기: ${slideWidth}`)

// 버튼 요소 선택
const prevBtn = document.querySelector(".slide_prev");
const nextBtn = document.querySelector(".slide_next");


// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
let slideItems = document.querySelectorAll(".slide_item") //슬라이드 요소들

// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide =slideItems.length;
console.log(`슬라이드 최대 크기: ${maxSlide}`)
// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수(index)
let currentSlide = 1;


// 페이지네이션 생성
const pagination = document.querySelector(".slide_pagination");

// i 가 0 일 때(활성화 일 때) active 클래스를 추가한다.
function paginationRender(currentSlide) {
    for (let i = 0; i < maxSlide; i++) {
        if (i === currentSlide - 1) pagination.innerHTML += `<li class="active">●</li>`
        else pagination.innerHTML += `<li>●</li>`
    }
}
paginationRender(currentSlide)

const paginationItems = document.querySelectorAll('.slide_pagination >li')

// 무한 슬라이드를 위해 start, end 슬라이드 복사하기
const startSlide =slideItems[0]; //슬라이드 요소 첫 번째 꺼 복사
const endSlide =slideItems[slideItems.length - 1]; // 슬라이드 요소 마지막 꺼 복사
const startElem = document.createElement('div');// 첫 요소꺼 넣을 div 생성
const endElem = document.createElement('div'); // 끝 요소 꺼 넣을 div 생성

// 마지막 슬라이드 요소의 클래스 길이 만큼 반복을 돌면서
// 해당 클래스 이름들을 끝요소들을 복사한 div의 클래스로 추가한다.
// 즉, 요소를 완전히 복사하는거
endSlide.classList.forEach((c) => {
    endElem.classList.add(c)
})

startSlide.classList.forEach((c) => {
    startElem.classList.add(c)
})

// 각 복제한 엘리먼트를 추가한다.
// 슬라이드 첫 번째 요소의 이전에 끝 요소에 해당하는 슬라이드 추가
slideItems[0].before(endElem)
// 슬라이드의 마지막 요소의 뒤에 슬라이드 첫 번째 요소를 복사한 div 추가
slideItems[slideItems.length - 1].after(startElem)

/* -------------------------- */
// 슬라이드 전체를 선택해 값을 변경해주기 위한 슬라이드 전체 선택하기
slideItems = document.querySelectorAll('.slide_item')
console.log('슬라이드 크기(복제포함):',slideItems.length)

// 오프셋 계산(브라우저 내에서 컨테이너가 차지하는 사이즈)
let offset = slideWidth + currentSlide;
console.log("현재 오프셋:", offset, "px")

//각 슬라이드를 좌측으로 이동시킨다.
slideItems.forEach((slide) => {
    slide.setAttribute('style', `left : ${-offset}px`)
})

// 다음 페이지로 이동
function nextMove() {
    currentSlide++;
    // 현재 슬라이드가 최대슬라이드 크기를 벗어나지 않을 때 실행
    if (currentSlide <= maxSlide) {
        // 슬라이드를 이동시키기 위한 offset 계산
        const offset = slideWidth * currentSlide
        console.log(`(최대 슬라이드 크기) x (현재 슬라이드):`, offset)

        // 각 슬라이드에 left 속성에 offset 을 적용
       slideItems.forEach((slide) => {
            slide.setAttribute("style", `left : ${-offset}px`)
        })

        // 슬라이드 이동 시 현재 활성화된 페이지네이션을 변경한다.
        paginationItems.forEach((i) => i.classList.remove("active"))
        paginationItems[currentSlide - 1].classList.add('active')
    } else {
        currentSlide = 0; //슬라이드 크기를 벗어나면 최초의 지점으로 초기화
        let offset = slideWidth * currentSlide
       slideItems.forEach((slide) => {
            slide.setAttribute("style", `transition:${0}s; left: ${-offset}px`)
        });
        currentSlide++;
        offset = slideWidth * currentSlide

        // 각 슬라이드 아이템의 left에 offset을 적용한다.
        setTimeout(() => {
           slideItems.forEach((slide) => {
                slide.setAttribute("style", `transition:${0.15}s; left: ${-offset}px`)
            })
        },0)
        // 슬라이드가 처음 위치로 돌아올 때 페이지네이션도 해당 위치로 이동하도록 렌더링
        paginationItems.forEach((i)=>{i.classList.remove('active')}) // 전체 슬라이드 버튼 비활성화
        paginationItems[currentSlide -1].classList.add("active") //현재 슬라이드에 버튼 활성화
    }
}

function prevMove() {
    currentSlide--;
    // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
    if (currentSlide > 0) {
      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * currentSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currentSlide - 1].classList.add("active");
    } else {
      // 무한 슬라이드 기능 - currentSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
      currentSlide = maxSlide + 1;
      let offset = slideWidth * currentSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
     slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
      });
      currentSlide--;
      offset = slideWidth * currentSlide;
      setTimeout(() => {
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
          // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
          i.setAttribute("style", `transition: ${0.5}s; left: ${-offset}px`);
        });
      }, 0);
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currentSlide - 1].classList.add("active");
    }
  }
 
window.addEventListener('resize',()=>{
    slideWidth = slide.clientklll
})


nextBtn.addEventListener('click', nextMove)
prevBtn.addEventListener('click', prevMove)