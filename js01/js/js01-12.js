
alert('ex) true && false -> flase && true or true || flase -> flase || true 순으로 입력값을 받을 수 있음. true,false는 예시임. 원하는 불린 값으로 지정가능')
let boolean1 = prompt('&& 연산에 사용할 true, flase 중 하나를 입력하삼');
let boolean2 = prompt('&&연산에 사용할 true, flase 중 하나를 입력하삼');
let boolean3 = prompt('|| 연산에 사용할 true, flase 중 하나를 입력하삼');
let boolean4 = prompt('|| 연산에 사용할 true, flase 중 하나를 입력하삼');

list = `
<table>
<tr>
  <th>&& 연산</th>
  <th>연산</th>
  <th>값</th>
  <th>결과</th>
</tr>
<tr>
  <td>${boolean2}</td>
  <td>&&</td>
  <td>${boolean2}</td>
  <td>${boolean2 && boolean2}</td>
</tr>
<tr>
  <td>${boolean2}</td>
  <td>&&</td>
  <td>${boolean1}</td>
  <td>${boolean2 && boolean1}</td>
</tr>
<tr>
  <th>|| 연산</th>
  <th>연산</th>
  <th>값</th>
  <th>결과</th>
</tr>
<tr>
  <td>${boolean4}</td>
  <td>||</td>
  <td>${boolean4}</td>
  <td>${boolean4 || boolean4}</td>
</tr>
<tr>
  <td>${boolean4}</td>
  <td>||</td>
  <td>${boolean3}</td>
  <td>${boolean4 || boolean3}</td>
</tr>
</table>
`

document.write(list)