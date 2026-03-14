// ----- 객체와 속성 -----

const myCar = new Object(); // myCar 객체 생성
myCar.make = 'Ford'; // make를 Ford로 설정
myCar.model = 'Mustang'; // model을 Mustang으로 설정
myCar.year = 1969; // year를 1969로 설정

const myCar1 = {
	// 객체 초기자를 활용하여 myCar1 객체 생성
	make: 'Ford', // make를 Ford로 설정
	model: 'Mustang', // model을 Mustang으로 설정
	year: 1969, // year를 1969로 설정
};

console.log(myCar.color); // 객체에 할당되지 않은 속성은 null이 아니라 undefined를 반환

const myCar2 = {}; // 중괄호 표기법으로 객체 생성
myCar2['make'] = 'Ford'; // 대괄호 표기법(속성 접근자)으로 속성 추가
myCar2['model'] = 'Mustang'; // 대괄호 표기법으로 속성 추가
myCar2['year'] = 1969; // 대괄호 표기법으로 속성 추가

const myObj = new Object(), // 네 개의 변수를 쉼표로
	str = 'myString', // 한 번에 생성하고 할당
	rand = Math.random(), // 객체, 문자열, 무작위 숫자, 객체
	obj = new Object();
myObj.type = '마침표 구문'; // 마침표 구문으로 속성 추가
myObj['date created'] = '공백을 포함한 문자열'; // 대괄호 표기법으로 속성 추가: 공백 포함
myObj[str] = '문자열 값'; // 대괄호 표기법으로 속성 추가: 문자열 변수
myObj[rand] = '무작위 수'; // 대괄호 표기법으로 속성 추가: 무작위 숫자 변수
myObj[obj] = '객체'; // 대괄호 표기법으로 속성 추가: 객체 변수
// (객체는 문자열로 변환되어 키로 사용됨)
myObj[''];
('빈 문자열까지'); // 대괄호 표기법으로 속성 추가: 빈 문자열
console.log(myObj); // 객체 출력

let propertyName = 'make1'; // 변수에 문자열 저장
myCar[propertyName] = 'Ford'; // 변수에 저장된 문자열 값으로 속성 생성
propertyName1 = 'model1'; // 변수에 문자열 저장
myCar[propertyName1] = 'Mustang'; // 변수에 저장된 문자열 값으로 속성 생성

function showProps(obj, objName) {
	// 객체와 객체 이름을 매개변수로 받는 함수 정의
	let result = ''; // 결과를 저장할 빈 문자열 생성
	for (let i in obj) {
		// 객체의 열거 가능한 속성에 대해 반복
		if (obj.hasOwnProperty(i)) {
			// 객체가 가지고 있는 속성이라면
			result += `${objName}.${i} = \n${obj[i]}\n`; // 객체 이름과 속성 이름, 그리고 속성 값을 결과 문자열에 추가
		}
	}
	console.log(result); // 결과 출력
}

showProps(myCar, 'myCar'); // myCar 객체의 속성과 값을 출력

// ----- 객체 속성 나열하기 -----

function listAllProperties(o) {
	// 같은 이름의 속성이 체인에서 앞서 존재해서
	// 프로토타입 체인 상에서 숨은 속성도 나열할
	// 수 있는 함수를 정의
	let objectToInspect = o; // 매개변수로 받은 객체를 검사 대상으로
	let result = []; // 결과를 저장할 빈 배열
	while (objectToInspect !== null) {
		// 객체가 null이 될 때까지 반복
		result = result.concat(Object.getOwnPropertyNames(objectToInspect));
		// 현재 객체의 모든 키를 결과 배열에 추가
		objectToInspect = Object.getPrototypeOf(objectToInspect);
		// 프로토타입 체인 상에서 다음 객체로 (위로) 이동
	}
	return result; // 결과 배열을 반환
}

// ----- 객체 생성하기 -----

property_1 = 'key1'; // 변수에 문자열 저장
const obj1 = {
	// 객체 초기자를 사용해 객체 생성
	property_1: 'value1', // 식별자를 키로 사용(내부적으로는 해당 문자열?)
	2: 'value2', // 숫자를 키로 사용
	'property 3': 'value3', // 문자열을 키로 사용
};
console.log(obj1.property_1); // 식별자를 키로 사용했을 때 접근이 어떻게 되는지 확인
console.log(obj1['property_1']);
console.log(obj1[property_1]);
console.log(obj1.key1);
console.log(obj1['key1']);

const myHonda = {
	// myHonda 객체 생성
	color: 'red', // 속성 설정
	wheels: 4, // 속성 설정
	engine: { cylinders: 4, size: 2.2 }, // 속성에 익명의 객체를 할당
};
const myCar3 = Object.create(myHonda); // myHonda를 프로토타입으로 하는 객체 생성

function Car(make, model, year) {
	// Car 생성자 함수 정의
	this.make = make; // this를 사용하여 속성 설정
	this.model = model; // 속성 설정
	this.year = year; // 속성 설정
}

var mycar = new Car('Eagle', 'Talon TSi', 1993); // 만든 생성자 함수를 이용하여 객체 생성

const kenscar = new Car('Nissan', '300ZX', 1992); // 객체 또 생성
const vpgscar = new Car('Mazda', 'Miata', 1990); // 또 생성

function Person(name, age, sex) {
	// Person 생성자 함수 정의
	this.name = name; // name 속성 설정
	this.age = age; // 속성 설정
	this.sex = sex; // 속성 설정
}

const rand1 = new Person('Rand McKinnon', 33, 'M'); // 인스턴스 정의
const ken = new Person('Ken Jones', 39, 'M'); // 인스턴스 정의

function Car1(make, model, year, owner) {
	this.make = make; // make 속성 설정
	this.model = model; // 속성 설정
	this.year = year; // 속성 설정
	this.owner = owner; // Person 객체를 갖는 owner 속성 추가
}

const car1 = new Car1('Eagle', 'Talon TSi', 1993, rand1); // Car1 객체 생성, owner로
// Person 객체 rand1 전달
const car2 = new Car1('Nissan', '300ZX', 1992, ken); // 또 생성, owner로 ken 전달

car1.color = 'black'; // 이미 정의된 car1 객체에 color 속성 추가

const Animal = {
	// 동물 속성과 메서드를 캡슐화
	type: '무척추동물', // 기본 타입을 설정
	displayType: function () {
		// 메서드 정의
		console.log(this.type); // 해당 객체의 type 속성을 출력
	},
};
const animal1 = Object.create(Animal); // 이를 프로토타입으로 하는 객체 생성
animal1.displayType(); // 메서드 활용: 무척추동물 출력
const fish = Object.create(Animal); // Animal을 프로토타입으로 하는 객체 생성
fish.type = '물고기'; // type을 물고기로 지정
fish.displayType(); // 메서드 활용: 물고기 출력

// ----- 객체 속성 정의하기 -----

Car1.prototype.color = null; // Car 객체 타입에 color 속성 추가하고 기본값을 null로
car1.color = 'black'; // color 속성이 추가된 car1 인스턴스에 속성 값 설정

// ----- 메서드 정의 -----

function prettyPrint(str) {
	// * 추가 코드: 함수 정의
	console.log(str); // * 추가 코드: 문자열 출력
	console.log('-----'); // * 추가 코드: 구분선 출력
}
function displayCar() {
	// 메서드가 될 함수 정의
	const result = `아름다운 ${this.year} ${this.make} ${this.model}`; // Car의 속성 출력
	prettyPrint(result); // 함수 이용
}

// this.displayCar = displayCar; // 객체의 메서드로 할당(객체 정의에 넣어야 하는 코드)
// 객체 타입을 새로 정의하고 싶지 않으므로 다른 방법 사용
Car1.prototype.displayCar = displayCar; // * 추가 코드: 위의 내용 응용하여 Car1에 메서드 추가

car1.displayCar(); // Car1의 인스턴스이므로 메서드 사용 가능
car2.displayCar(); // 마찬가지

// ----- this로 객체 참조하기 -----

const Manager = {
	// 객체 정의
	name: 'John', // 속성 정의
	age: 27, // 속성 정의
	job: '소프트웨어 엔지니어', // 속성 정의
};
const Intern = {
	// 객체 정의
	name: 'Ben', // 속성 정의
	age: 21, // 속성 정의
	job: '소프트웨어 엔지니어 인턴', // 속성 정의
};
function sayHi() {
	// 함수 정의
	console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`); // 인삿말 출력
}
Manager.sayHi = sayHi; // 메서드 할당
Intern.sayHi = sayHi; // 메서드 할당
Manager.sayHi(); // 안녕하세요, 제 이름은 John입니다.
Intern.sayHi(); // 안녕하세요, 제 이름은 Ben입니다.

function howOldAmI() {
	// 함수 정의
	console.log(`저는 ${this.age}살입니다.`); // 나이 출력
}
Manager.howOldAmI = howOldAmI; // 메서드 할당
Manager.howOldAmI(); // 저는 27살입니다.

// ----- 접근자와 설정자 정의하기 -----

const o = {
	// 객체 정의
	a: 7, // 속성 정의
	get b() {
		// 접근자 정의
		return this.a + 1; // a+1 반환
	},
	set c(x) {
		// 설정자 정의
		this.a = x / 2; // a를 인수의 절반으로 설정
	},
};
console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50; // a를 25로 설정
console.log(o.a); // 25

const o1 = { a: 0 }; // 객체 생성
Object.defineProperties(o, {
	// 접근자/설정자 추가 메서드 활용
	b: {
		// b 메서드는
		get: function () {
			// 접근자로
			return this.a + 1; // a+1 값을 반환
		},
	},
	c: {
		// c 메서드는
		set: function () {
			// 설정자로
			this.a = x / 2; // a를 x의 절반으로 설정
		},
	},
});
o1.c = 10; // o1의 a를 5로 설정
console.log(o1.b); // 6

// ----- 속성 삭제 -----

const myobj = new Object(); // 객체 생성
myobj.a = 5; // 속성 설정
myobj.b = 12; // 속성 설정
delete myobj.a; // 속성 삭제
console.log('a' in myobj); // false

// ----- 객체 비교 -----

const fruit = { name: '사과' }; // 객체 생성
const fruitbear = { name: '사과' }; // 내용이 똑같은 객체 생성
fruit == fruitbear; // 비교: false 반환
fruit === fruitbear; // 비교: false 반환

const fruitbear1 = fruit; // 객체 참조를 할당
fruit == fruitbear1; // 비교: true 반환
fruit === fruitbear1; // 비교: true 반환
fruit.name = '포도'; // 한 객체의 속성 변환
console.log(fruitbear1); // 이것도 같이 변환됨: { name: "포도" }
