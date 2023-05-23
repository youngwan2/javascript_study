
/* TypeIt 라이브러리 : 타이핑 애니메이션 그려주는 라이브러리*/
new TypeIt("#title", {
    strings: [`<span style="color:gold">[To Do List]</span>`],
    html: true,
    lifeLike: true,
    cursor: false,
})
    .pause(500)
    .go();