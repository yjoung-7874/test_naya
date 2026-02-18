const re = /ab+c/; // 정규 표현식 리터럴로 정규표현식 할당
const re1 = new RegExp("ab+c"); // RegExp 생성자로 정규표현식 할당

function escapeRegExp(string) { // 함수 정의
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // replace 메서드로
                                                          // escape되지 않은 
                                                          // 특수문자를 escape
}

const myRe = /d(b+)d/g; // 정규표현식 선언
const myArray = myRe.exec("cdbbdbsbz"); // exec 메서드로 일치하는 부분을
                                        // 탐색하고 관련 정보를 배열로 반환
console.log(myArray); // * 추가 코드: 배열 출력

const myArray1 = /d(b+)d/g.exec("cdbbdbsbz"); // 앞의 코드와 동일

const myRe1 = new RegExp("d(b+)d", "g"); // 문자열로부터 정규표현식 생성
const myArray2 = myRe1.exec("cdbbdbsbz"); // 앞의 코드와 동일

const myRe2 = /d(b+)d/g; // 정규표현식 선언
const myArray3 = myRe2.exec("cdbbdbsbz"); // 문자열과 일치하는 부분에 대한 정보 배열
console.log(`lastIndex의 값은 ${myRe2.lastIndex}`) // 다음 일치를 시작할 인덱스 출력: 5

const myArray4 = /d(b+)d/g.exec("cdbbdbsbz"); // 정규표현식을 변수로 선언하지 않고 바로 배열 생성
console.log(`lastIndex의 값은 ${/d(b+)d/g.lastIndex}`); // 정규표현식이 새로운 객채이므로 5가
                                                        // 출력되지 않음: 0

const re2 = /\w+\s/g; // 한 개 이상의 글자와 그 뒤의 공백 하나를 문자열 전체에 대해 탐색하는 정규표현식
const str = "fee fi fo fum"; // 대상 문자열
const myArray5 = str.match(re2); // 문자열에 대해 모든 일치를 담은 배열을 반환
console.log(myArray5); // 출력

const re3 = new RegExp("\\w+\\s", "g"); // 위의 정규표현식 정의와 동일
                                        // 문자열 계층의 이스케이프까지 총 두 번의 이스케이프

console.log(re3.lastIndex) // * 추가 코드: lastIndex 속성의 초기값 확인
console.log(re3.exec(str)); // 0부터 탐색 결과 출력, lastIndex 업데이트
console.log(re3.lastIndex) // * 추가 코드: lastIndex 속성의 변경 내용 확인
console.log(re3.exec(str)); // 4부터 탐색 결과 출력, lastIndex 업데이트
console.log(re3.exec(str)); //7부터 탐색 결과 출력, lastIndex 업데이트
console.log(re3.exec(str)); // 10부터 탐색 결과 출력, lastIndex 업데이트

console.log(str.match(re3)); // match 메서드는 모든 일치를 한 번에 반환하지만 인덱스는 미포함

const form = document.querySelector("#form"); // #form 셀렉터에 맞는 HTML 요소를 반환
const input = document.querySelector("#phone"); // #phone 셀렉터에 맞는 HTML 요소를 반환
const output = document.querySelector("#output"); // #output 셀렉터에 맞는 HTML 요소를 반환
const re4 = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{4}\1\d{4}$/; // 3자리-4자리-4자리로 이루어졌고
                                                          // 마침표, 대시, 또는 슬래시로 나누어진
                                                          // 전화번호를 찾기 위한 정규표현식
function testInfo(phoneInput) { // 입력받은 텍스트가 유효한지 판단하는 함수 정의
    const ok = re4.exec(phoneInput.value); // 입력값에 정규표현식 적용
    if (!ok) { // 값이 없다면
        output.textContent = `형식에 맞지 않는 전화번호입니다. (${phoneInput.value})`;
        // 형식에 맞지 않는 전화번호임을 안내
    } else { // 있다면
        output.textContent = `감사합니다. 전화번호는 ${ok[0]}입니다.`;
        // 확인 메시지 출력
    }
}
form.addEventListener("submit", (event) => { // 확인 버튼을 누르는 이벤트 발생 시
    event.preventDefault(); // 브라우저의 기본 행동(페이지 리로드)을 막기
    testInfo(input); // 입력값을 유효한지 판단하는 함수 돌림
});