// * 코드에 오류가 있어요.
// * 출력될 때 앞에 붙는 (6)은 요소 개수인가요?

function listToArray(list){ // 리스트를 배열로 바꿔 주는 함수 listToArray 정의
	var p = list; // 파라미터 list는 함수 스코프 지역변수 p에 저장
	var array = []; // 빈 배열 array 선언

	while(p){ // p가 남아 있는 동안
		array.push(p.value); // p의 value를 array의 다음 요소로 붙이고
		p = p.rest; // p는 value를 뺀 나머지인 rest로 업데이트
	}

	return array; // 처리가 끝난 array를 반환
}

function arrayToList(array){ // 앞서 arrayToList.js 파일에서 정의한 함수와 동일
	var list = {};
	list.value = array[array.length - 1];
	list.rest = null;

	for(let i = array.length - 2; i >= 0; i--){
		var temp = {};
		temp.value = array[i];
		temp.rest = list;

		list = temp;
	}

	return list;
}

var a = [1, 2, 3, 4, 5, 6]; // 1~6 값을 갖는 예시 배열 a 생성
// var list = arrayToList(array); 원래 코드, array라는 변수가 아직 초기화되지 않아서 호이스팅으로
							   // array가 undefined으로 초기화되고 이에 undefined의 length 속성
							   // 처리를 할 수가 없어서 오류 발생
var list = arrayToList(a); // 고친 코드, a에 arrayToList 함수 적용한 값을 list에 저장
var array = listToArray(list); // list에 listToArray 함수 적용한 값을 array에 저장

console.log(array); // array 결과 출력 ([1, 2, 3, 4, 5, 6])