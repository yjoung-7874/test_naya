// ----- 반복자 -----

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
	// 주어진 시작값(디폴트는 0)부터 시작해서 끝값(디폴트는 무한대)까지
	// 스텝(디폴트는 하나)씩 가는 반복자 만드는 함수
	var nextIndex = start; // 다음 인덱스를 첫 인덱스로 초기화
	var n = 0; // 시퀀스의 크기를 트래킹, 값은 0으로 초기화

	var rangeIterator = {
		// 이터레이터 객체 선언
		next: function () {
			// next() 메서드 정의
			var result; // result 변수 선언
			if (nextIndex < end) {
				// 다음 인덱스가 아직 끝이 아니라면
				result = { value: nextIndex, done: false };
				// * "값은 다음 인덱스로 하고?"<-??? 순회 끝났는지 여부는 false
			} else if (nextIndex == end) {
				// 다음 인덱스가 끝이라면
				result = { value: n, done: true };
				// * "값은 n으로 하고?" <- ?? 순회 끝났는지 여부는 true
			} else {
				// 다음 인덱스가 end 이후면
				result = { done: true }; // 값 없이 완료 여부만 반환
			}
			nextIndex += step; // 다음 인덱스를 스텝만큼 늘림
			n++; // 시퀀스 크기 1 증가
			return result; // 결과 반환
		},
	};
	return rangeIterator; // 이터레이터 객체 반환
} // * 최종적으로 시퀀스의 크기 반환 <- ???

var it = makeRangeIterator(1, 4); // 위의 반복자를 사용하여 1부터
// 4까지 하나씩 증가하는 이터레이터 만듦
var result = it.next(); // 현재 값을 저장
while (!result.done) {
	// 순회 끝났는지 여부가 거짓인 동안 (아직 안 끝났을 때)
	console.log(result.value); // 값 출력
	result = it.next(); // next()메서드로 다음 요소로 순회
}
console.log('Itereated over sequence of size: ', result.value);
// 최종적으로 시퀀스 사이즈 출력: 3

// ----- Generator functions -----

function* makeRangeIterator1(start = 0, end = Infinity, step = 1) {
	// 이터레이터를 만드는 함수 생성: 주어진 시작값(디폴트 0)부터 끝값(디폴트 무한)
	// 까지 스텝(디폴트 하나)씩 순회하는 이터레이터
	let n = 0; // 시퀀스 크기 저장하는 변수 초기화
	for (let i = start; i < end; i += step) {
		// 시작부터 끝까지
		n++; // 시퀀스 크기 증가
		yield i; // * 현재 단계 표시하고 중지??
	}
	return n; // 시퀀스 크기 반환
} // 위의 코드와 같지만 더 단순

// ----- Iterables -----

var myIterable = {
	// 나의 이터러블 정의
	*[Symbol.iterator]() {
		// * Symbol.iterator를 정의, 별표 뭐임??
		yield 1; // 1로 표시하고 중지
		yield 2; // 2
		yield 3; // 3
	},
};
for (let value of myIterable) {
	// 만든 이터러블 값별로
	console.log(value); // 출력: 1, 2, 3
}
console.log([...myIterable]); // 이터러블 내용 출력: [1, 2, 3]
console.log(myIterable); // * 추가 코드: 배열로 안 감싸고 이렇게는 안 되나 했는데
// 출력: {Symbol(Symbol.iterator): ƒ} <- ??

for (let value of ['a', 'b', 'c']) {
	// a, b, c 각각에 대해 (배열은 이터러블)
	console.log(value); // 출력: a, b, c
}
console.log([...'abc']); // 전개 구문으로 a, b, c
function* gen() {
	// generator 정의
	yield* ['a', 'b', 'c']; // * a, b, c 각각을 반복하고 반환값을 yield???
} // * 이 부분 자체가 이해가 안 됨
[a, b, c] = new Set(['a', 'b', 'c']); // 집합 a, b, c (집합은 이터러블)
console.log(a); // 출력: a

// ----- Generator 심화 -----

function* fibonacci() {
	// 피보나치 수열 생성기
	var fn1 = 0; // 앞의 값은 0으로 설정
	var fn2 = 1; // 뒤의 값은 1로 설정
	while (true) {
		// * 무한반복??? return이 없는데 어떻게 빠져나오지
		var current = fn1; // 현재 값은 앞의 값
		fn1 = fn2; // 앞의 값은 뒤의 값으로 바꾸고 (한 칸 진행)
		fn2 = current + fn1; // 뒤의 값은 기존 앞의 값과 기존 뒤의 값의 합
		var reset = yield current; // * 값을 현재 값으로 하고 ...??
		if (reset) {
			// reset이 있다면
			fn1 = 0; // 앞의 값은 0으로 설정
			fn2 = 1; // 뒤의 값은 1로 설정
		}
	}
}

var sequence = fibonacci(); // 피보나치 수열 생성
console.log(sequence.next().value); // 한 칸 진행 후 출력: 0
console.log(sequence.next().value); // 한 칸 진행 후 출력: 1
console.log(sequence.next().value); // 한 칸 진행 후 출력: 1
console.log(sequence.next().value); // 한 칸 진행 후 출력: 2
console.log(sequence.next().value); // 한 칸 진행 후 출력: 3
console.log(sequence.next().value); // 한 칸 진행 후 출력: 5
console.log(sequence.next().value); // 한 칸 진행 후 출력: 8
console.log(sequence.next().value); // 한 칸 진행 후 출력: 13
console.log(sequence.next().value); // 한 칸 진행 후 출력: 21
console.log(sequence.next().value); // 한 칸 진행 후 출력: 34
console.log(sequence.next().value); // 한 칸 진행 후 출력: 55
console.log(sequence.next(true).value); // 한 칸 진행하며 초기화한 후 출력: 0
// * 왜 next에 true를 넣으면 reset이 되는지???
console.log(sequence.next().value); // 한 칸 진행 후 출력: 1
console.log(sequence.next().value); // 한 칸 진행 후 출력: 1
console.log(sequence.next().value); // 한 칸 진행 후 출력: 2
