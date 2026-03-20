// ----- 예 -----
// ----- 버퍼와 뷰 사용하기 -----

var buffer = new ArrayBuffer(16); // 16바이트 버퍼 만들기:
// 바이트가 모두 0으로 최고하된 메모리 청크

if (buffer.byteLength === 16) {
	// 길이가 16이라면
	console.log("Yes, it's 16 bytes."); // 16바이트라고 출력
} else {
	// 아니면
	console.log("Oh no, it's the wrong size!"); // 아니라고 출력
}

var int32View = new Int32Array(buffer); // 32비트 부호 있는 정수 배열 뷰 만듦

for (var i = 0; i < int32View.length; i++) {
	// 각 요소에 대해
	int32View[i] = i * 2; // 인덱스 곱하기 2 값 저장: 4항목이 0, 2, 4, 6
}

// ----- 같은 데이터에 여러 뷰 -----

var int16View = new Int16Array(buffer); // 16비트 부호 있는 정수 배열 뷰 만듦
for (var i = 0; i < int16View.length; i++) {
	// 각 요소에 대해
	console.log('Entry ' + i + ': ' + int16View[i]); // 인덱스와 그 값 출력:
	// 0, 0, 2, 0, 4, 0, 6, 0
} // 기존 32비트 뷰와 같은 버퍼 공유

int16View[0] = 32; // 16비트 뷰로 0번째 값을 32로 변경
console.log('Entry 0 in the 32-bit array is now ' + int32View[0]);
// 32비트 뷰로 접근해 0번째 값 출력: 32

// ----- 복잡한 데이터 구조(체)와 작업하기 -----

var buffer1 = new ArrayBuffer(24); // 24바이트 버퍼 생성
var idView = new Uint32Array(buffer1, 0, 1); // buffer1로 부호 없는 32비트 정수
// 배열 뷰 만듦, * 0, 1은 지
var usernameView = new Uint8Array(buffer1, 4, 16); // 부호 없는 8비트 정수 배열 뷰 만듦
var amountDueView = new Float32Array(buffer1, 20, 1); // 32비트 실수 배열 뷰 만듦
var fee = amountDueView[0]; // * 추가 코드: amountDueView로 지불할 요금 접근
console.log(fee); // 출력: 0(초기값)

// ----- 보통 배열로 변환 -----

var typedArray = new Uint8Array([1, 2, 3, 4]), // 배열로 부호 없는 8비트 정수 배열 뷰 만듦
	normalArray = Array.prototype.slice.call(typedArray); // 일반 배열로 다시 변환
normalArray.length === 4; // * ???
normalArray.constructor === Array; // * ???
