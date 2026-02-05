var arrays = [[1, 2, 3], [4, 5], [6]]; // 예시 2차원 배열을 var 키워드를 활용하여 전역으로 선언
var newArray = []; // 결과를 담을 빈 배열 생성
for(var i = 0; i < arrays.length; i++){ // arrays를 열 방향으로 0번째부터 마지막 행까지 따라감
	var subArray = arrays[i]; // i번째 행을 저장하는 배열 변수 선언
	for(var j = 0; j < subArray.length; j++) // 중첩 반복문으로 subArray의 첫 번째부터 마지막 요소까지 따라감
		newArray.push(subArray[j]); // push 메소드(파이썬의 append와 같은 듯?)로 newArray에 subArray의 j번째 요소를 붙임
}
console.log(newArray); // 테스트, 하나의 1차원 배열로 이어붙여진 결과 출력 ([1,2,3,4,5,6])
// => [1, 2, 3, 4, 5, 6]