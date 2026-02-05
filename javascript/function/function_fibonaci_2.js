// recursion
function f1(number){ // 재귀함수를 이용한 방법 함수 f1 정의
	if(number == 0 || number == 1) return 1 // 피보나치 수열의 0번째와 1번째는 앞의 두 개를 더할 수 없으므로
											// 이 차례까지 내려오면 1로 수동 초기화
	first_ouput_value = f1(number - 1) // 현재 순서보다 한 차례 앞선 값을 재귀적으로 호출
	second_output_value = f1(number - 2) // 현재 순서보다 두 차례 앞선 값을 재귀적으로 호출
	
	return first_ouput_value + second_output_value // 더해서 반환
}

// loop
function f2(number){ // 반복문을 이용한 방법 함수 f2 정의
	if(number == 0 || number == 1) return 1; // 같은 이유로 1로 초기화

	var a2 = 1, a1 = 1, a; // 2번째 이상일 경우, 더할 수를 1과 1로 초기화하고
	for(i = 2; i <= number; i++){ // 2번째부터 number번째까지
 		a = a1 + a2; // 앞선 두 수를 더한 값을 a에 저장하고
 		a2 = a1; // 한 차례 뒤로 미루고
 		a1 = a; // 지금까지 더한 값을 다음 차례에 더할 값으로 저장
	}

	return a; // 반복문이 끝나고 더한 값을 반환
}


console.log(f1(5)) // 재귀함수를 이용한 방법 테스트 (8)
console.log(f2(5)) // 반복문을 이용한 방법 테스트 (8)