var arrays = [[1, 2, 3], [4, 5], [6]]; // 예시 2차원 배열을 var 키워드를 활용하여 전역으로 선언
var newArray = arrays.reduce(function(a, b){ // reduce 메소드를 이용해 임시로 정의한 b를 a에
											 // 이어붙이는 함수를 arrays에 적용하여
	return a.concat(b); 					 // 하나의 반환값(이어진 배열)을 반환
}); // a==accumulator, b==currentValue. 값이 a에 쌓이면서 2개 초과의 배열이어도 한 번에 이어서 반환할 수 있음
console.log(newArray); // 테스트, 모두 하나로 이어진 배열 출력 ([1,2,3,4,5,6])
// => [1, 2, 3, 4, 5, 6]