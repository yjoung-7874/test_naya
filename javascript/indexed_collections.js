const arr1 = new Array(0, 1, 2, 3); // Array 생성자로 배열 생성
const arr2 = Array(0, 1, 2, 3); // Array 함수로 배열 생성
const arr3 = [0, 1, 2, 3]; // 배열 리터럴로 배열 생성

const arr4 = new Array(1); // arrayLength를 지정하여 길이가 1이고 빈 배열 생성
console.log(arr4); // * 추가 코드: 확인: (1) [...]
const arr5 = Array(0); // 길이가 0이고 값이 없는 배열 생성
const arr6 = []; // 값이 없는 배열 생성
console.log(arr6) // * 추가 코드: 길이도 값도 없음을 확인: (0) []
arr6.length = 2; // 길이를 2로 설정
console.log(arr6); // * 추가 코드: 확인: (2) [...]

const obj = {}; // 빈 객체 생성
obj.prop = [0, 1, 2, 3]; // 객체의 속성에 배열 할당
const obj1 = { prop: [0, 1, 2, 3]}; // 또 다른 방법

const arr7 = [42]; // 42라는 요소 하나만 가지는 배열 생성
const arr8 = Array(42); // 길이가 42인 빈 배열 생성
const arr9 = []; // 빈 배열을 생성하고
arr9.length = 42; // 길이를 42로 설정

// const arr10 = Array(9.3); // arrayLength가 정수가 아니라서 에러 발생

const wisenArray = Array.of(9.3); // 정적메서드를 활용해 소수 요소를 가지는 배열 생성

const myArray = ["Wind", "Rain", "Fire"]; // 배열 생성, 요소는 대괄호로 접근 가능

const arr11 = ["one", "two", "three"]; // 배열 생성
arr11[2]; // 속성 접근자로 배열의 요소를 접근 가능
arr11["length"]; // 속성 접근자로 배열의 속성을 접근 가능

const emp = []; // 빈 배열 생성
emp[0] = "Casey Jones"; // 배열에 요소를
emp[1] = "Phil Lesh"; // 할당함으로써
emp[2] = "August West" // 배열을 채우기

const arr12 = []; // 빈 배열 생성
arr12[3.4] = "Oranges"; // 배열 객체 3.4 속성에 Oranges 값 할당
console.log(arr12.length); // 길이 확인: 0
console.log(Object.hasOwn(arr12, 3.4)); // 3.4 속성이 있는지 확인: 참
arr12.prop = "Melons" // * 추가 코드: 새로운 속성 추가
console.log(arr12); // * 추가 코드: 배열 출력: 길이 0, Oranges 있음, prop 속성 있음

let myVar = [1, 2, 3] // * 추가 코드: 배열을 변수에 할당
const myArray1 = new Array("Hello", myVar, 3.14159); // 새 배열 생성하며 배열 채움
const myArray2= ["Mango", "Apple", "Orange"]; // 배열 생성하며 배열 채움

const cats = []; // 빈 배열 생성
cats[3] = ["Dusty"]; // 3번째 요소에 배열을 중첩으로 할당
console.log(cats.length); // 길이 출력: 4
console.log(cats); // * 추가 코드: 배열 자체를 확인: 앞은 비어있고
                   // 마지막 요소만 하나의 요소를 갖는 배열

const cats1 = ["Dusty", "Misty", "Twiggy"]; // 새로운 배열 생성
console.log(cats1.length); // 길이 출력: 3
cats1.length = 2; // 길이를 2로 설정
console.log(cats1); // 배열 출력: 2번째 요소 삭제
cats1.length = 0; // 길이를 0으로 설정
console.log(cats1); // 배열 출력: 모든 요소 삭제
cats1.length = 3; // 길이를 다시 3으로 설정
console.log(cats1); // 배열 출력: 요소는 돌아오지 않음

const colors = ["red", "green", "blue"]; // 배열 생성
for (let i = 0; i < colors.length; i++) { // 0번째부터 마지막까지 반복
    console.log(colors[i]); // 각 요소를 출력
}

/* const divs = document.getElementsByTagName("div"); // div태그로 객체의 집합을 가져옴
for (let i = 0, div; (div = divs[i]); i++) { // div가 divs의 i번째 요소와 같아질 때까지
    // div에 대한 처리(div 변수가 현재 항목에 재할당)
} */ // 올바른 코드지만 document가 없으므로 작동하지 않음

colors.forEach((color) => console.log(color)); // color의 각 요소에 출력 함수 적용: 순서대로 출력

const sparseArray = ["first", "second", , "fourth"]; // 2번째 요소가 생략된 배열
                                                     // -> undefined로 할당
sparseArray.forEach((element) => { // forEach 메서드로 각 요소별로 반복
    console.log(element); // 출력: 2번째 요소 스킵하고 출력
});
if (sparseArray[2] === undefined) { // 2번째 요소가 없는 건지 undefined인 건지 확인
    console.log("sparseArray[2] is undefined"); // undefined라고 출력
    console.log(`sparseArray[2] is ${sparseArray[2]}`); // * 추가 코드: 내부적으로 뭘로 판단되는지
                                                        // 직접 출력: undefined라고 출력
}
for (let i = 0; i < sparseArray.length; i++) { // * 추가 코드: 각 요소별로 반복
    console.log(sparseArray[i]); // * 추가 코드: 출력: undefined 포함해서 출력
}
const nonsparseArray = ["first", "second", undefined, "fourth"]; // 직접적으로 undefined를 할당
                                                                 // 구조적으론 sparseArray와 동일
nonsparseArray.forEach((element) => { // forEach 메서드로 각 요소별로 반복
    console.log(element); // 출력: undefined까지 포함해서 출력
});
for (let i in sparseArray) { // sparseArray 배열의 각 요소 이름으로 반복
    console.log(i); // 출력: 2번 인덱스를 빼고 출력
}
for (let i in nonsparseArray) { // 그렇다면 nonsparseArray는?
    console.log(i); // undefined를 수동으로 할당했기 때문에 2까지 포함해 출력
}
for (let i of sparseArray) { // for of 구문으로 각 요소의 값을 출력
    console.log(i); // undefined 포함해 출력
}

let myArray3 = ["1", "2", "3"]; // 배열
myArray3 = myArray3.concat("a", "b", "c"); // a, b, c를 추가한 배열 반환

const myArray4 = ["Wind", "Rain", "Fire"]; // 배열
const list = myArray4.join(" - "); // 각 요소를 - 으로 이어붙인 문자열 반환

const myArray5 = ["1", "2"]; // 배열
let len = myArray5.push("3"); // 배열의 마지막에 추가하고 3(새로운 길이)을 반환

const myArray6 = ["1", "2", "3"]; // 배열
const last = myArray6.pop(); // 배열의 마지막 요소를 제거하고 반환

const myArray7 = ["1", "2", "3"]; // 배열
const first = myArray7.shift(); // 배열의 첫 번째 요소를 제거하고 반환

const myArray8 = ["1", "2", "3"]; // 배열
let len1 = myArray8.unshift("4", "5"); // 배열의 맨 앞에 추가하고 5 반환

let myArray9 = ["a", "b", "c", "d", "e"]; // 배열
myArray9 = myArray9.slice(1, 4); // 배열의 1번째부터 4번째 전까지의 요소 자른 배열 반환

const myArray10 = ["a", "b", "c", "d", "e"]; // 배열
myArray10.at(-2); // 지정된 인덱스의 요소 반환(뒤에서 두번째)

const myArray11 = ["1", "2", "3", "4", "5"]; // 배열
myArray11.splice(1, 3, "a", "b", "c", "d"); // 1번째부터 3개의 요소 삭제하고 뒤의 요소 삽입

const myArray12 = ["1", "2", "3"]; // 배열
myArray12.reverse(); // 순서 반전

let myArray13 = [1, 2, [3, 4, [5]]]; // * 코드 변경: 삼중 배열
myArray13 = myArray13.flat(); // 기본 깊이인 1만큼 기준으로 평면화
console.log(myArray13); // * 추가 코드: 배열 확인: 깊이 1만큼 했으므로 이중 배열이 출력

const myArray14 = ["Wind","Rain", "Fire"]; // 배열
myArray14.sort(); // 배열 내에서 정렬하고 그 배열 자체를 변경

const myArray15 = ["Wind","Rain", "Fire"]; // 배열
const sortFn = (a, b) => { // a, b를 배열하는 함수 정의
    if (a[a.length - 1] < b[b.length - 1]) { // 마지막 값 비교, 오른쪽이 더 크다면
        return -1; // -1 반환
    } else if (a[a.length - 1] > b[b.length - 1]) { // 왼쪽이 더 크다면
        return 1; // 1 반환
    }
    return 0; // 같다면 0 반환
};
myArray15.sort(sortFn); // 이런 기준으로 정렬

const a = ["a", "b", "a", "b", "a"]; // 배열
console.log(a.indexOf("b")); // 첫 번째 b가 있는 인덱스 1 반환
console.log(a.indexOf("b", 2)); // 2번째부터 탐색 시 b가 있는 인덱스 3 반환
console.log(a.indexOf("z")); // z가 없으므로 -1 반환

const a1 = ["a", "b", "c", "d", "a", "b"]; // 배열
console.log(a1.lastIndexOf("b")); // 뒤에서부터 첫 번째 b가 있는 인덱스 5 반환
console.log(a1.lastIndexOf("b", 4)); // 4번째부터 탐색 시 b가 있는 인덱스 1 반환
console.log(a1.lastIndexOf("z")); // z가 없으므로 -1 반환

const a2 = ["a", "b", "c"]; // 배열
a2.forEach((element) => { // 각 요소에 대해 적용하는 화살표 함수
    console.log(element); // 출력
});

const a3 = ["a", "b", "c"]; // 배열
const a4 = a3.map((item) => item.toUpperCase()); // 대문자로 바꾸는 콜백함수 적용
console.log(a4); // 출력

const a5 = ["a", "b", "c"]; // 배열
const a6 = a5.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
// map을 하며 깊이1의 flat 실행(대문자로 바꾼 것과 소문자로 바꾼 것 두 배열을 가진 배열)
// 을 하나의 일차원 배열로
console.log(a6); // 출력

const a7 = ["a", 10, "b", 20, "c", 30]; // 배열
const a8 = a7.filter((item) => typeof item === "number"); // 요소의 자료형이 number인 것을
                                                          // 골라 다른 배열에 저장
console.log(a8); // 출력

const a9 = ["a", 10, "b", 20, "c", 30]; // 배열
const i = a9.find((item) => typeof item === "number"); // 요소의 자료형이 number인 것을 찾아
                                                       // 그 첫 번째 요소를 i에 저장
console.log(i); // 출력

const a10 = ["a", 10, "b", 20, "c", 30]; // 배열
const i1 = a10.findLast((item) => typeof item === "number"); // 요소의 자료형이 number인 것을 찾아
                                                             // 그 마지막 요소를 i1에 저장
console.log(i1); // 출력

const a11 = ["a", 10, "b", 20, "c", 30]; // 배열
const i2 = a11.findIndex((item) => typeof item === "number"); // 요소의 자료형이 number인 것을 찾아
                                                              // 그 첫 번째 인덱스를 i2에 저장
console.log(i2); // 출력

const a12 = ["a", 10, "b", 20, "c", 30]; // 배열
const i3 = a12.findLastIndex((item) => typeof item === "number"); // 요소의 자료형이 number인 것을 찾아
                                                                  // 그 마지막 인덱스를 i3에 저장
console.log(i3); // 출력

function isNumber(value) { // 함수 정의
    return typeof value === "number"; // 인수의 자료형이 number인지 평가하여 불리언 값 반환
}
const a13 = [1, 2, 3]; // 배열
console.log(a13.every(isNumber)); // 테스트: 참
const a14 = [1, "2", 3]; // 배열
console.log(a14.every(isNumber)); // 테스트: 문자열이 섞여 있으므로 거짓

const a15 = ["1", "2", "3"]; // 배열
console.log(a13.some(isNumber)); // 테스트: 하나라도 number이므로 참
console.log(a14.some(isNumber)); // 테스트: 하나라도 number이므로 참
console.log(a15.some(isNumber)); // 테스트: 그 무엇도 number가 아니므로 거짓

const a16 = [10, 20, 30]; // 배열
const total = a16.reduce( // reduce 메서드 적용
    (accumulator, currentValue) => accumulator + // accumulator에 하나씩 더하기 
    currentValue, // 배열의 현재 값을
    0, // initialValue는 0
);
console.log(total); // 출력 : 60

const a17 = Array(5); // 5개의 빈 슬롯을 가진 배열: 배열 생성자로 만들기
const b = [1, 2, , , 5]; // 2개의 빈 슬롯을 가진 배열: 연속 쉼표를 가진 배열 리터럴로 만들기
const c = [1, 2]; // 배열
c[4] = 5; // 길이보다 큰 값에 값 설정하여 그 앞에 빈 슬롯 만들기
const d = [1, 2]; // 배열
d.length = 5; // 길이를 늘려서 뒤에 빈 슬롯 만들기
const e = [1, 2, 3, 4, 5]; // 배열
delete e[2]; // 요소를 삭제하여 빈 슬롯 만들기

const arr13 = [1, 2, , , 5]; // 빈 슬롯이 있는 배열
console.log(arr13[2]); // 인덱스로 접근: undefined
for (const i of arr13) { // 요소별로 접근
    console.log(i); // 출력: 1, 2, undefined, 5 (여러 개의 빈 슬롯이 하나로 처리)
}
const another = [...arr13]; // 나머지 매개변수로 전개연산하여 배열에 할당
console.log(another) // * 추가코드: 테스트. 각 슬롯을 계산함: [1, 2, undefined, undefined, 5]

const mapped = arr13.map((i) => i + 1); // map 메서드를 적용하여 1씩 더한 배열
console.log(mapped); // * 추가 코드: 출력. 빈 항목은 스킵: [2, 3, ..., 6]
arr13.forEach((i) => console.log(i)); // 각각에 대해 출력: 빈 항목은 스킵: 1, 2, 5
const filtered = arr13.filter(() => true); // 값이 있는 것만 남긴 배열
console.log(filtered); // * 추가 코드: 출력. 빈 항목은 사라짐: [1, 2, 5]
const hasFalsy = arr13.some((k) => !k); // false가 하나라도 있으면 참
console.log(hasFalsy); // * 추가 코드: 출력. 빈 항목은 아예 무시됨: 거짓
const keys = Object.keys(arr13); // 키만 모으기
console.log(keys); // * 추가 코드: 출력. 값이 있는 인덱스만 반환: ['0', '1', '4']
for (const key in arr13) { // 배열의 키(인덱스)에 대해서
    console.log(key); // 출력: 마찬가지로 값이 있는 인덱스만 반환
}
const objectSpread = { ...arr13 }; // 전개 연산으로 속성 열거
console.log(objectSpread); // * 추가 코드: 역시 값이 있는 속성만 출력

const a18 = new Array(4); // 길이 4인 빈 배열 생성
for (let i = 0; i < 4; i++) { // 배열의 각 인덱스마다
    a18[i] = new Array(4); // 각 요소는 새로운 길이 4의 배열
    for (let j = 0; j < 4; j++) { // 새 배열의 각 인덱스마다
        a18[i][j] = `[${i}, ${j}]`; // 각 요소는 [i, j]
    }
}

const arr14 = [1, 2, 3]; // 배열
arr14.property = "value"; // 배열에 객체로서 속성 추가
console.log(arr14.property); // 출력

/* function printArguments() { // 함수 정의
    arguments.forEach((item) => { // arguments의 각 항목에 대해서
        console.log(item); // 출력
    });
} // 에러 발생: arguments는 배열이 아니므로 forEach 메서드를 사용할 수 없음
*/

function printArguments() { // 함수 정의
    Array.prototype.forEach.call(arguments, (item) => { // Function.prototype.call()을 이용하여
                                                        // arguments의 각 항목에 대해서
        console.log(item); // 출력
    });
}

Array.prototype.forEach.call("a string", (chr) => { // 문자열에도 배열의 메서드를 적용
    console.log(chr); // 문자열에 대해 하나씩 출력
})