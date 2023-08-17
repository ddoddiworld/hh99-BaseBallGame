// 주차 별 팀 과제  - 숫자야구 게임

// 랜덤 숫자 3자리 숫자 만들기
var numSet = new Set();

while(!(numSet.size == 3)) {
    numSet.add(Math.floor(Math.random() * (9 - 0)))
}

var numArr = [...numSet];
var joinNum = numArr.join('');    
console.log(`정답은? ${joinNum}`);



var n = 0; // 게임 횟수 카운트

// 사용자가 입력한 3자리 숫자 맞추기 fn
function baseball() {
    var b = 0; // B
    var s = 0; // S
    var userNum = document.getElementById('user_num').value.toString(); // 사용자가 입력한 3자리 숫자

    // 빈칸 or 3자리가 아닌 숫자를 입력할때
    if(userNum == '' || userNum.length != 3) {
        alert('세자리 숫자를 입력해 주세요!');
        return false;
    } else {
    // 3자리 숫자를 입력할때
        n += 1; // baseball 호출(누를때마다)할때마다 증감

        if(joinNum == userNum) {
            alert(`${n}번만에 맞히셨습니다. 게임을 종료합니다.\n\n새로운 게임 진행을 위해 확인 버튼을 누르면 자동 새로고침 됩니다 :)`);
            location.reload();
        } else {
            [...userNum].forEach((a, i) => {
                if(a == joinNum[i]){
                    // - 숫자의 값과 위치가 모두 일치하면 S
                    s++
                } else if(joinNum.includes(a)){
                    // - 숫자의 값은 일치하지만 위치가 틀렸으면 B
                    b++
                };
            })
            alert(`${n}번째 시도 : ${userNum}\n${b}B${s}S`);
        }

    console.log(`현재 ${n}회 진행 중!`); // 진행 중인 게임 횟수 카운트
    }
}
