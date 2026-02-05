function some(array, action){ // 배열 array와 함수 action을 파라미터로 갖는 함수 some 정의
	for(var i = 0; i < array.length; i++) // array의 0번째부터 마지막 요소까지 따라감
		if(action(array[i])) return true; // i번째 요소의 값에 대해 action의 결과값이 하나라도 참이면 참 반환
	return false; // if문에 한 번도 걸리지 않고 무사히 for문을 빠져나왔다면 그 어떤 요소도 참이 아닌 것이므로 거짓 반환
}

console.log(some([NaN, 3, 4], isNaN)); // 테스트, 한 개의 요소가 참이므로 참 (true)
// => true
console.log(some([2, 3, 4], isNaN)); // 테스트, 그 어떤 요소도 참이 아니므로 거짓 (false)
// => false