function every(array, action){ // 배열 array와 함수 action을 인수로 받는 함수 every 정의
	for(var i = 0; i < array.length; i++) // 키워드 var을 활용하여 변수 i를 함수 스코프로 선언 및 초기화하고
										  // 0번째부터 array의 마지막 번째까지 트래킹하도록 함
		if(!action(array[i])) return false; // array의 i번째 값에 대해 action을 적용한 결과가 하나라도 거짓이면 거짓
	return true; // if문에 걸리지 않고 무사히 for문을 빠져나왔을 경우 참
}

console.log(every([NaN, NaN, NaN], isNaN)); // 테스트, 모든 항목이 참이므로 참 (true)
// => true
console.log(every([NaN, NaN, 4], isNaN)); // 테스트, 한 항목이 거짓이므로 거짓 (false)
// => false