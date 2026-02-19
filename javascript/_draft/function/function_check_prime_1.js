function isPrime(number){ // number를 파라미터로 갖는 함수 isPrime 정의
	if(isNaN(number)) return false; // 인수가 숫자 값이 아닐 시 거짓

	if(number < 2) return false; // 음수, 0, 1은 소수가 아니므로 거짓
	if(number == 2) return true; // 2는 소수, 아래 for문에 적용할 수 없으므로 예외적으로 작성

	for(i = 2; i * i <= number; i++){ // number에 대해 2부터 제곱근(겹치지 않도록 하는 인수 쌍에서 가장 큰 인수)까지
		if(number % i == 0) return false; // i가 number의 인수일 경우 소수가 아니므로 거짓
	}

	return true; // if문에 걸리지 않고 for문을 빠져나왔을 시 합성수가 아니므로 참
}

console.log(isPrime(3)) // 예시 출력 (true)