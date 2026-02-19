function square(number) { // 함수 정의
    return number * number; // 인수의 값 제곱을 반환
}

function myFunc(theObject) { // 함수 정의
    theObject.make = "Toyota"; // 인수로 받은 객체의 make 속성을 Toyota로 변경
}
const mycar = { // 3가지 속성을 가진 객체 mycar 선언
    make: "Honda",
    model: "Accord",
    year: 1998,
};
const x = mycar.make; // make값인 Honda를 x에 저장
myFunc(mycar); // 함수를 적용시켜 mycar의 make 속성을 변경
const y = mycar.make; // 변경된 make값인 Toyota를 y에 저장

function myFunc1(theArr) { // 함수 정의
    theArr[0] = 30; // 인수로 받은 배열의 0번째 값을 30으로 바꿈
}
const arr = [45]; // 배열 선언
console.log(arr[0]); // 출력
myFunc1(arr); // 값 변경
console.log(arr[0]); // 출력

const square1 = function (number) { // 함수표현식으로 익명함수 정의
    return number * number; // 인수로 받은 수의 제곱 반환
};
const x1 = square1(4); // x1에 4의 제곱을 저장

const factorial = function fac(n) { // 함수표현식으로 이름 fac을 갖는 함수 정의
    return n < 2 ? 1 : n * fac(n-1); // n이 2보다 작으면 1을, 2 이상이면 재귀적으로
                                     // 호출해 1부터 n까지 곱한 값을 반환
};
console.log(factorial(3)); // 3팩토리얼을 출력

function map(fn, arr) { // 함수와 배열을 파라미터로 받는 함수 정의
    const result = new Array(arr.length); // 결과는 입력받은 배열과 길이가 같은 새 배열에 저장
    for (let i = 0; i < arr.length; i++) { // 배열의 0번째부터 마지막 요소까지 반복
        result[i] = fn(arr[i]); // 결과에 순서대로 배열의 각 요소에 fn을 적용한 결과를 저장
    }
    return result; // 결과 반환
}
const fn = function (x) { // 테스트용으로 함수 정의
    return x * x * x; // 세제곱 반환
};
const numbers = [0, 1, 2, 5, 10]; // 배열 정의
const cube = map(fn, numbers); // 세제곱 함수와 이 배열을 map 함수에 넣어 cube 변수에 저장
console.log(cube); // 츨력

let myFunc2; // * 함수 선언: 밑에서 정의할 건데 왜 선언해야 하는지?
let num = 1;
if (num === 0) { // num이 0일 때만
    myFunc2 = function (theObject) { // 함수표현식으로 함수 정의
        theObject.make = "Toyota"; // 인수로 받은 객체의 make 속성을 Toyota로 변경
    };
}

/* console.log(square2); // square2 출력; 초기값으로 undefined로 호이스팅됨
                         // * undefined가 출력될 것 같은데 에러 발생??
console.log(square2(5)); // square2는 아직 함수가 아니므로 에러
square2 = function (n) { // square2 정의
    return n * n; // 제곱 반환
};*/ // square2가 정의되지 않았다는 에러 발생

function factorial1(n) { // 함수 정의
    if (n == 0 || n == 1) return 1; // 0과 1의 팩토리얼은 1이므로 1 반환
    else return n * factorial(n-1); // 재귀적으로 호출하여 팩토리얼 반환
}
const a = factorial(6); // 테스트: 6팩토리얼

console.log(square3(5)); // 함수를 정의하기 전에 사용
function square3(n) { // 함수 정의
    return n * n; // 제곱 반환
} // 호이스팅으로 인해 오류 없이 실행: 전체 함수 선언을 스코프 최상단으로 끌어올림

const num1 = 20; // num1 초기화
const num2 = 3; // num2 초기화
const name = "Chamakh"; // name 초기화
function multiply() { // 함수 정의
    return num1 * num2; // 인수가 아닌 두 전역변수의 곱 반환
}
multiply(); // 함수 호출
function getScore() { // 함수 정의
    const num1 = 2; // 지역변수 정의
    const num2 = 3; // 지역변수 정의
    function add() { // 함수 내부의 함수 정의
        return `${name} scored ${num1 + num2}`; // 문자열 포매팅으로 상위 함수 내에서 정의된 변수 간의 연산을 출력
    }                                           // * 왜 name은 취소선이 그어졌는지??
    return add(); // 내부 함수의 값을 반환
}
console.log(getScore()); // 함수 호출 및 출력

var x2 = 0; // 변수 정의
while (x2 < 10) { // x2가 10 미만인 동안
    x2++; // x2 증가
} // 아래 코드와 같은 내용

function loop(x) { // 함수 정의
    if (x >= 10) // 인수 x가 10에 도달하면
        return; // 함수 종료
    loop(x + 1); // 값을 하나 늘려 재귀적으로 호출한 자기 자신의 인수로 넘김
}
loop(0); // 0으로 시작

function walkTree(node) { // 트리 노드 가져오기 위한 함수 정의
    if (node == null) { // 노드가 없다면
        return; // 함수 끝
    }
    for (var i = 0; i < node.childNodes.length; i++) { // 해당 노드의 자식 노드 0번째부터 마지막까지
        walkTree(node.childNodes[i]); // 각 자식노드에 대해 재귀적 호출
    }
}

function foo1(i) { // 함수 정의
    if (i < 0) { // i가 음수가 되었다면
        return; // 함수 끝
    }
    console.log(`begin: ${i}`); // 재귀함수 호출 전 i 출력
    foo1(i - 1); // i보다 1만큼 작은 값으로 재귀함수 호출
    console.log(`end: ${i}`); // 재귀함수 호출 후 i 출력
}
foo1(3); // 3으로 테스트. 출력 결과: b3 b2 b1 b0 e0 e1 e2 e3

function addSquares(a, b) { // 함수 정의
    function square4(x) { // 내부 함수 정의
        return x * x; // 제곱 반환
    }
    return square4(a) + square4(b); // 인수 a와 b를 각각 square4에 넣은 값의 합을 반환
}
a1 = addSquares(2, 3); // 테스트(13)
b1 = addSquares(3, 4); // 테스트(25)
c1 = addSquares(4, 5); // 테스트(41)

function outside(x) { // 함수 정의
    function inside(y) { // 내부함수 정의
        return x + y; // 외부함수의 인수 x와 내부함수의 인수 y의 합 반환
    }
    return inside; // 외부함수는 내부함수를 반환
}
fn_inside = outside(3); // x가 3인 내부함수 격
result1 = fn_inside(5); // 8
result2 = outside(3)(5); // 8

function A(x) { // 함수 정의
    function B(y) { // 1차 내부함수 정의
        function C(z) { // 2차 내부함수 정의
            console.log(x + y + z); // 외부함수의 인수 x와 1차 내부함수의 인수 y와
                                    // 2차 내부함수의 인수 z를 더해서 출력
        }
        C(3); // x와 y를 입력받은 상태에서 z가 3일 때 C를 호출
    }
    B(2); // x를 입력받은 상태에서 y가 2일 때 B를 호출
}
A(1); // x가 1일 때 A를 호출

function outside1() { // 외부함수 정의
    var x = 10; // 변수 선언 및 초기화
    function inside1(x) { // 외부함수의 변수와는 별개의 x를 사용하는 내부함수 정의
        return x * 2; // 인수 x의 두 배를 반환
    }
    return inside1; // 외부함수는 내부함수를 반환
}
result3 = outside1()(20); // 외부함수의 내부함수에 10이 아닌 20을 넣은 값 저장

const pet = function (name) { // 함수표현식으로 외부함수 pet 정의
    const getName = function () { // 함수표현식으로 내부함수 getName 정의
        return name; // 외부함수의 인수 name을 반환
    };
    return getName; // getName 반환
};
const myPet = pet("Vivie"); // 내부함수를 저장
myPet(); // 함수 호출

const createPet = function (name) { // 함수표현식으로 정의
    let sex; // sex 변수 정의
    const pet = { // pet 객체 정의
        setName(newName) { // 이름 정하는 메소드
            name = newName; // 외부함수의 인수 name을 변경
        },
        getName1() { // 이름 반환하는 메소드
            return name; // 외부함수의 인수 name을 반환
        },
        getSex() { // 성별 반환하는 메소드
            return sex; // 외부함수 스코프에 정의된 변수 sex를 반환
        },
        setSex(newSex) { // 성별 정하는 메소드
            if ( // 조건
                typeof newSex === "string" && // 인수로 받은 성별이 문자열이고
                (newSex.toLowerCase() === "male" || // 소문자로 바꿨을 때 male이거나
            newSex.toLowerCase() === "female") // female이면
            ) {
                sex = newSex; // 외부함수 스코프에 정의된 변수 sex를 변경
            }
        },
    };
    return pet; // pet 객체를 반환
};
const pet1 = createPet("Vivie"); // pet1 객체를 생성
pet1.getName1(); // 이름 반환: Vivie
pet1.setName("Oliver"); // 이름 변경
pet1.setSex("male"); // 이름 변경
pet1.getSex(); // 성별 반환: male
pet1.getName1(); // 이름 반환: Oliver

const getCode = (function () { // 함수표현식으로 함수 정의
    const secureCode = "0]Eal(eh&2"; // 외부에서 접근할 수 없게 하려는 변수
    return function () { // 함수 반환
        return secureCode; // secureCode를 캡슐화해서 가지고 있다가 반환하는 함수
    }; // * 왜 중첩 함수를 썼는지??
})();
getCode(); // secureCode 반환

const createPet1 = function (name) { // name을 인수로 갖는 외부함수 정의
    return { // 반환: 
        setName1(name) { // 외부함수에서 인수로 받은 name과 별개로 name을 인수로 갖는 내부함수 정의
            name = name; // name에 name 대입: 외부함수에서 정의한 name에 접근할 수 없으므로 작동되지 않음
        },
    };
};

function myConCat(separator) { // 함수 정의
    let result = ""; // 문자열 잇기의 결과를 저장할 빈 문자열
    for (let i = 1; i < arguments.length; i++) { // 0번째 인수(구분자)를 제외한 1번째부터 마지막 인수까지
        result += arguments[i] + separator; // 결과에 각 인수와 구분자를 이어서 저장
    }                                       // * 왜 separator라고 써도 되는지?? 
    return result; // result 반환
}

myConCat(", ", "red", "orange", "blue"); // 테스트: red, orange, blue, 반환

function multiply1(a, b) { // 함수 정의
    b = typeof b !== "undefined" ? b : 1; // b가 undefined일 때 1 저장
    return a * b; // a와 b의 곱 반환
}
multiply1(5); // 5*1=5 반환

function multiply2(a, b = 1) { // 함수 정의, b는 기본값이 1
    return a * b; // 곱 반환
}
multiply(5); // 5*1=5 반환

function multiply3(multiplier, ...theArgs) { // 함수 정의, theArgs는 나머지 매개변수
    return theArgs.map((x) => multiplier * x); // 배열 theArgs의 각 요소에 multiplier를 곱하여 반환
}
var arr1 = multiply3(2, 1, 2, 3); // 테스트: arr1에 저장
console.log(arr1); // arr1 출력: (3) [2, 4, 6]

var a2 = ["Hydrogen", "Helium", "Lithium", "Beryllium"]; // 배열 선언
var a3 = a2.map(function (s) { // 배열에 함수 적용하여 a3에 저장
    return s.length; // 함수는 각 문자열의 길이를 반환
});
console.log(a3); // 8, 6, 7, 9
var a4 = a2.map((s) => s.length); // 화살표 함수 사용하여 같은 처리
console.log(a4); // 8, 6, 7, 9

function Person() { // 함수 정의: Person은 this를 함수 자신으로 정의
    this.age = 0; // Person의 age를 0으로 초기화
    setInterval(function growUp() { // 시간 간격을 두고 함수 실행
        this.age++; // 여기는 함수 내부이므로 this는 전역 객체로 정의
    }, 1000); // 1000 밀리세컨드마다
}
var p = new Person(); // Person 함수로 객체 정의

function Person1() { // 함수 정의: Person1은 this를 함수 자신으로 정의
    var self = this; // self는 함수 자신
    self.age = 0; // Person1의 age를 0으로 초기화
    setInterval(function growUp() { // 시간 간격을 두고 함수 실행
        self.age++; // 함수 내의 변수로 하면 this가 달라서 생기는 문제를 막을 수 있음
    }, 1000); // 1000 밀리세컨드마다
}

function Person2() { // 함수 정의: Person2는 this를 함수 자신으로 정의
    this.age = 0; // Person2의 age를 0으로 초기화
    setInterval(() => { // 시간 간격을 두고 화살표 함수를 실행
        this.age++; // 화살표 함수는 this가 없으므로 상위 스코프인
                    // Person2를 가리키므로 원하는 대로 작동
    }, 1000); // 1000 밀리세컨드마다
}
var p1= new Person2(); // p1은 Person2 함수로 객체 정의