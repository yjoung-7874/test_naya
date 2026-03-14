/* function successCallback(result) { // 비동기 작업 성공 시의 콜백
    console.log("Audio file ready at URL: " + result); // 파일 위치 출력
}
function failureCallback(error) { // 비동기 작업 실패 시의 콜백
    console.log("Error generating audio file: " + error); // 에러 메시지 출력
}
createAudioFileAsync(audioSettings, successCallback, failureCallback)
// 음성 설정에 대한 정보를 받아 파일을 생성하고 결과에 따라 콜백 실행
*/ // 정의되지 않은 변수와 함수들이 있어 실행 불가능

/* createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
// createAudioFileAsync가 promise를 반환하게 하여 then 메서드를 이용해 똑같은 작업

const promise = createAudioFileAsync(audioSettings); // 변수로 설정하고
promise.then(successCallback, failureCallback); // 그 뒤에 함 (똑같은 코드)
*/ // 마찬가지로 실행 불가능

/* const promise = doSomething(); // promise를 반환하는 함수로 객체 설정
const promise2 = promise.then(successCallback, failureCallback);
// then 메서드를 활용해 promise에 콜백을 실행하고 그 결과를 promise2에 저장
// ??

const promise3 = doSomething().then(successCallback, failureCallback);
// 위와 같되 더 간략한 코드
*/ // 마찬가지로 실행 불가능

/* doSomething(function (result) { // 비동기 작업 수행
    doSomethingElse( // 다른 비동기 작업 수행
        result, // 결과를 가지고
        function (newResult) { // 콜백을 적용
            doThirdThing( // 또 다른 비동기 작업 수행
                newResult, // 결과를 가지고
                function (finalResult) { // 콜백을 적용
                    console.log("Got the final result: " + finalResult); // 출력
                },
                failureCallback, // 작업 실패 시 적용할 콜백
            );
        },
        failureCallback, // 콜백
    );
}, failureCallback)
*/ // 콜백 지옥, 콜백들이 정의되지 않아서 실행 불가능

/* doSomething() // 비동기 작업 수행
.then(function (result) { // promise 내에서 resolve를 호출했을 때
    return doSomethingElse(result); // 그 결과를 기반으로 다른 콜백을 반환
})
.then(function (newResult) { // 그 콜백이 성공했을 때
    return doThirdThing(newResult); // 그 결과를 기반으로 또 다른 콜백을 반환
})
.then(function (finalResult) { // 그 콜백이 성공했을 때
    console.log("Got the final result: " + finalResult); // 출력
})
.catch(failureCallback); // 무언가 실패하면 실패 콜백 적용
*/ // 위의 예시를 promise chain으로 재구성

/* doSomething() // 비동기 작업 수행
.then((result) => doSomethingElse(result)) // 성공 시 다른 콜백 호출
.then((newResult) => doThirdThing(newResult)) // 성공 시 다른 콜백 호출
.then((finalResult) => { // 성공 시
    console.log(`Got the final result: ${finalResult}`); // 출력
})
.catch(failureCallback); // 무언가 실패하면 실패 콜백 적용
*/ // 위의 예시를 화살표 함수를 사용하여 재구성

new Promise((resolve, reject) => { // 콜백을 인자로 가지는 promise 선언
	console.log('Initial'); // 출력: Initial
	resolve(); // 성공 호출
})
	.then(() => { // 성공하면
		throw new Error('Something failed'); // 에러 발생시키기
		console.log('Do this'); // 에러가 rejection 발생시켜서 실행되지 않음
	})
	.catch(() => { // 실패하면
		console.log('Do that'); // 출력: Do that
	})
	.then(() => { // * 앞의 둘 중 하나라도 성공하면??
		console.log('Do this, whatever happened before');
        // 출력: Do this, whatever happened before
	});

// ----- Error propagation -----

/* try { // 밑의 내용을 시도
    const result = syncDoSomething(); // 동기 작업 수행
    const newResult = syncDoSomethingElse(result); // 그걸 기반으로 다른 동기 작업 수행
    const finalResult = syncDoThirdThing(newResult); // 그걸 기반으로 다른 동기 작업 수행
    console.log(`Got the final result: ${finalResult}`); // 출력
} catch (error) { // 만약 위의 시도에서 에러가 났다면
    failureCallback(error); // 실패 콜백
}
    */ // 콜백들이 정의되지 않아서 실행 불가, 동기 코드 동작의 예시

/* async function foo() { // async 함수 선언
    try { // 밑의 내용 시도
        const result = await doSomething(); // 비동기 작업 수행 결과 저장
        const newResult = await doSomethingElse(result); // 그걸 기반으로 다른 비동기 작업
                                                         // 수행 후 그 결과 저장
        const finalResult = await doThirdThing(newResult); // 위와 같음
        console.log(`Got the final result: ${finalResult}`); // 출력
    } catch (error) { // 에러가 나면
        failureCallback(error); // 실패 콜백
    }
}
    */ // 마찬가지로 실행 불가, async와 await 키워드 사용의 예시

// ----- Promise rejection events -----

window.addEventListener( // window에 이벤트 핸들러 부착
    "unhandledrejection", // 핸들러 없는 reject에
    (event) => { // event를 인수로 받아
        // event.promise와 event.reason을 이용해서 reject된 promise를 분석
        event.preventDefault(); // 윈도우의 기본 행동을 막고(NodeJS에서 콘솔에 오류 기록)
    },
    false, // * 왜 있음?
); // unhandledrejection 이벤트를 처리하는 핸들러 추가하는 코드

// ----- 오래된 콜백 API를 사용하여 Promise 만들기 -----

//setTimeout(() => saySomething("10 seconds passed"), 10000);
// 오래된 API 예시: saySomething 콜백이 정의되지 않았으므로 실행 불가

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// 문제가 되는 setTimeout을 Promise로 감싸 promise 객체로 wait에 할당
wait(10000) // 10초 기다리기
.then(() => saySomething("10 seconds")) // 성공하면 saySomething 수행
.catch(failureCallback); // 실패 콜백

// ----- Composition -----

/* Promise.all([func1(), func2(), func3()]) // Promise.all을 사용하여 여러
                                         // 비동기 작업을 병렬적으로 수행
.then(([result1, result2, result3]) => {}); // * 각 콜백의 결과로 처리??
*/ // 모든 비동기 작업이 완료될 때까지 기다리는 예시 

/* [func1, func2, func3] // 콜백들
.reduce((p, f) => p.then(f), Promise.resolve()) // reduce 메서드를 적용해 then으로 처리
.then((result3) => {}); // *???
*/ // * 위의 코드와 같은 예시??

const applyAsync = (acc, val) => acc.then(val); // 이전까지의 promise에 then 처리하는 함수
const composeAsync = 
(...funcs) => // 인자로 들어온 모든 함수를 배열로 모아 
(x) => // * 초기값을 인자로 받아 ..??
    funcs.reduce(applyAsync, Promise.resolve(x)); // * promise를 모은 것에 콜백을 하나씩 적용??

/* const transformData = composeAsync(func1, func2, func3); // 여러 함수를 인수로 받아
const result3 = transformData(data); // * 파이프라인 통해 전달되는 초기값을 허용하는 새 함수 반환??
*/ // func1, 2, 3, data가 정의되지 않았으므로 실행 불가

let result; // 결과를 저장할 변수 선언
for (const f of [func1, func2, func3]) { // 각 함수에 대해서
    result = await f(result); // 결과는 각 함수를 끝까지 실행한 뒤의 promise
}
// result 사용

// ----- Timing -----

Promise.resolve().then(() => console.log(2));
console.log(1);