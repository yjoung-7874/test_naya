// * 왜 알고리즘 구성을 이렇게 해야 하는지 모르겠어요.
// * rest에 저장된 값도 또 다른 오브젝트인 건가요?
// * value와 rest는 임의로 만든 속성인 것이지 오브젝트에 원래 있는 속성은 아니지요?

function arrayToList(array){ // 배열 array를 파라미터로 갖는 함수 arrayToList 정의
	var list = {}; // 키워드 var로 리스트를 담을 빈 오브젝트 생성
	list.value = array[array.length - 1]; // 오브젝트 list의 value 속성에 array의 마지막 값 저장
	list.rest = null; // value가 아닌 나머지를 가리킬 rest 속성에 null 저장

	for(let i = array.length - 2; i >= 0; i--){ // array의 마지막 값은 이미 저장했으므로 마지막으로부터
												// 두 번째 값부터 줄어들며 0번째 값까지 살핌
		var temp = {}; // 임시 오브젝트 생성
		temp.value = array[i]; // 임시 오브젝트의 value 속성에는 array의 i번째 요소를 저장
		temp.rest = list; // rest 속성에는 지금까지 i+1번째부터 마지막 요소까지를 value에
						  // 갖고 있고 rest에 null을 갖고 있는 list를 저장

		list = temp; // 이렇게 정리한 temp를 list에 저장
	}

	return list; // 일련의 과정 완료 후 list 반환
}

var array = [1, 2, 3, 4, 5, 6]; // 1~6 값 가지는 배열 array 선언
var list = arrayToList(array); // array에 arrayToList 함수를 적용한 결과를 list에 저장

//test
function printList(list){ // 리스트를 출력하기 위한 함수 printList 정의
	if(list){ // list가 있다면
		console.log(list.value); // list의 value 속성을 콘솔에 출력
		printList(list.rest); // list의 나머지인 rest 속성으로 함수를 재귀적으로 호출
	}else{ // list가 없다면
		console.log('null'); // 'null' 출력
	}
}
printList(list); // 리스트로 변환된 결과 출력 (1\n2\n3\n4\n5\n6\nnull)
console.log(typeof list) // 자료형 테스트 (object)
// result:
// 1
// 2
// 3
// 4
// 5
// 6
// null