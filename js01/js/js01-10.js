let list = ``
list += '<ul>';
list += '<li>Hello 반갑다는 뜻이야!</li>';
list += '<li>Javascript 로 작성되었어.</li>';
list += '</ul>';
list += '<h2>&& and </h2>';
list += '<table class="a">';
list += '<tr><td>false</td><td>false</td><td>false</td></tr>';
list += '<tr><td>true</td><td>false</td><td>false</td></tr>';
list += '<tr><td>false</td><td>true</td><td>false</td></tr>';
list += '<tr><td>true</td><td>true</td><td>true</td></tr>';
list += '</table>';
list += '<h2>|| or </h2>';
list += '<table class="a">';
list += '<tr><td>false</td><td>false</td><td>false</td></tr>';
list += '<tr><td>true</td><td>false</td><td>true</td></tr>';
list += '<tr><td>false</td><td>true</td><td>true</td></tr>';
list += '<tr><td>true</td><td>true</td><td>true</td></tr>';
list += '</table>';
document.write(list)