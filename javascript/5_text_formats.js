'foo'; // 작은따옴표를 이용한 문자열 정의
"bar"; // 큰따옴표를 이용한 문자열 정의

"\xA9"; // 16진법 이스케이프 사용
"\u00A9"; // 유니코드 이스케이프 사용, 위와 결과는 같음

"\u{2F804}"; // 유니코드 포인트 코드 이스케이프
"\uD87E\uDC04"; // 위와 같은 결과를 유니코드 이스케이프만으로 도출하기

var s = new String("foo"); // String 객체 생성
console.log(s); // * {'0': 'f', '1': 'o', '2': 'o'} 출력...해야 하는데??
typeof s; // object 반환
let a={'a':1,'b':2}; // * 추가 코드: 비교용 예시 객체
console.log(a); // * 추가 코드: {a: 1, b: 2} 출력

var s1 = "2 + 2"; // 문자열 리터럴을 할당
var s2 = new String("2 + 2"); // 문자열 객체를 할당
eval(s1); // eval 함수로 실행이 됨: 4 반환
eval(s2); // eval 함수로 실행이 안 됨: "2 + 2" 반환

var mystring = "Hello, World!"; // 문자열 할당
var x = mystring.length; // 길이 속성인 length로 13 할당
mystring[0] = "L"; // 문자열은 대괄호로 접근 가능하지만 immutable하므로 변화 없음
console.log(mystring[0]); // 그대로 H 출력

console.log( // 출력
    "string text line 1\n\
string text line 2",
); // 일반 문자열 표현으로 두 줄짜리 문자열을 출력

console.log(`string text line 1
string text line 2`); // 다중 선 문자열

var a1 = 5; // 변수 선언
var b = 10; // 변수 선언
console.log("Fifteen is " + (a1 + b) + " and\nnot " + (2 * a1 + b) + ".");
// 일반 문자열로 표현

var a2 = 5; // 변수 선언
var b1 = 10; // 변수 선언
console.log(`Fifteen is ${a2 + b1} and\nnot ${2 * a2 * b1}.`);
// 템플릿 문자열로 표현

var msPerDay = 24 * 60 * 60 * 1000;
var july172014 = new Date(msPerDay * (44 * 365 + 11 + 197)); // 2014년 7월 17일 객체 생성
var options = { // 표기의 옵션값 설정하는 객체 생성: 모두 2자리수로, timezone은 약어로
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
};
var americanDateTime = new Intl.DateTimeFormat("en-US", options).format;
// 정한 포맷에 따라 해당 시각이 미국 시간으로 어떻게 되는지 포맷팅하는 객체 할당
console.log(americanDateTime(july172014)); // 2014년 7월 17일에 적용하여 출력

var gasPrice = new Intl.NumberFormat("en-US", { // 미국 통화로 변환
    style: "currency", // 통화
    currency: "USD", // 미국 달러
    minimumFractionDigits: 3, // 세 자리 단위로 끊기
});
console.log(gasPrice.format(5.259)); // 5.259달러에 적용: $5.259 출력
var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
// 중국 통화로 변환
    style: "currency", // 통화
    currency: "CNY", // 중국 위안
});
console.log(hanDecimalRMBInChina.format(1314.25)); // 1314.25위안에 적용

var names = ["Hochberg", "Hönigswald", "Holzman"]; // 독일 이름들 배열 선언
var germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk"); // 전화번호부 유형
                                                               // (반모음도 고려)의
                                                               // 콜레이터 객체 만들기
console.log(names.sort(germanPhonebook.compare).join(", ")); // 순서대로 이어붙이기

var germanDictionary = new Intl.Collator("de-DE-u-co-dict"); // 사전 유형의 콜레이터 생성
console.log(names.sort(germanDictionary.compare).join(", ")); // 순서대로 이어붙이기