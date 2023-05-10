let list = ""
let num = prompt("!(값을 입력하지 마세요)");

list = ``
list += `<h1 style="color:white;">증감연산자 문제</h1>`
list += `<hr/>`
list += `<table class="a">`;
list += `<tr><th>증감연산자</th><th>설명</th><th>예)let num = ${num}</th>  <th>순서</th></tr>`;
list += `<tr><td>변수++</td><td>기존의 변수 값에 1을 더합니다(후위).</td><td>console.log(num++) 답:${num++} </td><td>1</td></tr>`;
list += `<tr><td>++변수</td><td>기존의 변수 값에 1을 더합니다(전위).</td><td>console.log(++num) 답:${++num} </td><td>2</td></tr>`;
list += `<tr><td>변수--</td><td>기존의 변수 값에 1을 뺍니다.(후위).</td><td>console.log(num--) 답:${num--} </td><td>3</td></tr>`;
list += `<tr><td>--변수</td><td>기존의 변수 값에 1을 뺍니다.(후위).</td><td>console.log(--num) 답:${--num} </td><td>4</td></tr>`;
list += `</table>`;

document.write(list)


// let num = prompt()

// console.log(`num++은 ${num++}`);
// console.log(`++num 은 ${++num}`);
// console.log(`num-- 은 ${num--}`);
// console.log(`--num 은 ${--num}`)