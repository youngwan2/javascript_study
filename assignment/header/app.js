(() => {
  const topBackCon = document.querySelector(".top_back");
  const navUl = document.querySelector(".nav_ul");
  let pageNum = -1;
  let isHover = false;

  try {
    // 데이터베이스
    const navList = [
      {
        title: "About",
        desc: "Welcome to our company, where innovation meets excellence",
        background: "#025464",
        color: "white",
        image: "./images/tree.jpg",
      },
      {
        title: "Products",
        desc: "Experience the ultimate in luxury with our exceptional flagship product.",
        background: "#E57C23",
        color: "white",
        image: "./images/architecture.jpg",
      },
      {
        title: "Technology",
        desc: "Our company stands out for its groundbreaking technology, revolutionizing the industry with innovative solutions that redefine the way things are done. ",
        background: "#E8AA42",
        color: "white",
        image: "./images/code.jpg",
      },
      {
        title: "Dowunloads",
        desc: "Unlock convenience and seamless connectivity with our cutting-edge company app.",
        background: "#A2C1C1",
        color: "white",
        image: "./images/internet.jpg",
      },
      {
        title: "Etc",
        desc: "Easily locate us with our convenient and accessible location.",
        background: "#FF6D60",
        color: "white",
        image: "./images/background.jpg",
      },
    ];

    // 추가된 메뉴 갯수 파악
    console.log("현재 메뉴 갯수:", navList.length);

    // 카테고리 그리는 함수
    const render = () => {
      let navUlHTML = "";

      for (let i = 0; i < navList.length; i++) {
        navUlHTML += `
            <li>${navList[i].title}</li>
            `;
      }
      navUl.innerHTML = navUlHTML;
    };
    render();

    const menu = document.querySelectorAll("li");
    // 카테고리 요소를 순회하면서 클릭 시 실행할 함수를 호출
    menu.forEach((li, i) => {
      li.addEventListener("click", (e) => {
        choiceTopBackRender(e.target.textContent, i);
      });
    });

    // 각 카테고리를 클릭하면 실행되는 함수
    const choiceTopBackRender = (target, currentPage) => {
      let topBackHTML = "";

      //   리스트 길이 만큼 순회하면서 클릭한 값과 리스트의 값이 일치하면
      // 해당하는 리스트의 요소를 추가하고, 마지막으로 html을 화면에 나타낸다.
      for (let i = 0; i < navList.length; i++) {
        if (target === navList[i].title) {
          topBackCon.style.backgroundColor = `${navList[i].background}`;
          topBackCon.style.backgroundImage = `url(${navList[i].image})`;
          topBackHTML += `
         <div class="top_back_content" style="color:${navList[i].color}">
            <h2 class="title">${navList[i].title}</h2>
            <p class="content">
                ${navList[i].desc}
            </p>
         </div>
        `;
        }

        menu[i].style.cssText = `background:none; color:black`;
      }

      menu[currentPage].classList.add("active");
      menu[currentPage].style.cssText = `
    background:${navList[currentPage].background}; 
    color:${navList[currentPage].color}`;
      topBackCon.innerHTML = topBackHTML;
    };

    // 페이지 로딩 시

    /* 자동 페이지 전환을 담당하는 함수 및 이벤트리스너 영역*/
    let interval = "";
    const intervalFunc = () => {
      isHover = false;
      if (false === isHover) {
        interval = setInterval(() => {
          if (pageNum > 3) {
            pageNum = -1;
          }
          pageNum++;
          console.log(navList[pageNum].title);
          console.log(pageNum);
          choiceTopBackRender(navList[pageNum].title, pageNum);
        }, 3000);
      }
      console.log(isHover);
    };

    // DOM 객체가 로드 된 이후 초기 페이지 화면 및 자동 페이지 전환이 즉시 실행토록 함.
    document.addEventListener("DOMContentLoaded", () => {
      intervalFunc(isHover);
      setTimeout(() => {
        choiceTopBackRender("About", 0);
      }, 0);
    });
    topBackCon.addEventListener("mouseout", intervalFunc);

    // 마우스 호버 시 자동 페이지 전환 중지
    topBackCon.addEventListener("mouseenter", () => {
      isHover = true;
      if (isHover) clearInterval(interval);
      console.log(isHover);
    });
  } catch (error) {
    console.log(`에러발생! 에러발생! ${error}`);
  }
})();
