let obj = {}; // 빈 배열 생성
obj.x = 3; // 배열의 x 요소를 dot notation으로 3 저장
console.log(obj.x); // 배열의 x 요소 출력: 3
console.log(obj); // 배열 출력: {x: 3}
const key = "y"; // 변수 key 설정
obj[key] = 5; // 배열의 key(=y) 요소를 bracket notation으로 5 저장
console.log(obj[key]); // 배열의 key 요소 출력: 5
console.log(obj.key); // * 직접 추가한 코드: dot 표현으로는 key 변수를 사용하여 접근 불가: undefined
console.log(obj.y); // * 직접 추가한 코드: dot 표현으로도 변수의 값(정적 key)를 활용하면 접근 가능: 5
console.log(obj); // 배열 출력: {x: 3, y: 5}
const key1 = "x"; // * 직접 추가한 코드: 변수 선언
obj["x"] = 7; // * 직접 추가한 코드: bracket 표현을 사용해 정적 key로 7 저장
console.log(obj[key1]); // * 직접 추가한 코드: 정적 키로 선언한 뒤 내용이 같은 변수로 접근 가능

let val = 0; // 변수 선언
console.log((val.x = 3)); // 
                          // * 왜 이 코드로 x 속성에 3을 저장하는 게 아닌 걸까??
console.log(val.x); // 객체의 x 속성을 출력 시도: undefined
console.log(val); // val은 그대로 0 출력

var foo = ["one", "two", "three"]; // 배열 생성
var one = foo[0]; // 변수에 배열의 값을 하나씩 할당
var two = foo[1]; // 변수에 배열의 값을 하나씩 할당
var three = foo[2]; // 변수에 배열의 값을 하나씩 할당
var [one1, two1, three2] = foo; // 구조 분해로 변수에 배열의 값을 한 번에 할당

function f(a) { // * 직접 추가한 코드: 에러가 나지 않기 위한 함수 정의
    console.log(a)
    return 1; // * 추가 코드: 1 반환
}
function g() { // * 추가 코드: 함수 정의
    return 0; // * 추가 코드: 0 반환
}
let x = f(1); // 변수 x를 선언해 f()의 결과로 초기화
x = g(); // 변수 x를 g()의 결과로 재할당

let x1; // 변수 선언
const y = (x1 = f(2)); // x1을 f(2) 값으로 업데이트하며 y에 저장: 2
console.log(y); // y 출력: 1
console.log((x1 = f(3))); // x1을 f(3) 값으로 업데이트하며 출력: 3, 1
console.log([0, (x1 = f(4)), 0]); // x1을 f(4) 값으로 업데이트하며 배열을 출력: 4, (3) [0, 1, 0]
console.log(f(0, (x1 = f(5)), 0)); // x1을 f(5) 값으로 업데이트하며 f에 0, 1, 0의 세 개의 인수를
                                   // 넘겨 주어 첫 번째 인수만 받아들여지고 이 결과값이 출력: 5, 0, 1

function f1() { // 함수 정의
    console.log("F!"); // 출력
    return 2; // 반환
}
function g1() { // 함수 정의
    console.log("G!"); // 출력
    return 3; // 반환
}
let x2, y1; // 변수 두 개 선언
let x3 = {};
y1 = x2 = f1(); // 함수의 결과를 F! 출력 후 2를 x2에 저장하고 y1에 저장: F!
y1 = [f1(), (x2 = g1())]; // f1의 결과를 F! 출력 후 2가 배열의 0번째 요소가 되고
                          // g1의 결과를 G! 출력 후 3을 x2에 저장하고 배열은 [2, 3]이 됨: F!, G!
x3[f1()] = g1(); // f1의 결과를 F! 출력 후 2가 동적 key로 x3의 속성이 되고
                 // g1의 결과를 G! 출력 후 3이 x3[2]에 저장: F!, G!

const var1 = 3; // 변수 선언 및 초기화
const var2 = 4; // 변수 선언 및 초기화

3 == var1; // 동등 연산자: 참
"3" == var1; // 동등 연산자: 자료형은 다르지만 자료형 변환이 일어나서 참
3 == '3'; // 동등 연산자: 자료형은 다르지만 자료형 변환이 일어나서 참
var1 != 4; // 부등 연산자: 참
var2 != "3"; // 부등 연산자: 참
3 === var1; // 일치 연산자: 자료형까지 같으므로 참
var1 !== "3"; // 불일치 연산자: 값은 같지만 자료형이 다르므로 참
3 !== '3'; // 불일치 연산자: 값은 같지만 자료형이 다르므로 참
var2 > var1; // 큼 연산자: 참
"12" > 2; // 큼 연산자: 자료형은 다르지만 자료형 변환이 일어나서 참
var2 >= var1; // 크거나 같음 연산자: 참
var1 >= 3; // 크거나 같음 연산자: 같으므로 참
var1 < var2; // 작음 연산자: 참
"2" < 12; // 작음 연산자: 자료형은 다르지만 자료형 변환이 일어나서 참
var1 <= var2; // 작거나 같음 연산자: 참
var2 <= 5; // 작거나 같음 연산자: 참
console.log("3"<"4"); // * 추가한 코드: 문자열끼리도 비교가 되는지 검사
                      // 이러한 경우는 number로 자료형 변환이 일어나는 
                      // 게 아니라 아스키코드 값으로 비교하는지?

1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // 참

var a1 = true && true; // 참
var a2 = true && false; // 거짓
var a3 = false && true; // 거짓
var a4 = false && 3 == 4; // 거짓
var a5 = "Cat" && "Dog"; // Dog
var a6 = false && "Cat"; // 거짓
var a7 = "Cat" && false; // 거짓

var o1 = true || true; // 참
var o2 = false || true; // 참
var o3 = true || false; // 참
var o4 = false || 3 == 4; // 거짓
var o5 = "Cat" || "Dog"; // Cat
var o6 = false || "Cat"; // Cat
var o7 = "Cat" || false; // Cat

var n1 = !true; // 거짓
var n2 = !false; // 참
var n3 = !"Cat"; // 거짓

console.log("나만의 " + "문자열"); // 나만의 문자열

var mystring = "한"; // 문자열 선언
mystring += "글"; // 문자열 이어붙이기: 한글

let age = 19; // * 추가: age 선언
var status = age >= 18 ? "성인" : "미성년자"; // 삼항연산자로 성인 또는  미성년자 할당

var x4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // 배열 선언
var a8 = [x4, x4, x4, x4, x4]; // 2차원 배열 선언
for (var i = 0, j = 9; i <= j; i++, j--){ // i는 0번째부터 늘어나고, j는 9부터 줄어들며
                                          // i가 j보다 커지지 않는 한에서 반복
    console.log("a8[" + i + "][" + j + "]= " + a8[i][j]); // i행 j열의 값을 출력
}
let object1 = [0, 1, 2, 3, 4]; // * 추가 코드: 배열 선언
let propertyKey = 'key'; // * 추가 코드: key 변수 설정
object1.property = 1; // * 추가 코드: 속성 추가
object1['key'] = 2; // * 추가 코드: 속성 추가
console.log(object1); // * 추가 코드: 상태 출력
delete object1.property; // 속성 삭제: dot notation
delete object1[propertyKey]; // 속성 삭제: bracket notation
let b = delete object1[2]; // 배열 요소 삭제
console.log(object1); // * 추가 코드: 상태 출력
console.log(b); // * 추가 코드: delete 연산자의 반환값 확인

console.log(delete Math.PI); // 설정 불가한 속성이라 거짓 반환
const myObj = { h: 4 }; // 객체 설정
console.log(delete myObj.h); // 사용자 정의 속성이라 참 반환

var myFun = new Function("5 + 2"); // 함수 정의
var shape = "round"; // 변수 정의
var size = 1; // 변수 정의
var foo1 = ["Apple", "Mango", "Orange"]; // 배열 정의
var today = new Date(); // 객체 정의
typeof myFun; // function 반환
typeof shape; // string 반환
typeof size; // number 반환
typeof foo1; // object 반환
typeof today; // object 반환
typeof dontExist; // undefined 반환

typeof true; // boolean 반환
typeof null; // object 반환

typeof 62; // number 반환
typeof "Hello world"; // string 반환

// typeof document.lastModified; // string 반환, document가 정의되지 않아 오류
// typeof window.length; // number 반환, 브라우저 환경이 아니라서 오류 발생
typeof Math.LN2; // number 반환

typeof blur; // function 반환
typeof eval; // function 반환
typeof parseInt; // function 반환
typeof shape.split; // function 반환

typeof Date; // function 반환
typeof Function; // function 반환
typeof Math; // object 반환
typeof Option; // 생성자이므로 function 반환
typeof String; // 생성자이므로 function 반환

var trees = ["redwood", "bay", "cedar", "oak", "maple"]; // 배열 선언
0 in trees; // 인덱스 존재: 참
3 in trees; // 인덱스 존재: 참
6 in trees; // 인덱스 부재: 거짓
"bay" in trees; // 인덱스가 아님: 거짓
"length" in trees; // 속성 존재: 참
"PI" in Math; // 내장 객체에 속성 존재: 참
var myString = new String("coral"); // 문자열 정의
"length" in myString; // 속성 존재: 참
var mycar = { make: "Honda", nodel: "Accord", year: 1998}; // 객체 정의
"make" in mycar; // 속성 존재: 참
"model" in mycar; // 속성 존재: 참

var theDay = new Date(1995, 12, 17); // Date 객체 생성
if (theDay instanceof Date) { // theDay가 Date 객체라면
    console.log("the object is a Date object"); // * 추가 코드: 출력
}

function validate(obj, lowval, hival) { // 값의 유효성을 검증하는 함수
    if (obj.value < lowval || obj.value > hival) // 객체의 값이 최저값보다 낮거나
                                                 // 최고값보다 높으면
        console.log("잘못된 값!"); // 잘못된 값! 출력
}

var a9 = 1; // 변수에 1 할당
var b1 = 2; // 변수에 2 할당
var c = 3; // 변수에 3 할당
a9 + b * c; // 더하기보다 곱하기가 우선
a9 + (b * c); // 이것과 같음
(a9 + b) * c; // 괄호로 묶으면 더하기가 우선
a9 * c + b * c; // 이것과 같음

var objectName = new Date([2005, 10, 6]); //  new 연산자로 Date 객체 만들기