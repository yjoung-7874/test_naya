1234567890; // 10진수 number
42; // 10진수 number
// 0888; // 0이 붙은 10진수를 허용하지 않음
// 0777; // 8진수는 0o로 시작해야 함

var FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2진수 예시
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2진수 예시
var FLT_MANTISSA = 0b00000000011111111111111111111111; // 2진수 예시
console.log(FLT_SIGNBIT); // 10진수로 출력
console.log(FLT_EXPONENT); // 10진수로 출력
console.log(FLT_MANTISSA); // 10진수로 출력

var n = 0o755; // 예제에서 접두사를 0o로 변경: 8진법
var m = 0o644; // 예제에서 접두사를 0o로 변경: 8진법

var a = 0o10; // 8진법

0xfffffffffffffffff; // 16진법
0x123456789abcdef; // 16진법
0xa; // 16진법

1E3; // 지수 계산: 1000
2e6; // 지수 계산: 2000000
0.1e2; // 지수 계산: 10

var biggestNum = Number.MAX_VALUE; // MAX_VALUE 속성 할당
var smallestNum = Number.MIN_VALUE; // MIN_VALUE 속성 할당
var infiniteNum = Number.POSITIVE_INFINITY; // POSITIVE_INFINITY 속성 할당
var negInfinitiveNum = Number.NEGATIVE_INFINITY; // NEGATIVE_INFINITY 속성 할당
var notANum = Number.NaN; // NaN 속성 할당

Math.PI; // Pi값

Math.sin(1.56); // 1.56(라디안)의 사인값

var Xmas95 = new Date("December 25, 1995"); // Date 객체 생성
Xmas95.getMonth() // 달 반환(11)
Xmas95.getFullYear(); // 연도 반환(1995)

var today = new Date(); // 오늘의 날짜 객체 생성
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // 1995년이 끝나는 순간 객체 생성
endYear.setFullYear(today.getFullYear()); //endYear의 연도를 현재 연도로
var msPerDay = 24 * 60 * 60 * 1000; // 일당 몇 밀리세컨드인지 계산
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay; // 지금 시간으로부터 연도가
                                                                 // 끝나기까지 남은 밀리세컨드 계산
var daysLeft = Math.round(daysLeft); // 일 수로 반올림

var IPOdate = new Date(); // 오늘의 날짜 객체 생성
IPOdate.setTime(Date.parse("Aug 9, 1995")); // 날짜 문자열을 파싱하여 IPOdate에 할당

function JSClock() { // 시계 함수 정의
    var time = new Date(); // 오늘의 날짜 객체 생성
    var hour = time.getHours(); // 시간(0~23) 얻음
    var minute = time.getMinutes(); // 분(0~59) 얻음
    var second = time.getSeconds(); // 초(0~59) 얻음
    var temp = "" + (hour > 12 ? hour - 12 : hour); // 12시 이상이라면 12를 빼서, 미만이라면 그대로 할당
    if (hour == 0) temp = "12"; // 0시일 경우 12시 할당
    temp += (minute < 10 ? ":0" : ":") + minute; // 한 자리 수라면 앞에 0을 붙이고 두 자리면 붙이지 않고 연결
    temp += (second < 10 ? ":0" : ":") + second; // 한 자리 수라면 앞에 0을 붙이고 두 자리면 붙이지 않고 연결
    temp += hour >= 12 ? " P.M." : " A.M."; // 12시 이상이라면 오후, 이전이라면 오전 붙임
    return temp; // 이렇게 완성된 시각 문자열 반환
}