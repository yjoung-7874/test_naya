let i = 0 // * 원 코드에 없어서 추가, i 초기화
do {  // 일단 적어도 한 번 실행
    i += 1;  // i값 증가
    console.log(i);  // i값 출력
} while (i < 5);  // i가 5 미만인지 확인, 1부터 5까지 출력

n = 0;  // n 초기화
x = 0;  // x 초기화
while (n < 3) {  // n이 3 미만인지 확인
    n++;  // n 증가
    x += n;  // x에 n 더하기
} // x는 0, 1, 3, 6

/* while (true){ // 항상
    console.log("Hello, world"); // 문자열 출력
}
*/ // 지양해야 할 코드(무한루프)

/* markLoop: while (theMark == true) { // markLoop라는 이름으로 식별
                                       // theMark가 참인 동안
    doSomething(); // 함수 실행
}
*/ // 지양해야 할 코드(무한루프)

let a = [1,2,3]; // 원래 코드에 없어서 작동을 위해 추가, 배열 선언
for (i = 0; i < a.length; i++) { // i가 a의 0번째부터 마지막 요소까지 트래킹
    if (a[i] == 2) { // a의 i번째 요소가 2라면
        break; // 반복문 탈출
    }
}

var x = 0; // 변수 선언 및 초기화
var z = 0; // 변수 선언 및 초기화
labelCancelLoops: while (true) { // 바깥 반복문을 labelCancelLoops로 지칭
    console.log("Outer loops: " + x); // 바깥 루프의 회차를 출력(0부터)
    x += 1; // x 업데이트
    z = 1; // z(안쪽 루프의 인덱스) 초기화
    while (true) { // 안쪾 반복문. 항상
        console.log("Inner loops: " + z); // 안쪽 루프의 회차를 출력(1부터) 
        z += 1; // z 업데이트
        if (z === 10 && x === 10) { // 안쪽 루프와 바깥쪽 루프 둘 다 10회일 때
            break labelCancelLoops; // 바깥 루프 자체를 탈출
        } else if (z === 10) { // 안쪽 루프만 10회일 때
            break; // 안쪽 루프만 탈출
        }
    } // * (아마도) 레이블 없이 한다면 안쪽 반복문 다음에
}     // if (x === 10) break;을 넣으면 똑같이 작동하지 않을까. 

i = 0; // i 초기화
n = 0; // n 초기화
while (i < 5) { // i가 5 미만인 동안
    i++; // i를 하나 늘리고
    if (i == 3) { // i가 3이라면
        continue; // n을 늘리지 않고 반복문 처음으로
    }
    n += i; // n에 i 더하기
} // n의 값은 1, 3, 7, 12

i = 0; // 원래 코드에 없어서 추가: 변수 초기화
j = 7; // 원래 코드에 없어서 추가: 변수 초기화
checkiandj: while (i < 4) { // 바깥 루프를 checkiandj로 호칭, i가 4 미만일 때
    console.log(i); // i 출력
    i += 1; // i 하나 증가
    checkj: while (j > 4) { // 안쪽 루프를 checkj로 호칭, j가 4 초과일 때
        console.log(j); // j 출력
        j -= 1; // j 하나 감소
        if (j % 2 == 0) { // j가 짝수일 때
            continue checkj; // 홀수라는 말을 출력하지 않기
        }
        console.log(j + " is odd."); // 홀수라고 출력
    } // 이하는 j가 4가 되었을 때
    console.log("i = " + i); // i값 출력
    console.log("j = " + j); // j값 출력
}

function dump_props(obj, obj_name) { // 객체와 객체의 이름 문자열을 파라미터로 받는 함수 정의
    var result = ""; // 결과 저장할 빈 문자열
    for (var i in obj) { // 객체의 키를 순서대로 트래킹
        result += obj_name + "." + i + " = " + obj.i + "<br>";
    } // 결과 문자열에 '객체 이름.속성 = 내용' 문자열을 줄 바꿈 태그로 구분해서 추가
    result += "<hr>"; // 한 객체가 끝나면 문단 수준 줄 바꿈
    return result; // 결과 반환
}
let car = {make: "Ford", model: "Mustang"}; //* 테스트를 위해 넣은 코드, 자동차 객체 생성
console.log(dump_props(car,'car')); //* 테스트를 위해 넣은 코드, 자동차 객체에 대해 함수 결과값 출력

let arr = [3, 5, 7]; // 배열 arr 선언
arr.foo = "hello"; // arr의 foo 속성 초기화
for (let i in arr) { // arr의 변수들로 반복
    console.log(i); // 출력: 0, 1, 2, foo
}
for (let i of arr) { // arr의 결과값들로 반복
    console.log(i); // 출력: 3, 5, 7
}